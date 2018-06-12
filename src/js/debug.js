import {sendRequest} from "./request";

function debug() {
    /*
     * When initializing db, each study program name should be replaced with the db _id of the study program.
     * each faculty needs to be initialized from its account.
     */
    var cs = [
        {
            "credit_points":4.0,
            "name":"מבוא למדעי המחשב",
            "id":"234111",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
            "name":"מבוא למחשב - שפת סי",
            "id":"234112",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":1
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":1
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":1
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":1
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
            "name":"מבוא למדעי המחשב ח'",
            "id":"234117",
            "programs":[
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":1
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":2
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":2
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":2
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":2
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":2
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":2
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.5,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":4
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":5
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":6
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":7
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
            "name":"מבוא למחשב - שפת סי אנגלית",
            "id":"234126",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":2
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":2
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":2
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":2
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":2
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מתמטיקה דיסקרטית מ'",
            "id":"234144",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":1
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":1
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":1
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":1
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":1
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":3
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":3
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":3
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":4
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":4
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":3
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מבנה מחשבים",
            "id":"234267",
            "programs":[
                {
                    "study_program":"מסלול כללי ארבע שנתי",
                    "semester":4
                },
                {
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"מסלול מדעי המחשב - פיזיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":1.0,
            "name":"פרויקט 2 במדעי המחשב",
            "id":"234291",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":3
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":3
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
            "name":"פרויקט ב- וי.אל.אס.אי. א'",
            "id":"234306",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.5,
            "name":"פרויקט שנתי בהנדסת תוכנה-שלב ב'",
            "id":"234312",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט תעשייתי",
            "id":"234313",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"שפות תכנות",
            "id":"234319",
            "programs":[
                {
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":3
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מערכות אחסון מידע",
            "id":"234322",
            "programs":[
                {
                    "study_program":"המסלול להנדסת תוכנה",
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
            "credit_points":3.0,
            "name":"פרויקט בגרפיקה ממוחשבת ה'",
            "id":"234326",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
            "name":"פרויקט בעיבוד וניתוח תמונות",
            "id":"234329",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סדנה בתכנות תחרותי",
            "id":"234900",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"ידע ומשחקים במערכות מבוזרות",
            "id":"236026",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"ניהול פרויקטי תוכנה",
            "id":"236270",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מאיצים חישוביים ומערכות מואצות",
            "id":"236278",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מבוא לעיבוד שפות טבעיות",
            "id":"236299",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"שיטות בהנדסת תוכנה",
            "id":"236321",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט בעיבוד נתונים מ'",
            "id":"236323",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"עיבוד תמונות ואותות במחשב",
            "id":"236327",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרוייקט בגרפיקה ממוחשבת מ'",
            "id":"236328",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"עיבוד ספרתי של גאומטריה",
            "id":"236329",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מבוא לאופטימיזציה",
            "id":"236330",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"האינטרנט של הדברים - טכנולוגיות",
            "id":"236332",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט באינטרנט של הדברים",
            "id":"236333",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מבוא לרשתות מחשבים",
            "id":"236334",
            "programs":[
                {
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":5
                },
                {
                    "study_program":"המסלול להנדסת תוכנה",
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
            "credit_points":3.0,
            "name":"פתרון נומרי של משוואות דיפ.חלקיות",
            "id":"236336",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט בתקשורת מחשבים",
            "id":"236340",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":5
                },
                {
                    "study_program":"מערכות מידע",
                    "semester":6
                },
                {
                    "study_program":"מסלול מדעי המחשב - מתמטיקה",
                    "semester":5
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":5
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":7
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מבוא לממשקי אדם-מחשב",
            "id":"236348",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט באבטחת מידע",
            "id":"236349",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"הגנה במערכות מתוכנתות",
            "id":"236350",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":4
                },
                {
                    "study_program":"הנדסת מחשבים",
                    "semester":5
                },
                {
                    "study_program":"המסלול למדעי המחשב עם התמקדות בביואינפורמטיקה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים באלגוריתמים מבוזרי",
            "id":"236358",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
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
                    "study_program":"המסלול להנדסת תוכנה",
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
            "credit_points":3.0,
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
            "credit_points":3.0,
            "name":"פרויקט במערכות הפעלה מ'",
            "id":"236366",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט בתכנות מקבילי ומבוזר",
            "id":"236371",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"שיטות הסתברותיות ואלגוריתמים",
            "id":"236374",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"עקרונות ניהול מידע חסר ודאות",
            "id":"236378",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":4.0,
            "name":"פרויקט ב- וי.אל.אס.אי. ב'",
            "id":"236381",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט בחומות אש",
            "id":"236499",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט בבינה מלאכותית",
            "id":"236502",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט תכנות מתקדם במדעי המחשב 1",
            "id":"236503",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט המשך בתוכנה",
            "id":"236504",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"קריפטולוגיה מודרנית",
            "id":"236506",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"ממוש מערכות מסדי נתונים",
            "id":"236510",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"קידוד במערכות אחסון-מידע",
            "id":"236520",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"אלגוריתמים בביולוגיה חישובית",
            "id":"236522",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מבוא לקידוד רשת, חסמים ובניות",
            "id":"236525",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט תכנות מתקדם במדעי המחשב 2",
            "id":"236526",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 1",
            "id":"236601",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 2",
            "id":"236602",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 3",
            "id":"236603",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 4",
            "id":"236604",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 5",
            "id":"236605",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 6",
            "id":"236606",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 7",
            "id":"236607",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"נושאים מתקדמים במדעי המחשב 8",
            "id":"236608",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 10",
            "id":"236610",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במדעי המחשב 11",
            "id":"236611",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים בקריפטולוגיה ה'",
            "id":"236613",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים באלגוריתמים ה'",
            "id":"236620",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתק. בתכנון וניתוח רשתות",
            "id":"236638",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים באינפורמציה קוונטי",
            "id":"236640",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"נושאים מתקדמים באבטחת מידע ה'+ת'",
            "id":"236653",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"הבטחת איכות תוכנה",
            "id":"236698",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"תיכון תוכנה",
            "id":"236700",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"תכנות מונחה עצמים",
            "id":"236703",
            "programs":[
                {
                    "study_program":"המסלול להנדסת תוכנה",
                    "semester":4
                }
            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"נושאים בהוכחה אוטומטית של משפטים",
            "id":"236714",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"גאומטריה חישובית",
            "id":"236719",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט במערכות נבונות",
            "id":"236754",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"מבוא למערכות לומדות",
            "id":"236756",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינר בהנדסת תוכנה",
            "id":"236800",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינר במדעי המחשב 1",
            "id":"236801",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינר במדעי המחשב 2",
            "id":"236802",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינר במדעי המחשב 3",
            "id":"236803",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינר במדעי המחשב 4",
            "id":"236804",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינר בשיטות אימות פורמליות",
            "id":"236814",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינר בביואינפורמטיקה",
            "id":"236818",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט במערכות מחשבים",
            "id":"236828",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט בראיה ממוחשבת",
            "id":"236874",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        },
        {
            "credit_points":2.0,
            "name":"סמינריון מחקר בקומבינטוריקה ותורת",
            "id":"238902",
            "programs":[

            ],
            "faculty":"מדעי המחשב"
        }
    ];

    var ee = [
        {
            "credit_points":4.0,
            "name":"פרויקט מחקרי לסטודנטים מצטיינים",
            "id":"044000",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
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
            "credit_points":0.0,
            "name":"בטיחות במעבדות חשמל",
            "id":"044102",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":1
                },
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":1
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":1
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":1
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"תורת המעגלים החשמליים",
            "id":"044105",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":3
                },
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":3
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_points":3.0,
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
            "credit_points":3.0,
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
            "credit_points":4.5,
            "name":"יסודות התקני מוליכים למחצה מ'",
            "id":"044125",
            "programs":[

            ]
        },
        {
            "credit_points":4.0,
            "name":"אותות ומערכות",
            "id":"044131",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":4
                },
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":4
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":4
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":4
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"ממירי מתח ממותגים",
            "id":"044139",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"שדות אלקטרומגנטיים",
            "id":"044140",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":4
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":4
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"מעגלים אלקטרוניים לינאריים",
            "id":"044142",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מערכות ספרתיות",
            "id":"044145",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":1
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"מעגלי מיתוג אלקטרוניים",
            "id":"044147",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"גלים ומערכות מפולגות",
            "id":"044148",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":5
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":5
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"מעבדה להנדסת חשמל 1ח'",
            "id":"044151",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
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
            "credit_points":3.0,
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
            "credit_points":2.5,
            "name":"מעבדה בהנדסת חשמל 3",
            "id":"044166",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":7
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":8
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"פרוייקט א'",
            "id":"044167",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":6
                },
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":6
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":6
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":6
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"פרויקט  ב",
            "id":"044169",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":7
                },
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":7
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":7
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":7
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"פרויקט  מיוחד",
            "id":"044170",
            "programs":[

            ]
        },
        {
            "credit_points":8.0,
            "name":"פרויקט בתעשיה",
            "id":"044173",
            "programs":[

            ]
        },
        {
            "credit_points":4.0,
            "name":"נושא אישי למצטיינים",
            "id":"044180",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים למצטיינים",
            "id":"044184",
            "programs":[

            ]
        },
        {
            "credit_points":1.0,
            "name":"נושא מיוחד למצטיינים",
            "id":"044185",
            "programs":[

            ]
        },
        {
            "credit_points":4.0,
            "name":"מערכות בקרה 1",
            "id":"044191",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מערכות בקרה 2",
            "id":"044192",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה לבקרה לינארית",
            "id":"044193",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"המרת אנרגיה,מקורות אנרגיה מתחדשים",
            "id":"044196",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מבוא לעבוד ספרתי של אותות",
            "id":"044198",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"אותות אקראיים",
            "id":"044202",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":5
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":5
                },
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":5
                }
            ]
        },
        {
            "credit_points":3.5,
            "name":"תהליכים במיקרואלקטרוניקה",
            "id":"044239",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"מערכות ספרתיות ומבנה המחשב",
            "id":"044252",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":2
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":2
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"תכן לוגי ומבוא למחשבים",
            "id":"044262",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"מבוא למבני נתונים ואלגוריתמים",
            "id":"044268",
            "programs":[
                {
                    "study_program":"המסלול להנדסת חשמל",
                    "semester":3
                },
                {
                    "study_program":"מסלול חשמל-פיסיקה",
                    "semester":3
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":3
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"רשתות מחשבים ואינטרנט 1",
            "id":"044334",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":6
                },
                {
                    "study_program":"המסלול להנדסת מחשבים ותוכנה",
                    "semester":5
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"אלקטרואופטיקה 1",
            "id":"044339",
            "programs":[

            ]
        },
        {
            "credit_points":1.0,
            "name":"פרויקט מבוא בהנדסת חשמל",
            "id":"045001",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
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
            "credit_points":2.0,
            "name":"נושאים מתקדמים 2",
            "id":"046004",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"רשתות מחשבים ואינטרנט 2",
            "id":"046005",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים מתקדמים 3",
            "id":"046006",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"עיבוד הספק",
            "id":"046043",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מעגלים אלקטרוניים לאותות מעורבים",
            "id":"046188",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תכן מסננים אקטיביים",
            "id":"046189",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"למידה ותכנון במערכות דינאמיות",
            "id":"046194",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מערכות לומדות",
            "id":"046195",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"שיטות חישוביות באופטימיזציה",
            "id":"046197",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"עבוד ונתוח תמונות",
            "id":"046200",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מבוא לעיבוד אותות אקראיים",
            "id":"046201",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מבוא לתקשורת ספרתית",
            "id":"046206",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
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
            "credit_points":1.0,
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
            "credit_points":3.0,
            "name":"מיקרוגלים",
            "id":"046216",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"עקרונות פיזיקליים של התקני מל\"מ",
            "id":"046225",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"פרקים בננו-אלקטרוניקה",
            "id":"046232",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"התקני הספק משולבים",
            "id":"046235",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מעגלים משולבים - מבוא ל-וי.ל.ס.י.",
            "id":"046237",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מעבדה בננו-אלקטרוניקה",
            "id":"046239",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תופעות גלים",
            "id":"046244",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"אלקטרואופטיקה 2",
            "id":"046250",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"אנטנות וקרינה",
            "id":"046256",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מבנה מחשבים",
            "id":"046267",
            "programs":[
                {
                    "study_program":"המסלול להנדסת מחשבים",
                    "semester":5
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"תכנות פונקציונאלי מבוזר",
            "id":"046273",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תרגום ואופטמיזציה דינמיים של קוד",
            "id":"046275",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מאיצים חישוביים ומערכות מואצות",
            "id":"046278",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מערכות ראיה ושמיעה",
            "id":"046332",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מבוא לתקשורת בסיבים אופטיים",
            "id":"046342",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תורת האינפורמציה",
            "id":"046733",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"אלג' ויישומים בראייה ממוחשבת",
            "id":"046746",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מבוא לדימות רפואי",
            "id":"046831",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"לייזרים של מוליכים למחצה",
            "id":"046851",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תכן מערכות ספרתיות מהירות",
            "id":"046864",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תכן פיסי של וי.אל.אס.אי",
            "id":"046918",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מיקרו-עיבוד ומיקרו-מערכות אלקטרומ",
            "id":"046968",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים מתקדמים 6",
            "id":"047006",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה באלקטרואופטיקה 1",
            "id":"048711",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה באלקטרואופטיקה 2",
            "id":"048712",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים בתורת הגלים 1",
            "id":"048732",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה באותות ומערכות ביולוגיים",
            "id":"048747",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה לעבוד אותות",
            "id":"048816",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה בהמרת אנרגיה",
            "id":"048852",
            "programs":[

            ]
        },
        {
            "credit_points":1.0,
            "name":"פיתוח נושאים בהנדסת חשמל 1",
            "id":"048870",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה לתכנה וחומרה",
            "id":"048877",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"סמינר בארכיטקטורות וי.ל.ס.י.",
            "id":"048879",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים בהנדסת מחשבים",
            "id":"048885",
            "programs":[

            ]
        },
        {
            "credit_points":1.0,
            "name":"מבוא למחקר הפקולטי",
            "id":"048887",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במיקרואלקטרוניקה 1",
            "id":"048903",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים במיקרואלקטרוניקה 2",
            "id":"048908",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים בראיה, מבנה תמונות",
            "id":"048921",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מע בראייה מבנה תמונות וראיה ממוחש",
            "id":"048922",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"עיבוד אותות מסתגל )אדפטיבי(",
            "id":"048929",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה לתקשורת",
            "id":"048933",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"תקשורת מקודדת",
            "id":"048934",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"שיטות סטטיסטיות בעיבוד תמונה",
            "id":"048954",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה במיקרואלקטרוניקה",
            "id":"048966",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה לרשתות מחשבים",
            "id":"048967",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה במערכות מקביליות",
            "id":"048976",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מקורות קרינה מבוססים על אלומות אל",
            "id":"048978",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים בהסתברות ותהליכים אקראיים",
            "id":"048979",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"שיטות טופולוגיות בהנדסה, רשתות",
            "id":"048985",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים באנרגיה 1",
            "id":"048987",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"סמינריון 1",
            "id":"048990",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"סמינריון 2",
            "id":"048991",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה בנושאי בקרה",
            "id":"049005",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה לגלים אלקטרומגנטיים",
            "id":"049006",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"ידע ומשחקים במערכות מבוזרות",
            "id":"049026",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים במערכות אחסון",
            "id":"049030",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים מתקדמים בננו אלקטרוניקה 1",
            "id":"049050",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מעבדה בלמידה חישובית",
            "id":"049053",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"פיסיקה סטטיסטית ותורת האינפורמציה",
            "id":"049054",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים בראיה ממוחשבת# ניתוח צורה",
            "id":"049056",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"צפני קיטוב",
            "id":"049061",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"דימות ושחזור תלת-מימדי",
            "id":"049062",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מידע בהתקני איחסון",
            "id":"049063",
            "programs":[

            ]
        }
    ];

    var physics = [
        {
            "credit_points":0.0,
            "name":"השלמות פיסיקה 1-סווג חלק א'",
            "id":"113013",
            "programs":[

            ]
        },
        {
            "credit_points":0.0,
            "name":"השלמות פיסיקה 2-סווג חלק ב'",
            "id":"113014",
            "programs":[

            ]
        },
        {
            "credit_points":1.0,
            "name":"תגליות מדעיות 1",
            "id":"114010",
            "programs":[

            ]
        },
        {
            "credit_points":1.0,
            "name":"תגליות מדעיות 2",
            "id":"114011",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מכניקה וגלים",
            "id":"114014",
            "programs":[

            ]
        },
        {
            "credit_points":1.5,
            "name":"מעבדה לפיסיקה 1מ'",
            "id":"114020",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":2
                },
                {
                    "study_program":"המסלול התלת שנתי ",
                    "semester":2
                },
                {
                    "study_program":"5b1aa9716a10792794d04696",
                    "semester":3
                }
            ]
        },
        {
            "credit_points":1.5,
            "name":"מעבדה לפיסיקה  2מ",
            "id":"114021",
            "programs":[
                {
                    "study_program":"המסלול התלת שנתי ",
                    "semester":2
                },
                {
                    "study_program":"מסלול פיזיקה - מדעי המחשב",
                    "semester":5
                }
            ]
        },
        {
            "credit_points":4.5,
            "name":"מעבדה לפיסיקה 5",
            "id":"114027",
            "programs":[

            ]
        },
        {
            "credit_points":4.5,
            "name":"מעבדה לפיסיקה 6",
            "id":"114028",
            "programs":[

            ]
        },
        {
            "credit_points":1.0,
            "name":"מעבדה לפיסיקה 2 מח'",
            "id":"114030",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":3
                }
            ]
        },
        {
            "credit_points":1.0,
            "name":"מעבדה לפיסיקה 1ח'",
            "id":"114032"
        },
        {
            "credit_points":3.0,
            "name":"מעבדה לפיסיקה 2מפ'",
            "id":"114034",
            "programs":[
                {
                    "study_program":"המסלול התלת שנתי ",
                    "semester":3
                }
            ]
        },
        {
            "credit_points":1.5,
            "name":"מעבדה לפיסיקה 3 - גלים",
            "id":"114035",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":5
                }
            ]
        },
        {
            "credit_points":5.0,
            "name":"פיסיקה סטטיסטית ותרמית",
            "id":"114036",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":4
                }
            ]
        },
        {
            "credit_points":1.5,
            "name":"מעבדה לפיסיקה 4מח'",
            "id":"114037",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":6
                },
                {
                    "study_program":"המסלול התלת שנתי ",
                    "semester":4
                },
                {
                    "study_program":"מסלול פיזיקה - מדעי המחשב",
                    "semester":6
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"מעבדה לפיזיקה - גלים - 3מפ'",
            "id":"114038"
        },
        {
            "credit_points":2.5,
            "name":"פיסיקה 1",
            "id":"114051",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה 2",
            "id":"114052",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה 3",
            "id":"114054",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה 1מ",
            "id":"114071",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה 3ח'",
            "id":"114073",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"פיסיקה 2ממ",
            "id":"114075",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"פיסיקה 2פ'",
            "id":"114076",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":2
                },
                {
                    "study_program":"מסלול פיזיקה - מדעי המחשב",
                    "semester":2
                },
                {
                    "study_program":"המסלול התלת שנתי ",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":2.5,
            "name":"פיסיקה 1ל",
            "id":"114077",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה 2ל",
            "id":"114078",
            "programs":[

            ]
        },
        {
            "credit_points":1.5,
            "name":"מעבדה לפיסיקה 1",
            "id":"114081",
            "programs":[

            ]
        },
        {
            "credit_points":1.5,
            "name":"מעבדה לפיסיקה 2",
            "id":"114082",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"מרחבי זמן וחורים שחורים",
            "id":"114102",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מעבדה במדידות אופטיות",
            "id":"114208",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"אופטיקה",
            "id":"114210",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - מדעי המחשב",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":1.0,
            "name":"דו\"ח סגל מחקר סתיו",
            "id":"114226"
        },
        {
            "credit_points":1.0,
            "name":"דו\"ח סגל מחקר אביב",
            "id":"114227"
        },
        {
            "credit_points":4.5,
            "name":"פרויקט",
            "id":"114229"
        },
        {
            "credit_points":5.0,
            "name":"אלקטרומגנטיות ואלקטרודינמיקה",
            "id":"114246"
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה 2 ר",
            "id":"114249"
        },
        {
            "credit_points":3.0,
            "name":"מעבדה לפיסיקה 5ת",
            "id":"114250",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":7
                },
                {
                    "study_program":"מסלול פיזיקה - מדעי המחשב",
                    "semester":7
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"מעבדה לפיסיקה 6ת",
            "id":"114251"
        },
        {
            "credit_points":3.0,
            "name":"פרויקט ת",
            "id":"114252",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":7
                },
                {
                    "study_program":"מסלול פיזיקה - מדעי המחשב",
                    "semester":7
                }
            ]
        },
        {
            "credit_points":5.0,
            "name":"פיסיקה קוונטית 1",
            "id":"115203",
            "programs":[
                {
                    "study_program":"מסלול פיזיקה - חשמל",
                    "semester":4
                },
                {
                    "study_program":"המסלול התלת שנתי ",
                    "semester":4
                },
                {
                    "study_program":"מסלול פיזיקה - מדעי המחשב",
                    "semester":6
                }
            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה 2רל",
            "id":"115249",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיס. של גרעינים וחלקיקים יסודיים",
            "id":"116004",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה של זורמים",
            "id":"116027",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"סמינר בפרקים נבחרים בפיסיקה-אביב",
            "id":"116030",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"תורת האינפורמציה הקוונטית",
            "id":"116031",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"ביו-פיסיקה של התא",
            "id":"116321",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"פיסיקה של אטומים ומולקולות",
            "id":"117015",
            "programs":[

            ]
        },
        {
            "credit_points":2.5,
            "name":"פיסיקה של מוליכים למחצה",
            "id":"117018",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"תורת החבורות בפיסיקה",
            "id":"117140",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תופעות קריטיות",
            "id":"118024",
            "programs":[

            ]
        },
        {
            "credit_points":4.0,
            "name":"מעבדה מתקדמת",
            "id":"118076",
            "programs":[

            ]
        },
        {
            "credit_points":2.5,
            "name":"אסטרופיסיקה של אנרגיות גבוהות",
            "id":"118090",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"קוסמולוגיה",
            "id":"118095",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים נבחרים בתורת השדות",
            "id":"118107",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"נושאים נבחרים באסטרופיסיקה",
            "id":"118111",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"מבוא לפיסיקת החלקיקים",
            "id":"118123",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"מבוא ליחסות כללית",
            "id":"118130",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"תורת השדות הקוונטית 1",
            "id":"118132",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"אופטיקה אולטרה מהירה",
            "id":"118136",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"מצב מוצק למוסמכים",
            "id":"118138",
            "programs":[

            ]
        }
    ];

    var mathmatics = [
        {
            "credit_points":0.0,
            "name":"השלמות מתמטיקה",
            "id":"103015",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 1",
            "id":"104003",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2",
            "id":"104004",
            "programs":[

            ]
        },
        {
            "credit_points":5.5,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2ת'",
            "id":"104013",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"אלגברה 1\/מורחב",
            "id":"104016",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 1נ'",
            "id":"104017",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 1מ'",
            "id":"104018",
            "programs":[

            ]
        },
        {
            "credit_points":4.5,
            "name":"אלגברה ליניארית מ'",
            "id":"104019",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2נ'",
            "id":"104020",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"חשבון דיפרנציאלי ואינטגרלי 2מ'",
            "id":"104022",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"מבוא למשוואות דיפרנציאליות חלקיות",
            "id":"104030",
            "programs":[

            ]
        },
        {
            "credit_points":5.5,
            "name":"חשבון אינפיניטסימלי 1מ'",
            "id":"104031",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"חשבון אינפיניטסימלי 2מ'",
            "id":"104032",
            "programs":[

            ]
        },
        {
            "credit_points":2.5,
            "name":"אנליזה וקטורית",
            "id":"104033",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"מבוא להסתברות ח'",
            "id":"104034",
            "programs":[

            ]
        },
        {
            "credit_points":5.0,
            "name":"משוואות דיפ' רגילות ואינפי 2ח'",
            "id":"104035",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"יסודות הגאומטריה",
            "id":"104114",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"תורת הפונקציות 1",
            "id":"104122",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":4
                }
            ]
        },
        {
            "credit_points":2.5,
            "name":"משואות דיפרנציאליות רגילות\/ח",
            "id":"104131",
            "programs":[

            ]
        },
        {
            "credit_points":2.5,
            "name":"אלגברה מודרנית ח",
            "id":"104134",
            "programs":[

            ]
        },
        {
            "credit_points":2.5,
            "name":"משוואות דפרנציאליות רגילות ת'",
            "id":"104135",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
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
            "credit_points":3.0,
            "name":"טופולוגיה",
            "id":"104144",
            "programs":[

            ]
        },
        {
            "credit_points":5.5,
            "name":"אלגברה א'",
            "id":"104166",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":1
                }
            ]
        },
        {
            "credit_points":2.5,
            "name":"מבוא לחבורות",
            "id":"104172",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":3.5,
            "name":"אלגברה ליניארית ב'",
            "id":"104173",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":3.5,
            "name":"אלגברה ליניארית במ'",
            "id":"104174",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"סמינר באנליזה להסמכה 2",
            "id":"104182",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"סמינר באלגברה להסמכה 1",
            "id":"104183",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"סמינר לסטודנ.בהסמכה1",
            "id":"104185",
            "programs":[

            ]
        },
        {
            "credit_points":4.0,
            "name":"מכניקת הרצף",
            "id":"104191",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"מבוא למתמטיקה שמושית",
            "id":"104192",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":5
                }
            ]
        },
        {
            "credit_points":3.5,
            "name":"תורת האופטימיזציה",
            "id":"104193",
            "programs":[

            ]
        },
        {
            "credit_points":5.5,
            "name":"חשבון אינפיניטסימלי 1",
            "id":"104195",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":1
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":1
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"פונקצ' מרוכבות והתמרות אינטגרליות",
            "id":"104221",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"תורת ההסתברות",
            "id":"104222",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":4
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":4
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"מד\"ח וטורי פוריה",
            "id":"104223",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"משוואות דיפרנציאליות חלקיות מ'",
            "id":"104228",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תורת השדות",
            "id":"104274",
            "programs":[

            ]
        },
        {
            "credit_points":3.5,
            "name":"מבוא לאנליזה פונקציונלית",
            "id":"104276",
            "programs":[

            ]
        },
        {
            "credit_points":2.5,
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
            "credit_points":5.0,
            "name":"חשבון אינפי 2",
            "id":"104281",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":4.0,
            "name":"חשבון אינפי 3",
            "id":"104282",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":3
                }
            ]
        },
        {
            "credit_points":3.5,
            "name":"משוואות דיפרנציאליות רגילות א'",
            "id":"104285",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":3
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":4
                }
            ]
        },
        {
            "credit_points":2.5,
            "name":"קומבינטוריקה",
            "id":"104286",
            "programs":[
                {
                    "study_program":"תוכנית תלת שנתית במתמטיקה",
                    "semester":2
                },
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":2
                }
            ]
        },
        {
            "credit_points":3.5,
            "name":"תורת הקבוצות",
            "id":"104290",
            "programs":[
                {
                    "study_program":"מסלול מתמטיקה - מדעי המחשב",
                    "semester":1
                }
            ]
        },
        {
            "credit_points":3.0,
            "name":"לוגיקה מתמטית",
            "id":"106156",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תורת המידה",
            "id":"106378",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"אלגברה מודרנית 1",
            "id":"106380",
            "programs":[

            ]
        },
        {
            "credit_points":4.0,
            "name":"שיטות נומריות במד\"ח",
            "id":"106416",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"תהליכים סטוכסטיים",
            "id":"106429",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"פרקים נבחרים באלגברה",
            "id":"106702",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים בגאומטריה",
            "id":"106803",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים נבחרים בחבורות אלגבריות",
            "id":"106925",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים נבחרים בקומבינטוריקה 2",
            "id":"106928",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים נבחרים בטופולוגיה 2",
            "id":"106933",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים נבחרים באנליזה מתמטית 4",
            "id":"106937",
            "programs":[

            ]
        },
        {
            "credit_points":2.5,
            "name":"אנליזה פונקציונלית להנדסת חשמל",
            "id":"108327",
            "programs":[

            ]
        },
        {
            "credit_points":2.0,
            "name":"סמינר במתמטיקה שימושית 2",
            "id":"196001",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"שיטות אסימפטוטיות 2",
            "id":"198002",
            "programs":[

            ]
        },
        {
            "credit_points":3.0,
            "name":"נושאים נבחרים במתמטיקה שימושית",
            "id":"198008",
            "programs":[

            ]
        }
    ];

  // for (var i in facultyName) {
  //     sendRequest('POST', '/api/2018-spring/course/create', i, function (out) {
  //               console.log(out);
  //           })
  // }
}

window.addEventListener('load', debug, false);
