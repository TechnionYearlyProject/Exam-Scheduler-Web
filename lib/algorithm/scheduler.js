'use strict';
const loggerCreator = require("../logger/logger");

const logger = loggerCreator.newLogger("Scheduler");

const FRIDAY = 5;
const SATURDAY = 6;
const AVERAGE_POINTS_IN_A_SEMESTER = 23;

function HeuristicCalculator(examPeriodLength, fridayIndexes){
    this.MAX_EXAMS_IN_A_DAY = 0;
    this.EXAMS_ON_FRIDAY_AMOUNT = 4;
    this.EXAM_PERIOD_CAPACITY_FACTOR = examPeriodLength / AVERAGE_POINTS_IN_A_SEMESTER;
    this.specializationMapping = {};
    this.coursesExams = [];
    this.examsAmountInADay = [];
    for (var i = 0; i < examPeriodLength; i++){
        this.examsAmountInADay.push(0);
        this.coursesExams.push({});
    }
    this.examPeriodLength = examPeriodLength;
    this.fridayIndexes = fridayIndexes;
}

HeuristicCalculator.prototype.findBestDayForScheduling = function(course, courses){
    var indexesOfBestExamsDays = [];
    var currentHeuristicValue = this.getHeuristicValue();
    logger.debug("Conflicts in %s: %j", course.id, course.conflictsForAlgo);
    for (var j = 0; j < this.examPeriodLength; j++){
        if (this.fridayIndexes.indexOf(j) != -1 && this.examsAmountInADay[j] >= this.EXAMS_ON_FRIDAY_AMOUNT){
            continue;
        }
        if(this.examsAmountInADay[j] + 1 > this.MAX_EXAMS_IN_A_DAY){
            continue;
        }
        var canBeScheduledToTheDay = true;
        this.updateHeuristic(course, -1); //Initializes specialization mapping for course's specializations
        for (var i = 0; i < course.specializations.length; i++){
            var specialization = course.specializations[i];
            for (var k = 0; k < course.preparationTime * this.EXAM_PERIOD_CAPACITY_FACTOR; k++){
                if(this.specializationMapping[specialization.name][specialization.semesterNumber][j - k]){
                    canBeScheduledToTheDay = false;
                    break;
                }
            }
        }
        for (var i = 0; i < course.conflictsForAlgo.length; i++){
            let conflictCourse = courses.find(function (a) {
                return course.conflictsForAlgo[i].id == a.id;
            });
            if (conflictCourse){
                logger.silly("Found conflict!");
            }
            if (!conflictCourse.has_exam){
                continue;
            }
            if (this.coursesExams[j].hasOwnProperty(conflictCourse.id)){
                let prepTime = conflictCourse.preparationTime;
                let daysBeforeConflict = this.coursesExams[j][conflictCourse.id];
                if (daysBeforeConflict == null) {
                    continue;
                }
                if (daysBeforeConflict >= 0 && daysBeforeConflict <= course.preparationTime ||
                    daysBeforeConflict < 0 && daysBeforeConflict > (-1 * prepTime)) {
                        canBeScheduledToTheDay = false;
                        break;
                }
            }
        }
        if (!canBeScheduledToTheDay){
            logger.debug("Can't schedule course %s to index %d", course.number, j);
            continue;
        }
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
        for (var i = 0; i < this.coursesExams.length; i++){
            delete this.coursesExams[i][course.number];
        }
    } else {
        this.examsAmountInADay[indexOfAssignedExamDay]++;
        for (var i = 0; i < this.coursesExams.length; i++){
            this.coursesExams[i][course.number] = -(indexOfAssignedExamDay) + i;
        }
    }
};




function Schedule(beginDate, endDate, faculty, occupied){
    logger.info("Create schedule from %s to %s for faculty %s", beginDate, endDate, faculty);
    this.faculty = faculty;
    this.problems = {};
    var examPeriodLength = Math.round((endDate - beginDate)/(1000 * 60 * 60 * 24));
    if (examPeriodLength <= 0){
        logger.error("Got semester with start date after end date!");
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
            logger.debug("For date %s index is %d", aDay, schedulableDays.length);
            schedulableDays.push({
                date: aDay,
                index: indexForGui,
                exams: {},
            });
            indexForGui++;
        }
    }
    this.schedulableDays = schedulableDays;
    this.heuristicCalculator = new HeuristicCalculator(schedulableDays.length, fridaysIndexes);
}

Schedule.prototype.assignExam = function(course, date){
    logger.debug("Assigning %d to %s", course.number, date);
    var indexOfExamDay;
    if (typeof date === 'string' || date instanceof String){
        date = new Date(date);
    }
    date.setHours(0, 0, 0);
    for (var i = 0; i < this.schedulableDays.length; i++){
        if (this.schedulableDays[i].date.valueOf() ==  date.valueOf()){
            indexOfExamDay = i;
            if (course.faculty && course.faculty.name == this.faculty){
                this.schedulableDays[i].exams[course.number] = "assigned";
            }
            break;
        }
    }
    if (typeof indexOfExamDay === 'undefined'){
        throw "The date isn't in exam period";
    }
    this.heuristicCalculator.updateHeuristic(course, indexOfExamDay);
    return indexOfExamDay;
};

Schedule.prototype.unassignExam = function (course) {
    var indexOfExamDay = this.getIndexOfExam(course);
    if (indexOfExamDay == -1){
        return;
    }
    this.heuristicCalculator.updateHeuristic(course, indexOfExamDay, true);
};

Schedule.prototype.schedule = function (courses, moed) {
    logger.debug("Start assigning dates to exams");
    this.coursesNames = {};
    this.heuristicCalculator.MAX_EXAMS_IN_A_DAY = (courses.length / this.schedulableDays.length) * 1.5;
    if (this.heuristicCalculator.MAX_EXAMS_IN_A_DAY < 1){
        this.heuristicCalculator.MAX_EXAMS_IN_A_DAY = 1;
    }
    this.heuristicCalculator.EXAMS_ON_FRIDAY_AMOUNT = courses.length / this.schedulableDays.length * 0.2;
    if (this.heuristicCalculator.EXAMS_ON_FRIDAY_AMOUNT < 1){
        this.heuristicCalculator.EXAMS_ON_FRIDAY_AMOUNT = 1;
    }
    for (var i = 0; i < courses.length; i++){
        logger.debug("Scheduling %s...", courses[i].number);
        if (!courses[i].has_exam){
            continue;
        }
        this.coursesNames[courses[i].number] = courses[i].name;
        if (courses[i]["constraint_" + moed]) {
            var index = this.assignExam(courses[i], courses[i]["constraint_" + moed]);
            logger.debug("The %d is assigned to %d", courses[i].number, index);
        }
    }
    for (var i = 0; i < courses.length; i++){
        if (courses[i]["constraint_" + moed] || !courses[i].has_exam){
            logger.debug("course %d has constraint", courses[i].number);
            continue; //Already assigned and don't want to change (it's constraint)
        }
        var bestIndexForAssigning;
        while (true) {
            bestIndexForAssigning = this.heuristicCalculator.findBestDayForScheduling(courses[i], courses);
            logger.debug("Best index for %d is %d", courses[i].number, bestIndexForAssigning);
            if (bestIndexForAssigning == -1){
                if(courses[i].faculty.name != this.faculty){ //We won't relax preparation time for courses from other faculties
                    logger.warn("Course %d from faculty %s can't be scheduled without relaxation!",
                        courses[i].number, courses[i].faculty.name);
                    break;
                }
                if (courses[i].preparationTime < 1){
                    logger.error("Failed on %d : don't have place for exam", courses[i].number);
                    this.problems["fatal"] = courses[i].number;
                    return;
                } else {
                    logger.info("relaxing preparation time for %d", courses[i].number);
                    courses[i].preparationTime--;
                    this.relaxPreparationTime(courses, courses[i].conflictsForAlgo);
                    this.problems[courses[i].number] = courses[i].preparationTime;
                }
            } else {
                var date = this.schedulableDays[bestIndexForAssigning].date;
                this.assignExam(courses[i], date);
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
                result[i].exams.push({id: course, name: this.coursesNames[course]});
            }
        }
    }
    return {problems: this.problems, schedule: result};
};

Schedule.prototype.relaxPreparationTime = function(courses, coursesForRelaxation) {
    var self = this;
    courses.map(function (a) {
        if (coursesForRelaxation.find(function (b) {
                return b.id == a.number;
            })){
            if(a.preparationTime >= 2 && a.faculty.name == self.faculty){
                a.preparationTime--;
                logger.info("relaxing preparation time for %d to %d days", a.number, a.preparationTime);
                self.problems[a.number] = a.preparationTime;
            }
        }
    })
}

module.exports = Schedule;