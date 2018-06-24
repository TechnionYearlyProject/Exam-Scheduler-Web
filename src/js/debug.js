function debug() {


    var result = JSON.parse(localStorage.getItem("result"));
    var moed_a_schedule = result["moed_a"]["schedule"];
    for(let i in moed_a_schedule){
        for(let j in moed_a_schedule[i].exams){
            var id = moed_a_schedule[i].exams[j].id;
            var name = moed_a_schedule[i].exams[j].name;
            var date = moed_a_schedule[i].date.substring(0,10);
            var exam = id.concat(',',name,',',date);
            console.log(exam);
            // console.log(moed_a_schedule[i].exams[j].id,',',moed_a_schedule[i].exams[j].name,',',moed_a_schedule[i].date.substring(0,10));
        }
    }
    var studyPrograms = [
        {
            "name":"מסלול כללי ארבע שנתי",
            "faculty" : ["מדעי המחשב"]
        },
        {
            "name":"מסלול כללי תלת שנתי",
            "faculty" : ["מדעי המחשב"]
        },
        {
            "name":"הנדסת תוכנה",
            "faculty" : ["מדעי המחשב"]
        },
        {
            "name":"מערכות מידע",
            "faculty" : ["מדעי המחשב"]
        },
        {
            "name":"המסלול למדעי המחשב - מתמטיקה",
            "faculty" : ["מדעי המחשב","מתמטיקה"]
        },
        {
            "name":"המסלול למדעי המחשב - פיזיקה",
            "faculty" : ["מדעי המחשב","פיזיקה"]
        },
        {
            "name":"הנדסת מחשבים",
            "faculty" : ["מדעי המחשב","הנדסת חשמל"]
        },{
            "name":"המסלול לביואינפורמטיקה",
            "faculty" : ["מדעי המחשב"]
        },
        {
            "name":"המסלול להנדסת חשמל",
            "faculty" : ["הנדסת חשמל"]
        },
        {
            "name":"המסלול לחשמל - פיזיקה",
            "faculty" : ["פיזיקה","הנדסת חשמל"]
        },{
            "name":"המסלול להנדסת מחשבים ותוכנה",
            "faculty" : ["הנדסת חשמל"]
        },
        {
            "name":"המסלול התלת שנתי בפיזיקה",
            "faculty" : ["פיזיקה"]
        },{
            "name":"המסלול הארבע שנתי בפיזיקה",
            "faculty" : ["פיזיקה"]
        },
        {
            "name":"תוכנית תלת שנתית במתמטיקה",
            "faculty" : ["מתמטיקה"]
        }
    ];


    /*
     * When initializing db, each study program name should be replaced with the db _id of the study program.
     * each faculty needs to be initialized from its account.
     */
    /*var cs = [
        {
            "credit_point":4.0,
            "name":"מבוא למדעי המחשב",
            "id":"234111",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"מבוא למחשב - שפת סי",
            "id":"234112",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"מבוא למדעי המחשב מ'",
            "id":"234114",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":1
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":1
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":1
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":1
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":1
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":1
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"מבוא למדעי המחשב ח'",
            "id":"234117",
            "programs":[
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":1
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"ארגון ותכנות המחשב",
            "id":"234118",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":2
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":2
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":2
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":2
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":2
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבוא לתכנות מערכות",
            "id":"234122",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":2
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":2
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":2
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":2
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":2
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.5,
            "name":"מערכות הפעלה",
            "id":"234123",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":4
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":4
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":5
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"אלגוריתמים נומריים",
            "id":"234125",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":5
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":5
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":6
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":7
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"מבוא למחשב - שפת סי אנגלית",
            "id":"234126",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"קומבינטוריקה למדעי המחשב",
            "id":"234141",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":2
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":2
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":2
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":2
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":2
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מתמטיקה דיסקרטית מ'",
            "id":"234144",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מערכות ספרתיות",
            "id":"234145",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":1
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":1
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":1
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":1
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":1
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":1
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":1
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבני נתונים 1",
            "id":"234218",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":3
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":3
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":3
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":3
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"אלגוריתמים 1",
            "id":"234247",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":4
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":4
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"תכן לוגי",
            "id":"234262",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":3
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":3
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":3
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבנה מחשבים",
            "id":"234267",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":4
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":1.0,
            "name":"פרויקט 2 במדעי המחשב",
            "id":"234291",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"לוגיקה ותורת הקבוצות למדעי המחשב",
            "id":"234293",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":3
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":3
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":3
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"פרויקט ב- וי.אל.אס.אי. א'",
            "id":"234306",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.5,
            "name":"פרויקט שנתי בהנדסת תוכנה-שלב ב'",
            "id":"234312",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט תעשייתי",
            "id":"234313",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"שפות תכנות",
            "id":"234319",
            "programs":[
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מערכות אחסון מידע",
            "id":"234322",
            "programs":[
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":5
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":5
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט בגרפיקה ממוחשבת ה'",
            "id":"234326",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"פרויקט בעיבוד וניתוח תמונות",
            "id":"234329",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סדנה בתכנות תחרותי",
            "id":"234900",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"ידע ומשחקים במערכות מבוזרות",
            "id":"236026",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"ניהול פרויקטי תוכנה",
            "id":"236270",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מאיצים חישוביים ומערכות מואצות",
            "id":"236278",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבוא לעיבוד שפות טבעיות",
            "id":"236299",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"שיטות בהנדסת תוכנה",
            "id":"236321",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט בעיבוד נתונים מ'",
            "id":"236323",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"עיבוד תמונות ואותות במחשב",
            "id":"236327",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרוייקט בגרפיקה ממוחשבת מ'",
            "id":"236328",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"עיבוד ספרתי של גאומטריה",
            "id":"236329",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבוא לאופטימיזציה",
            "id":"236330",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"האינטרנט של הדברים - טכנולוגיות",
            "id":"236332",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט באינטרנט של הדברים",
            "id":"236333",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבוא לרשתות מחשבים",
            "id":"236334",
            "programs":[
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":5
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":6
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":5
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פתרון נומרי של משוואות דיפ.חלקיות",
            "id":"236336",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט בתקשורת מחשבים",
            "id":"236340",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"תורת החישוביות",
            "id":"236343",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":5
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":5
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":5
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":6
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":5
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":5
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":7
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבוא לממשקי אדם-מחשב",
            "id":"236348",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט באבטחת מידע",
            "id":"236349",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"הגנה במערכות מתוכנתות",
            "id":"236350",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"אוטומטים ושפות פורמליות",
            "id":"236353",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":4
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":4
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":5
                },
                {
                    "study_program":"המסלול לביואינפורמטיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים באלגוריתמים מבוזרי",
            "id":"236358",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"תורת הקומפילציה",
            "id":"236360",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":5
                },
                {
                    "study_program":"מסלול כללי תלת שנתי",
                    "semester":5
                },
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":5
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":6
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מערכות מסד נתונים",
            "id":"236363",
            "programs":[
                {
                    "study_program":"מערכות מידע",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט במערכות הפעלה מ'",
            "id":"236366",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט בתכנות מקבילי ומבוזר",
            "id":"236371",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"שיטות הסתברותיות ואלגוריתמים",
            "id":"236374",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"עקרונות ניהול מידע חסר ודאות",
            "id":"236378",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":4.0,
            "name":"פרויקט ב- וי.אל.אס.אי. ב'",
            "id":"236381",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט בחומות אש",
            "id":"236499",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט בבינה מלאכותית",
            "id":"236502",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט תכנות מתקדם במדעי המחשב 1",
            "id":"236503",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט המשך בתוכנה",
            "id":"236504",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"קריפטולוגיה מודרנית",
            "id":"236506",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"ממוש מערכות מסדי נתונים",
            "id":"236510",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"קידוד במערכות אחסון-מידע",
            "id":"236520",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"אלגוריתמים בביולוגיה חישובית",
            "id":"236522",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבוא לקידוד רשת, חסמים ובניות",
            "id":"236525",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט תכנות מתקדם במדעי המחשב 2",
            "id":"236526",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 1",
            "id":"236601",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 2",
            "id":"236602",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 3",
            "id":"236603",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 4",
            "id":"236604",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 5",
            "id":"236605",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 6",
            "id":"236606",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 7",
            "id":"236607",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 8",
            "id":"236608",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 10",
            "id":"236610",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 11",
            "id":"236611",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים בקריפטולוגיה ה'",
            "id":"236613",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים באלגוריתמים ה'",
            "id":"236620",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתק. בתכנון וניתוח רשתות",
            "id":"236638",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים באינפורמציה קוונטי",
            "id":"236640",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"נושאים מתקדמים באבטחת מידע ה'+ת'",
            "id":"236653",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"הבטחת איכות תוכנה",
            "id":"236698",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"תיכון תוכנה",
            "id":"236700",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"תכנות מונחה עצמים",
            "id":"236703",
            "programs":[
                {
                    "study_program":"הנדסת תוכנה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"נושאים בהוכחה אוטומטית של משפטים",
            "id":"236714",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"גאומטריה חישובית",
            "id":"236719",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט במערכות נבונות",
            "id":"236754",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"מבוא למערכות לומדות",
            "id":"236756",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינר בהנדסת תוכנה",
            "id":"236800",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינר במדעי המחשב 1",
            "id":"236801",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינר במדעי המחשב 2",
            "id":"236802",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינר במדעי המחשב 3",
            "id":"236803",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינר במדעי המחשב 4",
            "id":"236804",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינר בשיטות אימות פורמליות",
            "id":"236814",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינר בביואינפורמטיקה",
            "id":"236818",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט במערכות מחשבים",
            "id":"236828",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":3.0,
            "name":"פרויקט בראיה ממוחשבת",
            "id":"236874",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_point":2.0,
            "name":"סמינריון מחקר בקומבינטוריקה ותורת",
            "id":"238902",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        }
    ];

    var ee = [
        {
            "credit_point":4.0,
            "name":"פרויקט מחקרי לסטודנטים מצטיינים",
            "id":"044000",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא למערכות תכנה",
            "id":"044101",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":4
                }
            ]
        },
        {
            "credit_point":0.0,
            "name":"בטיחות במעבדות חשמל",
            "id":"044102",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":1
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":1
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":1
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":1
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"תורת המעגלים החשמליים",
            "id":"044105",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":3
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":3
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"מתמטיקה דיסקרטית ח'",
            "id":"044114",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"אלקטרוניקה פיסיקלית",
            "id":"044124",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":4.5,
            "name":"יסודות התקני מוליכים למחצה מ'",
            "id":"044125",
            "programs":[

            ]
        },
        {
            "credit_point":4.0,
            "name":"אותות ומערכות",
            "id":"044131",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":4
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"ממירי מתח ממותגים",
            "id":"044139",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"שדות אלקטרומגנטיים",
            "id":"044140",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":4
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":4
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"מעגלים אלקטרוניים לינאריים",
            "id":"044142",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מערכות ספרתיות",
            "id":"044145",
            "programs":[
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":1
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"מעגלי מיתוג אלקטרוניים",
            "id":"044147",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"גלים ומערכות מפולגות",
            "id":"044148",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":5
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה להנדסת חשמל 1ח'",
            "id":"044151",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה בהנדסת חשמל 1",
            "id":"044160",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה בהנדסת חשמל 2",
            "id":"044165",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":6
                }
            ]
        },
        {
            "credit_point":2.5,
            "name":"מעבדה בהנדסת חשמל 3",
            "id":"044166",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":7
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":8
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"פרוייקט א'",
            "id":"044167",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":6
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":6
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":6
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":6
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"פרויקט  ב",
            "id":"044169",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":7
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":7
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":7
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":7
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"פרויקט  מיוחד",
            "id":"044170",
            "programs":[

            ]
        },
        {
            "credit_point":8.0,
            "name":"פרויקט בתעשיה",
            "id":"044173",
            "programs":[

            ]
        },
        {
            "credit_point":4.0,
            "name":"נושא אישי למצטיינים",
            "id":"044180",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים למצטיינים",
            "id":"044184",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"נושא מיוחד למצטיינים",
            "id":"044185",
            "programs":[

            ]
        },
        {
            "credit_point":4.0,
            "name":"מערכות בקרה 1",
            "id":"044191",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מערכות בקרה 2",
            "id":"044192",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה לבקרה לינארית",
            "id":"044193",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"המרת אנרגיה,מקורות אנרגיה מתחדשים",
            "id":"044196",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא לעבוד ספרתי של אותות",
            "id":"044198",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"אותות אקראיים",
            "id":"044202",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":5
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":5
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":3.5,
            "name":"תהליכים במיקרואלקטרוניקה",
            "id":"044239",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"מערכות ספרתיות ומבנה המחשב",
            "id":"044252",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":2
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"תכן לוגי ומבוא למחשבים",
            "id":"044262",
            "programs":[
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא למבני נתונים ואלגוריתמים",
            "id":"044268",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":3
                },
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"רשתות מחשבים ואינטרנט 1",
            "id":"044334",
            "programs":[
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":6
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"אלקטרואופטיקה 1",
            "id":"044339",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"פרויקט מבוא בהנדסת חשמל",
            "id":"045001",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תכן וניתוח אלגוריתמים",
            "id":"046002",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים 2",
            "id":"046004",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"רשתות מחשבים ואינטרנט 2",
            "id":"046005",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים מתקדמים 3",
            "id":"046006",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"עיבוד הספק",
            "id":"046043",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מעגלים אלקטרוניים לאותות מעורבים",
            "id":"046188",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תכן מסננים אקטיביים",
            "id":"046189",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"למידה ותכנון במערכות דינאמיות",
            "id":"046194",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מערכות לומדות",
            "id":"046195",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"שיטות חישוביות באופטימיזציה",
            "id":"046197",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"עבוד ונתוח תמונות",
            "id":"046200",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא לעיבוד אותות אקראיים",
            "id":"046201",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא לתקשורת ספרתית",
            "id":"046206",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מבנה מערכות הפעלה",
            "id":"046209",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":1.0,
            "name":"מעבדה במערכות הפעלה",
            "id":"046210",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"מיקרוגלים",
            "id":"046216",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"עקרונות פיזיקליים של התקני מל\"מ",
            "id":"046225",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"פרקים בננו-אלקטרוניקה",
            "id":"046232",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"התקני הספק משולבים",
            "id":"046235",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מעגלים משולבים - מבוא ל-וי.ל.ס.י.",
            "id":"046237",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה בננו-אלקטרוניקה",
            "id":"046239",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תופעות גלים",
            "id":"046244",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"אלקטרואופטיקה 2",
            "id":"046250",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"אנטנות וקרינה",
            "id":"046256",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבנה מחשבים",
            "id":"046267",
            "programs":[
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"תכנות פונקציונאלי מבוזר",
            "id":"046273",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תרגום ואופטמיזציה דינמיים של קוד",
            "id":"046275",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מאיצים חישוביים ומערכות מואצות",
            "id":"046278",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מערכות ראיה ושמיעה",
            "id":"046332",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא לתקשורת בסיבים אופטיים",
            "id":"046342",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תורת האינפורמציה",
            "id":"046733",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"אלג' ויישומים בראייה ממוחשבת",
            "id":"046746",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא לדימות רפואי",
            "id":"046831",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"לייזרים של מוליכים למחצה",
            "id":"046851",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תכן מערכות ספרתיות מהירות",
            "id":"046864",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תכן פיסי של וי.אל.אס.אי",
            "id":"046918",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מיקרו-עיבוד ומיקרו-מערכות אלקטרומ",
            "id":"046968",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים מתקדמים 6",
            "id":"047006",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה באלקטרואופטיקה 1",
            "id":"048711",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה באלקטרואופטיקה 2",
            "id":"048712",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים בתורת הגלים 1",
            "id":"048732",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה באותות ומערכות ביולוגיים",
            "id":"048747",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה לעבוד אותות",
            "id":"048816",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה בהמרת אנרגיה",
            "id":"048852",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"פיתוח נושאים בהנדסת חשמל 1",
            "id":"048870",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה לתכנה וחומרה",
            "id":"048877",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"סמינר בארכיטקטורות וי.ל.ס.י.",
            "id":"048879",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים בהנדסת מחשבים",
            "id":"048885",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"מבוא למחקר הפקולטי",
            "id":"048887",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במיקרואלקטרוניקה 1",
            "id":"048903",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים במיקרואלקטרוניקה 2",
            "id":"048908",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים בראיה, מבנה תמונות",
            "id":"048921",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מע בראייה מבנה תמונות וראיה ממוחש",
            "id":"048922",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"עיבוד אותות מסתגל )אדפטיבי(",
            "id":"048929",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה לתקשורת",
            "id":"048933",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"תקשורת מקודדת",
            "id":"048934",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"שיטות סטטיסטיות בעיבוד תמונה",
            "id":"048954",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה במיקרואלקטרוניקה",
            "id":"048966",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה לרשתות מחשבים",
            "id":"048967",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה במערכות מקביליות",
            "id":"048976",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מקורות קרינה מבוססים על אלומות אל",
            "id":"048978",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים בהסתברות ותהליכים אקראיים",
            "id":"048979",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"שיטות טופולוגיות בהנדסה, רשתות",
            "id":"048985",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים באנרגיה 1",
            "id":"048987",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"סמינריון 1",
            "id":"048990",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"סמינריון 2",
            "id":"048991",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה בנושאי בקרה",
            "id":"049005",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה לגלים אלקטרומגנטיים",
            "id":"049006",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"ידע ומשחקים במערכות מבוזרות",
            "id":"049026",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים במערכות אחסון",
            "id":"049030",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים מתקדמים בננו אלקטרוניקה 1",
            "id":"049050",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מעבדה בלמידה חישובית",
            "id":"049053",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"פיסיקה סטטיסטית ותורת האינפורמציה",
            "id":"049054",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים בראיה ממוחשבת# ניתוח צורה",
            "id":"049056",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"צפני קיטוב",
            "id":"049061",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"דימות ושחזור תלת-מימדי",
            "id":"049062",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מידע בהתקני איחסון",
            "id":"049063",
            "programs":[

            ]
        }
    ];

    var physics = [
        {
            "credit_point":0.0,
            "name":"השלמות פיסיקה 1-סווג חלק א'",
            "id":"113013",
            "programs":[

            ]
        },
        {
            "credit_point":0.0,
            "name":"השלמות פיסיקה 2-סווג חלק ב'",
            "id":"113014",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"תגליות מדעיות 1",
            "id":"114010",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"תגליות מדעיות 2",
            "id":"114011",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מכניקה וגלים",
            "id":"114014",
            "programs":[

            ]
        },
        {
            "credit_point":1.5,
            "name":"מעבדה לפיסיקה 1מ'",
            "id":"114020",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול התלת שנתי בפיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":1.5,
            "name":"מעבדה לפיסיקה  2מ",
            "id":"114021",
            "programs":[
                {
                    "study_program":"המסלול התלת שנתי בפיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":4.5,
            "name":"מעבדה לפיסיקה 5",
            "id":"114027",
            "programs":[

            ]
        },
        {
            "credit_point":4.5,
            "name":"מעבדה לפיסיקה 6",
            "id":"114028",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"מעבדה לפיסיקה 2 מח'",
            "id":"114030",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":1.0,
            "name":"מעבדה לפיסיקה 1ח'",
            "id":"114032",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה לפיסיקה 2מפ'",
            "id":"114034",
            "programs":[
                {
                    "study_program":"המסלול התלת שנתי בפיזיקה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":1.5,
            "name":"מעבדה לפיסיקה 3 - גלים",
            "id":"114035",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":5.0,
            "name":"פיסיקה סטטיסטית ותרמית",
            "id":"114036",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":4
                }
            ]
        },
        {
            "credit_point":1.5,
            "name":"מעבדה לפיסיקה 4מח'",
            "id":"114037",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":6
                },
                {
                    "study_program":"המסלול התלת שנתי בפיזיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":6
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה לפיזיקה - גלים - 3מפ'",
            "id":"114038",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"פיסיקה 1",
            "id":"114051",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה 2",
            "id":"114052",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה 3",
            "id":"114054",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה 1מ",
            "id":"114071",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה 3ח'",
            "id":"114073",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"פיסיקה 2ממ",
            "id":"114075",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"פיסיקה 2פ'",
            "id":"114076",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול התלת שנתי בפיזיקה",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":2.5,
            "name":"פיסיקה 1ל",
            "id":"114077",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה 2ל",
            "id":"114078",
            "programs":[

            ]
        },
        {
            "credit_point":1.5,
            "name":"מעבדה לפיסיקה 1",
            "id":"114081",
            "programs":[

            ]
        },
        {
            "credit_point":1.5,
            "name":"מעבדה לפיסיקה 2",
            "id":"114082",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"מרחבי זמן וחורים שחורים",
            "id":"114102",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה במדידות אופטיות",
            "id":"114208",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"אופטיקה",
            "id":"114210",
            "programs":[
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":1.0,
            "name":"דו\"ח סגל מחקר סתיו",
            "id":"114226",
            "programs":[

            ]
        },
        {
            "credit_point":1.0,
            "name":"דו\"ח סגל מחקר אביב",
            "id":"114227",
            "programs":[

            ]
        },
        {
            "credit_point":4.5,
            "name":"פרויקט",
            "id":"114229",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"אלקטרומגנטיות ואלקטרודינמיקה",
            "id":"114246",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה 2 ר",
            "id":"114249",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה לפיסיקה 5ת",
            "id":"114250",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":7
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":7
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"מעבדה לפיסיקה 6ת",
            "id":"114251",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"פרויקט ת",
            "id":"114252",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":7
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":7
                }
            ]
        },
        {
            "credit_point":5.0,
            "name":"פיסיקה קוונטית 1",
            "id":"115203",
            "programs":[
                {
                    "study_program":"המסלול לחשמל - פיזיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול התלת שנתי בפיזיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - פיזיקה",
                    "semester":6
                }
            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה 2רל",
            "id":"115249",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיס. של גרעינים וחלקיקים יסודיים",
            "id":"116004",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה של זורמים",
            "id":"116027",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"סמינר בפרקים נבחרים בפיסיקה-אביב",
            "id":"116030",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"תורת האינפורמציה הקוונטית",
            "id":"116031",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"ביו-פיסיקה של התא",
            "id":"116321",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"פיסיקה של אטומים ומולקולות",
            "id":"117015",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"פיסיקה של מוליכים למחצה",
            "id":"117018",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"תורת החבורות בפיסיקה",
            "id":"117140",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תופעות קריטיות",
            "id":"118024",
            "programs":[

            ]
        },
        {
            "credit_point":4.0,
            "name":"מעבדה מתקדמת",
            "id":"118076",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"אסטרופיסיקה של אנרגיות גבוהות",
            "id":"118090",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"קוסמולוגיה",
            "id":"118095",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים נבחרים בתורת השדות",
            "id":"118107",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"נושאים נבחרים באסטרופיסיקה",
            "id":"118111",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מבוא לפיסיקת החלקיקים",
            "id":"118123",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מבוא ליחסות כללית",
            "id":"118130",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"תורת השדות הקוונטית 1",
            "id":"118132",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"אופטיקה אולטרה מהירה",
            "id":"118136",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מצב מוצק למוסמכים",
            "id":"118138",
            "programs":[

            ]
        }
    ];

    var mathmatics = [
        {
            "credit_point":0.0,
            "name":"השלמות מתמטיקה",
            "id":"103015",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 1",
            "id":"104003",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2",
            "id":"104004",
            "programs":[

            ]
        },
        {
            "credit_point":5.5,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2ת'",
            "id":"104013",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"אלגברה 1\/מורחב",
            "id":"104016",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 1נ'",
            "id":"104017",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 1מ'",
            "id":"104018",
            "programs":[

            ]
        },
        {
            "credit_point":4.5,
            "name":"אלגברה ליניארית מ'",
            "id":"104019",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2נ'",
            "id":"104020",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2מ'",
            "id":"104022",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מבוא למשוואות דיפרנציאליות חלקיות",
            "id":"104030",
            "programs":[

            ]
        },
        {
            "credit_point":5.5,
            "name":"חשבון אינפיניטסימלי 1מ'",
            "id":"104031",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון אינפיניטסימלי 2מ'",
            "id":"104032",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"אנליזה וקטורית",
            "id":"104033",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מבוא להסתברות ח'",
            "id":"104034",
            "programs":[

            ]
        },
        {
            "credit_point":5.0,
            "name":"משוואות דיפ' רגילות ואינפי 2ח'",
            "id":"104035",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"יסודות הגאומטריה",
            "id":"104114",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"תורת הפונקציות 1",
            "id":"104122",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":4
                }
            ]
        },
        {
            "credit_point":2.5,
            "name":"משואות דיפרנציאליות רגילות\/ח",
            "id":"104131",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"אלגברה מודרנית ח",
            "id":"104134",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"משוואות דפרנציאליות רגילות ת'",
            "id":"104135",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מבוא למרחבים מטריים וטופולוגיים",
            "id":"104142",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"טופולוגיה",
            "id":"104144",
            "programs":[

            ]
        },
        {
            "credit_point":5.5,
            "name":"אלגברה א'",
            "id":"104166",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":1
                }
            ]
        },
        {
            "credit_point":2.5,
            "name":"מבוא לחבורות",
            "id":"104172",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":3.5,
            "name":"אלגברה ליניארית ב'",
            "id":"104173",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":3.5,
            "name":"אלגברה ליניארית במ'",
            "id":"104174",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"סמינר באנליזה להסמכה 2",
            "id":"104182",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"סמינר באלגברה להסמכה 1",
            "id":"104183",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"סמינר לסטודנ.בהסמכה1",
            "id":"104185",
            "programs":[

            ]
        },
        {
            "credit_point":4.0,
            "name":"מכניקת הרצף",
            "id":"104191",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"מבוא למתמטיקה שמושית",
            "id":"104192",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":5
                }
            ]
        },
        {
            "credit_point":3.5,
            "name":"תורת האופטימיזציה",
            "id":"104193",
            "programs":[

            ]
        },
        {
            "credit_point":5.5,
            "name":"חשבון אינפיניטסימלי 1",
            "id":"104195",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":1
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"פונקצ' מרוכבות והתמרות אינטגרליות",
            "id":"104221",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"תורת ההסתברות",
            "id":"104222",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":4
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"מד\"ח וטורי פוריה",
            "id":"104223",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"משוואות דיפרנציאליות חלקיות מ'",
            "id":"104228",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תורת השדות",
            "id":"104274",
            "programs":[

            ]
        },
        {
            "credit_point":3.5,
            "name":"מבוא לאנליזה פונקציונלית",
            "id":"104276",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"מבוא לחוגים ושדות",
            "id":"104279",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":5.0,
            "name":"חשבון אינפי 2",
            "id":"104281",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":4.0,
            "name":"חשבון אינפי 3",
            "id":"104282",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":3
                }
            ]
        },
        {
            "credit_point":3.5,
            "name":"משוואות דיפרנציאליות רגילות א'",
            "id":"104285",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":4
                }
            ]
        },
        {
            "credit_point":2.5,
            "name":"קומבינטוריקה",
            "id":"104286",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":2
                }
            ]
        },
        {
            "credit_point":3.5,
            "name":"תורת הקבוצות",
            "id":"104290",
            "programs":[
                {
                    "study_program":"המסלול למדעי המחשב - מתמטיקה",
                    "semester":1
                }
            ]
        },
        {
            "credit_point":3.0,
            "name":"לוגיקה מתמטית",
            "id":"106156",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תורת המידה",
            "id":"106378",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"אלגברה מודרנית 1",
            "id":"106380",
            "programs":[

            ]
        },
        {
            "credit_point":4.0,
            "name":"שיטות נומריות במד\"ח",
            "id":"106416",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"תהליכים סטוכסטיים",
            "id":"106429",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"פרקים נבחרים באלגברה",
            "id":"106702",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים בגאומטריה",
            "id":"106803",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים נבחרים בחבורות אלגבריות",
            "id":"106925",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים נבחרים בקומבינטוריקה 2",
            "id":"106928",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים נבחרים בטופולוגיה 2",
            "id":"106933",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים נבחרים באנליזה מתמטית 4",
            "id":"106937",
            "programs":[

            ]
        },
        {
            "credit_point":2.5,
            "name":"אנליזה פונקציונלית להנדסת חשמל",
            "id":"108327",
            "programs":[

            ]
        },
        {
            "credit_point":2.0,
            "name":"סמינר במתמטיקה שימושית 2",
            "id":"196001",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"שיטות אסימפטוטיות 2",
            "id":"198002",
            "programs":[

            ]
        },
        {
            "credit_point":3.0,
            "name":"נושאים נבחרים במתמטיקה שימושית",
            "id":"198008",
            "programs":[

            ]
        }
    ];
*/
    var cs = [
        {
            "id": 234111,
            "name": "מבוא למדעי המחשב",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234112,
            "name": "מבוא למחשב - שפת סי",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                234123,
                234218,
                236363
            ],
            "programs": []
        },
        {
            "id": 234114,
            "name": "מבוא למדעי המחשב מ'",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                234145,
                44145,
                104166,
                104195,
                104290
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 1
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 1
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 1
                },
                {
                    "name": "מערכות מידע",
                    "semester": 1
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 1
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 1
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 1
                }
            ]
        },
        {
            "id": 234118,
            "name": "ארגון ותכנות המחשב",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234122,
                234141,
                44262,
                104172,
                104173,
                104281,
                104286,
                114076,
                114210
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 2
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 2
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 2
                },
                {
                    "name": "מערכות מידע",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 2
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 2
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 234117,
            "name": "מבוא למדעי המחשב ח'",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                234145
            ],
            "programs": [
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 1
                }
            ]
        },
        {
            "id": 234122,
            "name": "מבוא לתכנות מערכות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234118,
                234141,
                44262,
                104172,
                104173,
                104281,
                104286,
                114076,
                114210
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 2
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 2
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 2
                },
                {
                    "name": "מערכות מידע",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 2
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 2
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 234123,
            "name": "מערכות הפעלה",
            "days_before": 5,
            "credit_point"
                : "4.5"
            ,
            "conflicts": [
                234125,
                234247,
                234267,
                236353,
                236363,
                236703,
                44131,
                104122,
                104222,
                104285,
                114021
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 4
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 4
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 4
                },
                {
                    "name": "מערכות מידע",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 5
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 4
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 4
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 234125,
            "name": "אלגוריתמים נומריים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234123,
                234247,
                236334,
                236343,
                236360,
                44131
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 5
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 5
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 6
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 4
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 7
                }
            ]
        },
        {
            "id": 234126,
            "name": "מבוא למחשב - שפת סי אנגלית",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                44000,
                44114,
                44124,
                44125,
                44131
            ],
            "programs": []
        },
        {
            "id": 234141,
            "name": "קומבינטוריקה למדעי המחשב",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234118,
                234122,
                44262,
                104172,
                104173,
                104281,
                104286,
                114076,
                114210
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 2
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 2
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 2
                },
                {
                    "name": "מערכות מידע",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 2
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 2
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 234144,
            "name": "מתמטיקה דיסקרטית מ'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234145,
            "name": "מערכות ספרתיות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234114,
                234117,
                44145,
                104166,
                104195,
                104290
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 1
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 1
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 1
                },
                {
                    "name": "מערכות מידע",
                    "semester": 1
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 1
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 1
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 1
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 1
                }
            ]
        },
        {
            "id": 234218,
            "name": "מבני נתונים 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234262,
                234293,
                234319,
                44105,
                104282,
                114020
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 3
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 3
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 3
                },
                {
                    "name": "מערכות מידע",
                    "semester": 3
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 3
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 3
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 3
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 234247,
            "name": "אלגוריתמים 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234123,
                234125,
                234262,
                234267,
                236353,
                236363,
                236703,
                44131,
                104122,
                104222,
                104285
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 4
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 4
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 4
                },
                {
                    "name": "מערכות מידע",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 4
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 4
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 234262,
            "name": "תכן לוגי",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234218,
                234247,
                234267,
                234293,
                234319,
                44105
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 3
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 3
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 3
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 4
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 3
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 234267,
            "name": "מבנה מחשבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234123,
                234247,
                234262,
                236353,
                236703
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 4
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 234291,
            "name": "פרויקט 2 במדעי המחשב",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234293,
            "name": "לוגיקה ותורת הקבוצות למדעי המחשב",
            "days_before": 7,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                234218,
                234262,
                234319,
                104282
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 3
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 3
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 3
                },
                {
                    "name": "מערכות מידע",
                    "semester": 3
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 3
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 234306,
            "name": "פרויקט ב- וי.אל.אס.אי. א'",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234312,
            "name": "פרויקט שנתי בהנדסת תוכנה-שלב ב'",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234313,
            "name": "פרויקט תעשייתי",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234319,
            "name": "שפות תכנות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234218,
                234262,
                234293
            ],
            "programs": [
                {
                    "name": "הנדסת תוכנה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 234322,
            "name": "מערכות אחסון מידע",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                236334,
                236343,
                236360
            ],
            "programs": [
                {
                    "name": "הנדסת תוכנה",
                    "semester": 5
                },
                {
                    "name": "מערכות מידע",
                    "semester": 5
                }
            ]
        },
        {
            "id": 234326,
            "name": "פרויקט בגרפיקה ממוחשבת ה'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234329,
            "name": "פרויקט בעיבוד וניתוח תמונות",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 234900,
            "name": "סדנה בתכנות תחרותי",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236026,
            "name": "ידע ומשחקים במערכות מבוזרות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236270,
            "name": "ניהול פרויקטי תוכנה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236278,
            "name": "מאיצים חישוביים ומערכות מואצות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236299,
            "name": "מבוא לעיבוד שפות טבעיות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236321,
            "name": "שיטות בהנדסת תוכנה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236323,
            "name": "פרויקט בעיבוד נתונים מ'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236327,
            "name": "עיבוד תמונות ואותות במחשב",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236328,
            "name": "פרוייקט בגרפיקה ממוחשבת מ'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236329,
            "name": "עיבוד ספרתי של גאומטריה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236330,
            "name": "מבוא לאופטימיזציה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236332,
            "name": "האינטרנט של הדברים - טכנולוגיות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236333,
            "name": "פרויקט באינטרנט של הדברים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236334,
            "name": "מבוא לרשתות מחשבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234125,
                234322,
                236343,
                236360
            ],
            "programs": [
                {
                    "name": "הנדסת תוכנה",
                    "semester": 5
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 6
                },
                {
                    "name": "מערכות מידע",
                    "semester": 5
                }
            ]
        },
        {
            "id": 236336,
            "name": "פתרון נומרי של משוואות דיפ.חלקיות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236340,
            "name": "פרויקט בתקשורת מחשבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236343,
            "name": "תורת החישוביות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234125,
                234322,
                236334,
                236353,
                236360,
                44202,
                46267,
                104192
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 5
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 5
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 5
                },
                {
                    "name": "מערכות מידע",
                    "semester": 6
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 5
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 5
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 7
                }
            ]
        },
        {
            "id": 236348,
            "name": "מבוא לממשקי אדם-מחשב",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236350,
            "name": "הגנה במערכות מתוכנתות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236349,
            "name": "פרויקט באבטחת מידע",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236353,
            "name": "אוטומטים ושפות פורמליות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                "234123",
                "234247",
                "234267",
                "236343",
                "236703",
                "044202",
                "046267"
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 4
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 4
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 4
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 5
                },
                {
                    "name": "המסלול לביואינפורמטיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 236358,
            "name": "נושאים מתקדמים באלגוריתמים מבוזרי",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236360,
            "name": "תורת הקומפילציה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                "234125",
                "234322",
                "236334",
                "236343",
                "044167",
                "044334"
            ],
            "programs": [
                {
                    "name": "מסלול כללי ארבע שנתי",
                    "semester": 5
                },
                {
                    "name": "מסלול כללי תלת שנתי",
                    "semester": 5
                },
                {
                    "name": "הנדסת תוכנה",
                    "semester": 5
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 6
                }
            ]
        },
        {
            "id": 236363,
            "name": "מערכות מסד נתונים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234123,
                234247
            ],
            "programs": [
                {
                    "name": "מערכות מידע",
                    "semester": 4
                }
            ]
        },
        {
            "id": 236366,
            "name": "פרויקט במערכות הפעלה מ'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236371,
            "name": "פרויקט בתכנות מקבילי ומבוזר",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236374,
            "name": "שיטות הסתברותיות ואלגוריתמים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236378,
            "name": "עקרונות ניהול מידע חסר ודאות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236381,
            "name": "פרויקט ב- וי.אל.אס.אי. ב'",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236499,
            "name": "פרויקט בחומות אש",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236502,
            "name": "פרויקט בבינה מלאכותית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236503,
            "name": "פרויקט תכנות מתקדם במדעי המחשב 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236504,
            "name": "פרויקט המשך בתוכנה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236506,
            "name": "קריפטולוגיה מודרנית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236510,
            "name": "ממוש מערכות מסדי נתונים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236520,
            "name": "קידוד במערכות אחסון-מידע",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236522,
            "name": "אלגוריתמים בביולוגיה חישובית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236525,
            "name": "מבוא לקידוד רשת, חסמים ובניות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236526,
            "name": "פרויקט תכנות מתקדם במדעי המחשב 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236601,
            "name": "נושאים מתקדמים במדעי המחשב 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236602,
            "name": "נושאים מתקדמים במדעי המחשב 2",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236603,
            "name": "נושאים מתקדמים במדעי המחשב 3",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236604,
            "name": "נושאים מתקדמים במדעי המחשב 4",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236605,
            "name": "נושאים מתקדמים במדעי המחשב 5",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236606,
            "name": "נושאים מתקדמים במדעי המחשב 6",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236607,
            "name": "נושאים מתקדמים במדעי המחשב 7",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236608,
            "name": "נושאים מתקדמים במדעי המחשב 8",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236610,
            "name": "נושאים מתקדמים במדעי המחשב 10",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236611,
            "name": "נושאים מתקדמים במדעי המחשב 11",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236613,
            "name": "נושאים מתקדמים בקריפטולוגיה ה'",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236620,
            "name": "נושאים מתקדמים באלגוריתמים ה'",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236638,
            "name": "נושאים מתק. בתכנון וניתוח רשתות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236640,
            "name": "נושאים מתקדמים באינפורמציה קוונטי",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236653,
            "name": "נושאים מתקדמים באבטחת מידע ה'+ת'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236698,
            "name": "הבטחת איכות תוכנה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236700,
            "name": "תיכון תוכנה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236714,
            "name": "נושאים בהוכחה אוטומטית של משפטים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236703,
            "name": "תכנות מונחה עצמים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234123,
                234247,
                234267,
                236353
            ],
            "programs": [
                {
                    "name": "הנדסת תוכנה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 236719,
            "name": "גאומטריה חישובית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236754,
            "name": "פרויקט במערכות נבונות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236756,
            "name": "מבוא למערכות לומדות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236800,
            "name": "סמינר בהנדסת תוכנה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236801,
            "name": "סמינר במדעי המחשב 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236802,
            "name": "סמינר במדעי המחשב 2",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236803,
            "name": "סמינר במדעי המחשב 3",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236804,
            "name": "סמינר במדעי המחשב 4",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236814,
            "name": "סמינר בשיטות אימות פורמליות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236818,
            "name": "סמינר בביואינפורמטיקה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236828,
            "name": "פרויקט במערכות מחשבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 236874,
            "name": "פרויקט בראיה ממוחשבת",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 238902,
            "name": "סמינריון מחקר בקומבינטוריקה ותורת",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        }
    ];

    var ee = [
        {
            "id": 44000,
            "name": "פרויקט מחקרי לסטודנטים מצטיינים",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44101,
            "name": "מבוא למערכות תכנה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44131
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 44105,
            "name": "תורת המעגלים החשמליים",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                234218,
                234262,
                44114,
                44268,
                46002,
                46209,
                46210,
                114030
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 3
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 3
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 3
                },
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 44114,
            "name": "מתמטיקה דיסקרטית ח'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44105,
                44268,
                46002,
                46209,
                46210
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 44124,
            "name": "אלקטרוניקה פיסיקלית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44148,
                44160,
                44202
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 5
                }
            ]
        },
        {
            "id": 44125,
            "name": "יסודות התקני מוליכים למחצה מ'",
            "days_before": 4,
            "credit_point"
                : "4.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44131,
            "name": "אותות ומערכות",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                234123,
                234125,
                234247,
                44101,
                44140,
                114036,
                115203
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 4
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 4
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 44139,
            "name": "ממירי מתח ממותגים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44140,
            "name": "שדות אלקטרומגנטיים",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                44131,
                114036,
                115203
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 4
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 44142,
            "name": "מעגלים אלקטרוניים לינאריים",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44145,
            "name": "מערכות ספרתיות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234114,
                234145
            ],
            "programs": [
                {
                    "name": "הנדסת מחשבים",
                    "semester": 1
                }
            ]
        },
        {
            "id": 44147,
            "name": "מעגלי מיתוג אלקטרוניים",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44148,
            "name": "גלים ומערכות מפולגות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44124,
                44160,
                44202,
                114035
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 5
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 5
                }
            ]
        },
        {
            "id": 44151,
            "name": "מעבדה להנדסת חשמל 1ח'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44160,
            "name": "מעבדה בהנדסת חשמל 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44124,
                44148,
                44202
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 5
                }
            ]
        },
        {
            "id": 44165,
            "name": "מעבדה בהנדסת חשמל 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44167
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 6
                }
            ]
        },
        {
            "id": 44166,
            "name": "מעבדה בהנדסת חשמל 3",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [
                44169
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 7
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 8
                }
            ]
        },
        {
            "id": 44167,
            "name": "פרוייקט א'",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                236360,
                44165,
                44334,
                114037
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 6
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 6
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 6
                },
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 6
                }
            ]
        },
        {
            "id": 44169,
            "name": "פרויקט  ב",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                44166,
                114250,
                114252
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 7
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 7
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 7
                },
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 7
                }
            ]
        },
        {
            "id": 44170,
            "name": "פרויקט  מיוחד",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44173,
            "name": "פרויקט בתעשיה",
            "days_before": 8,
            "credit_point"
                : "8"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44180,
            "name": "נושא אישי למצטיינים",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44184,
            "name": "נושאים מתקדמים למצטיינים",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44185,
            "name": "נושא מיוחד למצטיינים",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44191,
            "name": "מערכות בקרה 1",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44192,
            "name": "מערכות בקרה 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44193,
            "name": "מעבדה לבקרה לינארית",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44196,
            "name": "המרת אנרגיה,מקורות אנרגיה מתחדשים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44198,
            "name": "מבוא לעבוד ספרתי של אותות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44202,
            "name": "אותות אקראיים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                236343,
                236353,
                44124,
                44148,
                44160,
                46267,
                114035
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 5
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 5
                },
                {
                    "name": "הנדסת מחשבים",
                    "semester": 5
                }
            ]
        },
        {
            "id": 44239,
            "name": "תהליכים במיקרואלקטרוניקה",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 44252,
            "name": "מערכות ספרתיות ומבנה המחשב",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [
                114020,
                114076
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 2
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 44262,
            "name": "תכן לוגי ומבוא למחשבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                234118,
                234122,
                234141
            ],
            "programs": [
                {
                    "name": "הנדסת מחשבים",
                    "semester": 2
                }
            ]
        },
        {
            "id": 44268,
            "name": "מבוא למבני נתונים ואלגוריתמים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44105,
                44114,
                46002,
                46209,
                46210,
                114030
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת חשמל",
                    "semester": 3
                },
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 3
                },
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 44334,
            "name": "רשתות מחשבים ואינטרנט 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                236360,
                44167
            ],
            "programs": [
                {
                    "name": "הנדסת מחשבים",
                    "semester": 6
                },
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 5
                }
            ]
        },
        {
            "id": 44339,
            "name": "אלקטרואופטיקה 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 45001,
            "name": "פרויקט מבוא בהנדסת חשמל",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46002,
            "name": "תכן וניתוח אלגוריתמים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                44105,
                44114,
                44268,
                46209,
                46210
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 46004,
            "name": "נושאים מתקדמים 2",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46005,
            "name": "רשתות מחשבים ואינטרנט 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46006,
            "name": "נושאים מתקדמים 3",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46043,
            "name": "עיבוד הספק",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46188,
            "name": "מעגלים אלקטרוניים לאותות מעורבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46189,
            "name": "תכן מסננים אקטיביים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46194,
            "name": "למידה ותכנון במערכות דינאמיות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46195,
            "name": "מערכות לומדות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46197,
            "name": "שיטות חישוביות באופטימיזציה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46200,
            "name": "עבוד ונתוח תמונות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46201,
            "name": "מבוא לעיבוד אותות אקראיים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46206,
            "name": "מבוא לתקשורת ספרתית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46209,
            "name": "מבנה מערכות הפעלה",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                44105,
                44114,
                44268,
                46002,
                46210
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 46210,
            "name": "מעבדה במערכות הפעלה",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [
                44105,
                44114,
                44268,
                46002,
                46209
            ],
            "programs": [
                {
                    "name": "המסלול להנדסת מחשבים ותוכנה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 46216,
            "name": "מיקרוגלים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46225,
            "name": "עקרונות פיזיקליים של התקני מל\"מ",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46232,
            "name": "פרקים בננו-אלקטרוניקה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46235,
            "name": "התקני הספק משולבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46237,
            "name": "מעגלים משולבים - מבוא ל-וי.ל.ס.י.",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46239,
            "name": "מעבדה בננו-אלקטרוניקה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46244,
            "name": "תופעות גלים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46250,
            "name": "אלקטרואופטיקה 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46256,
            "name": "אנטנות וקרינה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46267,
            "name": "מבנה מחשבים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                236343,
                236353,
                44202
            ],
            "programs": [
                {
                    "name": "הנדסת מחשבים",
                    "semester": 5
                }
            ]
        },
        {
            "id": 46273,
            "name": "תכנות פונקציונאלי מבוזר",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46275,
            "name": "תרגום ואופטמיזציה דינמיים של קוד",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46278,
            "name": "מאיצים חישוביים ומערכות מואצות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46332,
            "name": "מערכות ראיה ושמיעה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46342,
            "name": "מבוא לתקשורת בסיבים אופטיים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46733,
            "name": "תורת האינפורמציה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46746,
            "name": "אלג' ויישומים בראייה ממוחשבת",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46831,
            "name": "מבוא לדימות רפואי",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46851,
            "name": "לייזרים של מוליכים למחצה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46864,
            "name": "תכן מערכות ספרתיות מהירות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46918,
            "name": "תכן פיסי של וי.אל.אס.אי",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 46968,
            "name": "מיקרו-עיבוד ומיקרו-מערכות אלקטרומ",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 47006,
            "name": "נושאים מתקדמים 6",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48711,
            "name": "מעבדה באלקטרואופטיקה 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48712,
            "name": "מעבדה באלקטרואופטיקה 2",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48732,
            "name": "נושאים מתקדמים בתורת הגלים 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48747,
            "name": "מעבדה באותות ומערכות ביולוגיים",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48816,
            "name": "מעבדה לעבוד אותות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48852,
            "name": "מעבדה בהמרת אנרגיה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48870,
            "name": "פיתוח נושאים בהנדסת חשמל 1",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48877,
            "name": "מעבדה לתכנה וחומרה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48879,
            "name": "סמינר בארכיטקטורות וי.ל.ס.י.",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48885,
            "name": "נושאים מתקדמים בהנדסת מחשבים",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48887,
            "name": "מבוא למחקר הפקולטי",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48903,
            "name": "נושאים מתקדמים במיקרואלקטרוניקה 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48908,
            "name": "נושאים מתקדמים במיקרואלקטרוניקה 2",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48921,
            "name": "נושאים מתקדמים בראיה, מבנה תמונות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48922,
            "name": "מע בראייה מבנה תמונות וראיה ממוחש",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48929,
            "name": "עיבוד אותות מסתגל )אדפטיבי(",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48933,
            "name": "מעבדה לתקשורת",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48934,
            "name": "תקשורת מקודדת",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48954,
            "name": "שיטות סטטיסטיות בעיבוד תמונה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48966,
            "name": "מעבדה במיקרואלקטרוניקה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48967,
            "name": "מעבדה לרשתות מחשבים",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48976,
            "name": "מעבדה במערכות מקביליות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48978,
            "name": "מקורות קרינה מבוססים על אלומות אל",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48979,
            "name": "נושאים בהסתברות ותהליכים אקראיים",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48985,
            "name": "שיטות טופולוגיות בהנדסה, רשתות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 48987,
            "name": "נושאים מתקדמים באנרגיה 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "048990",
            "name": "סמינריון 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "048991",
            "name": "סמינריון 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049005",
            "name": "מעבדה בנושאי בקרה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 49006,
            "name": "מעבדה לגלים אלקטרומגנטיים",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049026",
            "name": "ידע ומשחקים במערכות מבוזרות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049030",
            "name": "נושאים במערכות אחסון",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049050",
            "name": "נושאים מתקדמים בננו אלקטרוניקה 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049053",
            "name": "מעבדה בלמידה חישובית",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049054",
            "name": "פיסיקה סטטיסטית ותורת האינפורמציה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049056",
            "name": "נושאים בראיה ממוחשבת# ניתוח צורה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049061",
            "name": "צפני קיטוב",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049062",
            "name": "דימות ושחזור תלת-מימדי",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": "049063",
            "name": "מידע בהתקני איחסון",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        }
    ];

    var math =[
        {
            "id": 104003,
            "name": "חשבון דיפרנציאלי ואינטגרלי 1",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104004,
            "name": "חשבון דיפרנציאלי ואינטגרלי 2",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104013,
            "name": "חשבון דיפרנציאלי ואינטגרלי 2ת'",
            "days_before": 5,
            "credit_point"
                : "5.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104016,
            "name": "אלגברה 1/מורחב",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104017,
            "name": "חשבון דיפרנציאלי ואינטגרלי 1נ'",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104018,
            "name": "חשבון דיפרנציאלי ואינטגרלי 1מ'",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104019,
            "name": "אלגברה ליניארית מ'",
            "days_before": 4,
            "credit_point"
                : "4.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104020,
            "name": "חשבון דיפרנציאלי ואינטגרלי 2נ'",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104022,
            "name": "חשבון דיפרנציאלי ואינטגרלי 2מ'",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104030,
            "name": "מבוא למשוואות דיפרנציאליות חלקיות",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104031,
            "name": "חשבון אינפיניטסימלי 1מ'",
            "days_before": 5,
            "credit_point"
                : "5.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104032,
            "name": "חשבון אינפיניטסימלי 2מ'",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104033,
            "name": "אנליזה וקטורית",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104034,
            "name": "מבוא להסתברות ח'",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104035,
            "name": "משוואות דיפ' רגילות ואינפי 2ח'",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104114,
            "name": "יסודות הגאומטריה",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104122,
            "name": "תורת הפונקציות 1",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                "234123",
                "234247",
                "104192",
                "104222",
                "104285"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 104131,
            "name": "משואות דיפרנציאליות רגילות/ח",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104134,
            "name": "אלגברה מודרנית ח",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104135,
            "name": "משוואות דפרנציאליות רגילות ת'",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104142,
            "name": "מבוא למרחבים מטריים וטופולוגיים",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                "104279",
                "104282",
                "104285"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 104144,
            "name": "טופולוגיה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104166,
            "name": "אלגברה א'",
            "days_before": 5,
            "credit_point"
                : "5.5"
            ,
            "conflicts": [
                "234114",
                "234145",
                "104195",
                "104290"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 1
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 1
                }
            ]
        },
        {
            "id": 104172,
            "name": "מבוא לחבורות",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [
                "234118",
                "234122",
                "234141",
                "104173",
                "104281",
                "104286"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 104173,
            "name": "אלגברה ליניארית ב'",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                "234118",
                "234122",
                "234141",
                "104172",
                "104281",
                "104286"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 104174,
            "name": "אלגברה ליניארית במ'",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104182,
            "name": "סמינר באנליזה להסמכה 2",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104183,
            "name": "סמינר באלגברה להסמכה 1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104185,
            "name": "סמינר לסטודנ.בהסמכה1",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104191,
            "name": "מכניקת הרצף",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104192,
            "name": "מבוא למתמטיקה שמושית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                "236343",
                "104122",
                "104222"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 5
                }
            ]
        },
        {
            "id": 104193,
            "name": "תורת האופטימיזציה",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104195,
            "name": "חשבון אינפיניטסימלי 1",
            "days_before": 5,
            "credit_point"
                : "5.5"
            ,
            "conflicts": [
                "234114",
                "234145",
                "104166",
                "104290"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 1
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 1
                }
            ]
        },
        {
            "id": 104221,
            "name": "פונקצ' מרוכבות והתמרות אינטגרליות",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104222,
            "name": "תורת ההסתברות",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                "234123",
                "234247",
                "104122",
                "104192",
                "104285"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 104223,
            "name": "מד\"ח וטורי פוריה",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104228,
            "name": "משוואות דיפרנציאליות חלקיות מ'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104274,
            "name": "תורת השדות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104276,
            "name": "מבוא לאנליזה פונקציונלית",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 104279,
            "name": "מבוא לחוגים ושדות",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [
                "104142",
                "104282",
                "104285"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 104281,
            "name": "חשבון אינפי 2",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [
                "234118",
                "234122",
                "234141",
                "104172",
                "104173",
                "104286"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 104282,
            "name": "חשבון אינפי 3",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [
                "234218",
                "234293",
                "104142",
                "104279",
                "104285"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 3
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 104285,
            "name": "משוואות דיפרנציאליות רגילות א'",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                "234123",
                "234247",
                "104122",
                "104142",
                "104222",
                "104279",
                "104282"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 3
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 104286,
            "name": "קומבינטוריקה",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [
                "234118",
                "234122",
                "234141",
                "104172",
                "104173",
                "104281"
            ],
            "programs": [
                {
                    "name": "תוכנית תלת שנתית במתמטיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 104290,
            "name": "תורת הקבוצות",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                "234114",
                "234145",
                "104166",
                "104195"
            ],
            "programs": [
                {
                    "name": "המסלול למדעי המחשב - מתמטיקה",
                    "semester": 1
                }
            ]
        },
        {
            "id": 106156,
            "name": "לוגיקה מתמטית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106378,
            "name": "תורת המידה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106380,
            "name": "אלגברה מודרנית 1",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106429,
            "name": "תהליכים סטוכסטיים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106416,
            "name": "שיטות נומריות במד\"ח",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106803,
            "name": "נושאים בגאומטריה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106702,
            "name": "פרקים נבחרים באלגברה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106925,
            "name": "נושאים נבחרים בחבורות אלגבריות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106928,
            "name": "נושאים נבחרים בקומבינטוריקה 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106933,
            "name": "נושאים נבחרים בטופולוגיה 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 106937,
            "name": "נושאים נבחרים באנליזה מתמטית 4",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 108327,
            "name": "אנליזה פונקציונלית להנדסת חשמל",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 196001,
            "name": "סמינר במתמטיקה שימושית 2",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 198002,
            "name": "שיטות אסימפטוטיות 2",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 198008,
            "name": "נושאים נבחרים במתמטיקה שימושית",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        }
    ];

    var phy = [
        {
            "id": 114010,
            "name": "תגליות מדעיות 1",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114011,
            "name": "תגליות מדעיות 2",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114014,
            "name": "מכניקה וגלים",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114020,
            "name": "מעבדה לפיסיקה 1מ'",
            "days_before": 1,
            "credit_point"
                : "1.5"
            ,
            "conflicts": [
                "234218",
                "044252",
                "114021",
                "114076"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול התלת שנתי בפיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 114021,
            "name": "מעבדה לפיסיקה  2מ",
            "days_before": 1,
            "credit_point"
                : "1.5"
            ,
            "conflicts": [
                "234123",
                "114020",
                "114076"
            ],
            "programs": [
                {
                    "name": "המסלול התלת שנתי בפיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 5
                }
            ]
        },
        {
            "id": 114027,
            "name": "מעבדה לפיסיקה 5",
            "days_before": 4,
            "credit_point"
                : "4.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114028,
            "name": "מעבדה לפיסיקה 6",
            "days_before": 4,
            "credit_point"
                : "4.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114030,
            "name": "מעבדה לפיסיקה 2 מח'",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [
                "044105",
                "044268"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 114032,
            "name": "מעבדה לפיסיקה 1ח'",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114034,
            "name": "מעבדה לפיסיקה 2מפ'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": [
                {
                    "name": "המסלול התלת שנתי בפיזיקה",
                    "semester": 3
                }
            ]
        },
        {
            "id": 114035,
            "name": "מעבדה לפיסיקה 3 - גלים",
            "days_before": 1,
            "credit_point"
                : "1.5"
            ,
            "conflicts": [
                "044148",
                "044202"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 5
                }
            ]
        },
        {
            "id": 114036,
            "name": "פיסיקה סטטיסטית ותרמית",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [
                "044131",
                "044140",
                "115203"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 4
                }
            ]
        },
        {
            "id": 114037,
            "name": "מעבדה לפיסיקה 4מח'",
            "days_before": 1,
            "credit_point"
                : "1.5"
            ,
            "conflicts": [
                "044167",
                "115203"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 6
                },
                {
                    "name": "המסלול התלת שנתי בפיזיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 6
                }
            ]
        },
        {
            "id": 114038,
            "name": "מעבדה לפיזיקה - גלים - 3מפ'",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114051,
            "name": "פיסיקה 1",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114052,
            "name": "פיסיקה 2",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114054,
            "name": "פיסיקה 3",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114071,
            "name": "פיסיקה 1מ",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114073,
            "name": "פיסיקה 3ח'",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114075,
            "name": "פיסיקה 2ממ",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114076,
            "name": "פיסיקה 2פ'",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [
                "234118",
                "234122",
                "234141",
                "044252",
                "114020",
                "114021",
                "114210"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 2
                },
                {
                    "name": "המסלול התלת שנתי בפיזיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 114077,
            "name": "פיסיקה 1ל",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114078,
            "name": "פיסיקה 2ל",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114081,
            "name": "מעבדה לפיסיקה 1",
            "days_before": 1,
            "credit_point"
                : "1.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114082,
            "name": "מעבדה לפיסיקה 2",
            "days_before": 1,
            "credit_point"
                : "1.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114102,
            "name": "מרחבי זמן וחורים שחורים",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114208,
            "name": "מעבדה במדידות אופטיות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114210,
            "name": "אופטיקה",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [
                "234118",
                "234122",
                "234141",
                "114076"
            ],
            "programs": [
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 2
                }
            ]
        },
        {
            "id": 114226,
            "name": "דו\"ח סגל מחקר סתיו",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114227,
            "name": "דו\"ח סגל מחקר אביב",
            "days_before": 1,
            "credit_point"
                : "1"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114229,
            "name": "פרויקט",
            "days_before": 4,
            "credit_point"
                : "4.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114246,
            "name": "אלקטרומגנטיות ואלקטרודינמיקה",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114249,
            "name": "פיסיקה 2 ר",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114250,
            "name": "מעבדה לפיסיקה 5ת",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                "044169",
                "114252"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 7
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 7
                }
            ]
        },
        {
            "id": 114251,
            "name": "מעבדה לפיסיקה 6ת",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 114252,
            "name": "פרויקט ת",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [
                "044169",
                "114250"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 7
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 7
                }
            ]
        },
        {
            "id": 115203,
            "name": "פיסיקה קוונטית 1",
            "days_before": 5,
            "credit_point"
                : "5"
            ,
            "conflicts": [
                "044131",
                "044140",
                "114036",
                "114037"
            ],
            "programs": [
                {
                    "name": "המסלול לחשמל - פיזיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול התלת שנתי בפיזיקה",
                    "semester": 4
                },
                {
                    "name": "המסלול למדעי המחשב - פיזיקה",
                    "semester": 6
                }
            ]
        },
        {
            "id": 115249,
            "name": "פיסיקה 2רל",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 116004,
            "name": "פיס. של גרעינים וחלקיקים יסודיים",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 116027,
            "name": "פיסיקה של זורמים",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 116030,
            "name": "סמינר בפרקים נבחרים בפיסיקה-אביב",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 116031,
            "name": "תורת האינפורמציה הקוונטית",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 116321,
            "name": "ביו-פיסיקה של התא",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 117015,
            "name": "פיסיקה של אטומים ומולקולות",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 117018,
            "name": "פיסיקה של מוליכים למחצה",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 117140,
            "name": "תורת החבורות בפיסיקה",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118024,
            "name": "תופעות קריטיות",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118076,
            "name": "מעבדה מתקדמת",
            "days_before": 4,
            "credit_point"
                : "4"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118090,
            "name": "אסטרופיסיקה של אנרגיות גבוהות",
            "days_before": 2,
            "credit_point"
                : "2.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118095,
            "name": "קוסמולוגיה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118107,
            "name": "נושאים נבחרים בתורת השדות",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118111,
            "name": "נושאים נבחרים באסטרופיסיקה",
            "days_before": 2,
            "credit_point"
                : "2"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118123,
            "name": "מבוא לפיסיקת החלקיקים",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118130,
            "name": "מבוא ליחסות כללית",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118132,
            "name": "תורת השדות הקוונטית 1",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118136,
            "name": "אופטיקה אולטרה מהירה",
            "days_before": 3,
            "credit_point"
                : "3"
            ,
            "conflicts": [],
            "programs": []
        },
        {
            "id": 118138,
            "name": "מצב מוצק למוסמכים",
            "days_before": 3,
            "credit_point"
                : "3.5"
            ,
            "conflicts": [],
            "programs": []
        }
    ];

    // for (var i in cs) {
    //     sendRequest('POST', '/api/2018-spring/course/create', cs[i], function (out) {
    //         console.log(out);
    //     });
    // }
}

window.addEventListener('load', debug, false);
