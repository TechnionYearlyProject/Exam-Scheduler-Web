'use strict';

const FRIDAY = 5;
const SATURDAY = 6;
const EXAMS_ON_FRIDAY_AMOUNT = 1;

function HeuristicCalculator(examPeriodLength, fridayIndexes){
    this.specializationMapping = {};
    this.examsAmountInADay = [];
    for (var i = 0; i < examPeriodLength; i++){
        this.examsAmountInADay.push(0);
    }
    this.examPeriodLength = examPeriodLength;
    this.fridayIndexes = fridayIndexes;
}

HeuristicCalculator.prototype.findBestDayForScheduling = function(course){
    var indexesOfBestExamsDays = [];
    var currentHeuristicValue = this.getHeuristicValue();
    for (var j = 0; j < this.examPeriodLength; j++){
        var canBeScheduledToTheDay = true;
        for (var i = 0; i < course.specializations.length; i++){
            var specialization = course.specializations[i];
            if (this.fridayIndexes.indexOf(j) != -1 && this.examsAmountInADay[j] > EXAMS_ON_FRIDAY_AMOUNT){
                canBeScheduledToTheDay = false;
                continue;
            }
            for (var k = 0; k < course.preparationTime; k++){
                if(this.specializationMapping[specialization.name][specialization.semesterNumber][j - k]){
                    canBeScheduledToTheDay = false;
                    break;
                }
            }
        }
        if (!canBeScheduledToTheDay){
            continue;
        }
        if (this.examsAmountInADay[j] + 1 > currentHeuristicValue) {
            currentHeuristicValue++;
            indexesOfBestExamsDays = [j];
        } else if (this.examsAmountInADay[j] + 1 == currentHeuristicValue) {
            indexesOfBestExamsDays.push(j);
        }
    }
    if(course.isLast){
        return indexesOfBestExamsDays[indexesOfBestExamsDays.length - 1];
    } else if (course.isFirst) {
        return indexesOfBestExamsDays[0];
    } else {
        var randomIndex = Math.floor(Math.random() * indexesOfBestExamsDays.length);//TODO: array bonds overflow?
        return indexesOfBestExamsDays[randomIndex];
    }

};

HeuristicCalculator.prototype.getHeuristicValue = function(){
    return Math.max.apply(Math, this.examsAmountInADay);
};


HeuristicCalculator.prototype.updateHeuristic = function(course, indexOfAssignedExamDay, remove){
    for (var i = 0; i < course.specializations.length; i++) {
        var specialization = course.specializations[i];
        if (!(specialization.name in this.specializationMapping)){
            this.specializationMapping[specialization.name] = {};
        }
        if (!(specialization.semesterNumber in this.specializationMapping[specialization.name])){
            this.specializationMapping[specialization.name][specialization.semesterNumber] = [];
            for (var j = 0; j < this.examPeriodLength; j++){
                this.specializationMapping[specialization.name][specialization.semesterNumber].push(0);
            }
        }
        for (var j = 0; j < course.preparationPeriod; j++){
            if (indexOfAssignedExamDay - j < 0){
                break;
            }
            if (remove){
                this.specializationMapping[specialization.name][specialization.semesterNumber][indexOfAssignedExamDay - j]--;
            } else {
                this.specializationMapping[specialization.name][specialization.semesterNumber][indexOfAssignedExamDay - j]++;
            }

        }
    }
};




function Schedule(beginDate, endDate, occupied){
    var examPeriodLength = Math.round((endDate - beginDate)/(1000 * 60 * 60 * 24));
    if (examPeriodLength <= 0){
        throw "Begin date can't be the same as end date or after it";
    }
    var schedulableDays = [];
    var fridaysIndexes = [];

    for (var i = 0; i <= examPeriodLength; i++){
        var aDay = new Date(beginDate + (i * 60 * 60 * 24));
        if (aDay.getDay() == SATURDAY || occupied.find(aDay)){
            continue;
        } else {
            if (aDay.getDay() == FRIDAY){
                fridaysIndexes.push(i);
            }
            schedulableDays.push({
                date: aDay,
                index: schedulableDays.length, //TODO: if not needed- remove
                exams: {},
            });
        }
    }
    this.schedulableDays = schedulableDays;
    this.heuristicCalculator = new HeuristicCalculator(schedulableDays.length, fridaysIndexes);
}

Schedule.prototype.assignExam = function(course, date){
    var indexOfExamDay;
    for (var i = 0; i < this.schedulableDays.length; i++){
        if (this.schedulableDays[i].date === date){
            indexOfExamDay = i;
            break;
        }
    }
    if (!indexOfExamDay){
        throw "The date isn't in exam period";
    }
    for (var i = 0; i < this.schedulableDays.length; i++){
        this.schedulableDays[i].exams[course.number] = -(indexOfExamDay) + i;
    }
    return indexOfExamDay;
};

Schedule.prototype.unassignExam = function (course) {
    for (var i = 0; i < this.schedulableDays.length; i++){
        delete this.schedulableDays[i].exams[course.number];
    }
};


