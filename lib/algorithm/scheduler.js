'use strict';

const FRIDAY = 5;
const SATURDAY = 6;
const AVERAGE_POINTS_IN_A_SEMESTER = 23;

function HeuristicCalculator(examPeriodLength, fridayIndexes){
    this.MAX_EXAMS_IN_A_DAY = 0;
    this.EXAMS_ON_FRIDAY_AMOUNT = 4;
    this.EXAM_PERIOD_CAPACITY_FACTOR = examPeriodLength / AVERAGE_POINTS_IN_A_SEMESTER;
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
    //console.log("Current value " + currentHeuristicValue);
    //console.log("Preparation time for " + course.number + " is " + course.preparationTime);
    for (var j = 0; j < this.examPeriodLength; j++){
        if (this.fridayIndexes.indexOf(j) != -1 && this.examsAmountInADay[j] >= this.EXAMS_ON_FRIDAY_AMOUNT){
            //console.log("Friday!");
            continue;
        }
        if(this.examsAmountInADay[j] + 1 > this.MAX_EXAMS_IN_A_DAY){
            //console.log("Too much exams on a day " + j);
            continue;
        }
        var canBeScheduledToTheDay = true;
        for (var i = 0; i < course.specializations.length; i++){
            var specialization = course.specializations[i];
            for (var k = 0; k < course.preparationTime * this.EXAM_PERIOD_CAPACITY_FACTOR; k++){
                this.updateHeuristic(course, -1); //Initializes specialization mapping for course's specializations
                if(this.specializationMapping[specialization.name][specialization.semesterNumber][j - k]){
                    //console.log("Can't schedule course " + course.number + " to index " + j);
                    canBeScheduledToTheDay = false;
                    break;
                }
            }
        }
        if (!canBeScheduledToTheDay){
            continue;
        }
        //console.log("Resolving index");
        //console.log("Course " + course.number + " curr value: " + currentHeuristicValue + " num of exams: " +this.examsAmountInADay[j] + " number of possibilities: " + indexesOfBestExamsDays.length);
        if (this.examsAmountInADay[j] + 1 > currentHeuristicValue && currentHeuristicValue < this.MAX_EXAMS_IN_A_DAY) {
            currentHeuristicValue++;
            indexesOfBestExamsDays = [j];
        } else if (this.examsAmountInADay[j] + 1 == currentHeuristicValue || currentHeuristicValue == this.MAX_EXAMS_IN_A_DAY) {
            indexesOfBestExamsDays.push(j);
        } else if (indexesOfBestExamsDays.length == 0){
            indexesOfBestExamsDays.push(j);
            currentHeuristicValue = this.examsAmountInADay[j] + 1;
        }
    }
    if (indexesOfBestExamsDays.length == 0) {
        return -1;
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
    return Math.max(...this.examsAmountInADay);
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
        for (var j = 0; j < course.preparationTime; j++){
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
    if (indexOfAssignedExamDay == -1){
        return;
    } else if (remove) {
        this.examsAmountInADay[indexOfAssignedExamDay]--;
    } else {
        this.examsAmountInADay[indexOfAssignedExamDay]++;
    }
};

HeuristicCalculator.prototype.findOptimizedIndexOfExam = function (course) {

};



function Schedule(beginDate, endDate, faculty, occupied){
    console.log("begin: " + beginDate);
    console.log("end: " + endDate);
    this.faculty = faculty;
    this.problems = {};
    var examPeriodLength = Math.round((endDate - beginDate)/(1000 * 60 * 60 * 24));
    if (examPeriodLength <= 0){
        throw "Begin date can't be the same as end date or after it";
    }
    var schedulableDays = [];
    var fridaysIndexes = [];
    let indexForGui = schedulableDays.length;
    for (var i = 0; i <= examPeriodLength; i++){
        var aDay = new Date(beginDate);
        aDay.setDate(beginDate.getDate() + i);
        aDay.setHours(0,0,0);
        if (aDay.getDay() == SATURDAY){
            continue;
        } else if (occupied && occupied.find(function(element){
                return element == indexForGui;
            })){
            indexForGui++;
            continue;
        } else {
            if (aDay.getDay() == FRIDAY){
                fridaysIndexes.push(schedulableDays.length);
            }
            //console.log("Push " + aDay + " into index " + schedulableDays.length);
            schedulableDays.push({
                date: aDay,
                index: indexForGui,
                exams: {},
            });
            indexForGui++;
        }
    }
    this.schedulableDays = schedulableDays;
    //console.log(this.schedulableDays);
    //console.log(fridaysIndexes);
    this.heuristicCalculator = new HeuristicCalculator(schedulableDays.length, fridaysIndexes);
}

Schedule.prototype.assignExam = function(course, date){
    var indexOfExamDay;
    if (typeof date === 'string' || date instanceof String){
        date = new Date(date);
    }
    date.setHours(0, 0, 0);
    for (var i = 0; i < this.schedulableDays.length; i++){
        if (this.schedulableDays[i].date.valueOf() ==  date.valueOf()){
            indexOfExamDay = i;
            break;
        }
    }
    if (typeof indexOfExamDay === 'undefined'){
        throw "The date isn't in exam period";
    }
    if (course.faculty.name == this.faculty){
        for (var i = 0; i < this.schedulableDays.length; i++){
            this.schedulableDays[i].exams[course.number] = -(indexOfExamDay) + i;
        }
    }
    return indexOfExamDay;
};

Schedule.prototype.unassignExam = function (course) {
    var indexOfExamDay = this.getIndexOfExam(course);
    if (indexOfExamDay == -1){
        return;
    }
    this.heuristicCalculator.updateHeuristic(course, indexOfExamDay, true);
    for (var i = 0; i < this.schedulableDays.length; i++){
        delete this.schedulableDays[i].exams[course.number];
    }
};

Schedule.prototype.schedule = function (courses, moed) {
    this.coursesNames = {};
    this.heuristicCalculator.MAX_EXAMS_IN_A_DAY = (courses.length / this.schedulableDays.length) * 1.5;
    this.heuristicCalculator.EXAMS_ON_FRIDAY_AMOUNT = courses.length / this.schedulableDays.length * 0.2;
    for (var i = 0; i < courses.length; i++){
        if (!courses[i].has_exam){
            continue;
        }
        //console.log(courses[i].number);
        this.coursesNames[courses[i].number] = courses[i].name;
        if (courses[i][moed + "_constraint"]) {
            var index = this.assignExam(courses[i], courses[i][moed + "_constraint"]);
            console.log("The " + courses[i].number + " is assigned to " + index);
            this.heuristicCalculator.updateHeuristic(courses[i], index);
        }
    }
    for (var i = 0; i < courses.length; i++){
        if (courses[i][moed + "_constraint"] || !courses[i].has_exam){
            console.log("course " + courses[i].number + " has constraint");
            continue; //Already assigned and don't want to change (it's constraint)
        }
        var bestIndexForAssigning;
        while (true) {
            bestIndexForAssigning = this.heuristicCalculator.findBestDayForScheduling(courses[i]);
            if (bestIndexForAssigning == -1){
                if (courses[i].preparationTime < 1){
                    this.problems["fatal"] = courses[i].number;
                    return;
                } else {
                    courses[i].preparationTime--;
                    this.problems[courses[i]] = courses[i].preparationTime;
                }
            } else {
                var date = this.schedulableDays[bestIndexForAssigning].date;
                this.assignExam(courses[i], date);
                this.heuristicCalculator.updateHeuristic(courses[i], bestIndexForAssigning);
                break;
            }
        }
    }
};

Schedule.prototype.getIndexOfExam = function(course){
    for (var i = 0; i < this.schedulableDays.length; i++){
        if (this.schedulableDays[i].exams[course.number] == 0) {
            return i;
        }
    }
    return -1;
};

Schedule.prototype.getResult = function(){
  var result = [];
  for (var i = 0; i < this.schedulableDays.length; i++){
      result.push({date: this.schedulableDays[i].date, index: this.schedulableDays[i].index, exams: []});
      for (var course in this.schedulableDays[i].exams){
          if (this.schedulableDays[i].exams.hasOwnProperty(course)){
              if (this.schedulableDays[i].exams[course] == 0){
                  result[i].exams.push({id: course, name: this.coursesNames[course]});
              }
          }
      }
  }
  console.log(JSON.stringify(result));
  return {problems: this.problems, schedule: result};
};

module.exports = Schedule;