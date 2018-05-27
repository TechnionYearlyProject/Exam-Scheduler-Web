import {sendRequest} from "./request";

function debug() {
  var courses = [
    {
      "credit_points": 4.0,
      "name": "מבוא למדעי המחשב",
      "id": "234111",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "מבוא למחשב - שפת סי",
      "id": "234112",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "מבוא למדעי המחשב מ'",
      "id": "234114",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 1
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 1}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 1
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 1}, {
        "study_program": "5b0330b33232de1ca81f78fa",
        "semester": 1
      }, {"study_program": "5b03309d3232de1ca81f78f9", "semester": 1}, {
        "study_program": "5b0330783232de1ca81f78f8",
        "semester": 1
      }],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "מבוא למדעי המחשב ח'",
      "id": "234117",
      "programs": [{"study_program": "5b0330d43232de1ca81f78fc", "semester": 1}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "ארגון ותכנות המחשב",
      "id": "234118",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 2
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 2}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 2
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 2}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 2
      }, {"study_program": "5b0330b33232de1ca81f78fa", "semester": 2}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 2
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 2}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבוא לתכנות מערכות",
      "id": "234122",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 2
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 2}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 2
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 2}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 2
      }, {"study_program": "5b0330b33232de1ca81f78fa", "semester": 2}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 2
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 2}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.5,
      "name": "מערכות הפעלה",
      "id": "234123",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 4
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 4}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 4
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 4}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 5
      }, {"study_program": "5b0330b33232de1ca81f78fa", "semester": 4}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 4
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 4}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "אלגוריתמים נומריים",
      "id": "234125",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 5
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 5}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 6
      }, {"study_program": "5b03309d3232de1ca81f78f9", "semester": 4}, {
        "study_program": "5b0330783232de1ca81f78f8",
        "semester": 7
      }],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "מבוא למחשב - שפת סי אנגלית",
      "id": "234126",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "קומבינטוריקה למדעי המחשב",
      "id": "234141",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 2
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 2}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 2
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 2}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 2
      }, {"study_program": "5b0330b33232de1ca81f78fa", "semester": 2}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 2
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 2}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מתמטיקה דיסקרטית מ'",
      "id": "234144",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מערכות ספרתיות",
      "id": "234145",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 1
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 1}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 1
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 1}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 1
      }, {"study_program": "5b0330b33232de1ca81f78fa", "semester": 1}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 1
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 1}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבני נתונים 1",
      "id": "234218",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 3
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 3}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 3
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 3}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 3
      }, {"study_program": "5b0330b33232de1ca81f78fa", "semester": 3}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 3
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 3}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "אלגוריתמים 1",
      "id": "234247",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 4
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 4}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 4
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 4}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 4
      }, {"study_program": "5b0330b33232de1ca81f78fa", "semester": 4}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 4
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 4}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "תכן לוגי",
      "id": "234262",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 3
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 3}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 3
      }, {"study_program": "5b0330d43232de1ca81f78fc", "semester": 4}, {
        "study_program": "5b03309d3232de1ca81f78f9",
        "semester": 3
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 3}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבנה מחשבים",
      "id": "234267",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 4
      }, {"study_program": "5b0330ea3232de1ca81f78fd", "semester": 4}, {
        "study_program": "5b0330d43232de1ca81f78fc",
        "semester": 4
      }],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 1.0,
      "name": "פרויקט 2 במדעי המחשב",
      "id": "234291",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "לוגיקה ותורת הקבוצות למדעי המחשב",
      "id": "234293",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 3
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 3}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 3
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 3}, {
        "study_program": "5b0330b33232de1ca81f78fa",
        "semester": 3
      }, {"study_program": "5b0330783232de1ca81f78f8", "semester": 3}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "פרויקט ב- וי.אל.אס.אי. א'",
      "id": "234306",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.5,
      "name": "פרויקט שנתי בהנדסת תוכנה-שלב ב'",
      "id": "234312",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט תעשייתי",
      "id": "234313",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "שפות תכנות",
      "id": "234319",
      "programs": [{"study_program": "5b0330ea3232de1ca81f78fd", "semester": 3}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מערכות אחסון מידע",
      "id": "234322",
      "programs": [{
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 5
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 5}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט בגרפיקה ממוחשבת ה'",
      "id": "234326",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "פרויקט בעיבוד וניתוח תמונות",
      "id": "234329",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סדנה בתכנות תחרותי",
      "id": "234900",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "ידע ומשחקים במערכות מבוזרות",
      "id": "236026",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "ניהול פרויקטי תוכנה",
      "id": "236270",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מאיצים חישוביים ומערכות מואצות",
      "id": "236278",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבוא לעיבוד שפות טבעיות",
      "id": "236299",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "שיטות בהנדסת תוכנה",
      "id": "236321",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט בעיבוד נתונים מ'",
      "id": "236323",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "עיבוד תמונות ואותות במחשב",
      "id": "236327",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרוייקט בגרפיקה ממוחשבת מ'",
      "id": "236328",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "עיבוד ספרתי של גאומטריה",
      "id": "236329",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבוא לאופטימיזציה",
      "id": "236330",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "האינטרנט של הדברים - טכנולוגיות",
      "id": "236332",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט באינטרנט של הדברים",
      "id": "236333",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבוא לרשתות מחשבים",
      "id": "236334",
      "programs": [{
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 5
      }, {"study_program": "5b0330ea3232de1ca81f78fd", "semester": 6}, {
        "study_program": "5b0330f83232de1ca81f78fe",
        "semester": 5
      }],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פתרון נומרי של משוואות דיפ.חלקיות",
      "id": "236336",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט בתקשורת מחשבים",
      "id": "236340",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "תורת החישוביות",
      "id": "236343",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 5
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 5}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 5
      }, {"study_program": "5b0330f83232de1ca81f78fe", "semester": 6}, {
        "study_program": "5b0330b33232de1ca81f78fa",
        "semester": 5
      }, {"study_program": "5b03309d3232de1ca81f78f9", "semester": 5}, {
        "study_program": "5b0330783232de1ca81f78f8",
        "semester": 7
      }],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבוא לממשקי אדם-מחשב",
      "id": "236348",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט באבטחת מידע",
      "id": "236349",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "הגנה במערכות מתוכנתות",
      "id": "236350",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "אוטומטים ושפות פורמליות",
      "id": "236353",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 4
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 4}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 4
      }, {"study_program": "5b03309d3232de1ca81f78f9", "semester": 5}, {
        "study_program": "5b0330783232de1ca81f78f8",
        "semester": 4
      }],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים באלגוריתמים מבוזרי",
      "id": "236358",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "תורת הקומפילציה",
      "id": "236360",
      "programs": [{
        "study_program": "5b0330c23232de1ca81f78fb",
        "semester": 5
      }, {"study_program": "5b03310c3232de1ca81f78ff", "semester": 5}, {
        "study_program": "5b0330ea3232de1ca81f78fd",
        "semester": 5
      }, {"study_program": "5b03309d3232de1ca81f78f9", "semester": 6}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מערכות מסד נתונים",
      "id": "236363",
      "programs": [{"study_program": "5b0330f83232de1ca81f78fe", "semester": 4}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט במערכות הפעלה מ'",
      "id": "236366",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט בתכנות מקבילי ומבוזר",
      "id": "236371",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "שיטות הסתברותיות ואלגוריתמים",
      "id": "236374",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "עקרונות ניהול מידע חסר ודאות",
      "id": "236378",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 4.0,
      "name": "פרויקט ב- וי.אל.אס.אי. ב'",
      "id": "236381",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט בחומות אש",
      "id": "236499",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט בבינה מלאכותית",
      "id": "236502",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט תכנות מתקדם במדעי המחשב 1",
      "id": "236503",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט המשך בתוכנה",
      "id": "236504",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "קריפטולוגיה מודרנית",
      "id": "236506",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "ממוש מערכות מסדי נתונים",
      "id": "236510",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "קידוד במערכות אחסון-מידע",
      "id": "236520",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "אלגוריתמים בביולוגיה חישובית",
      "id": "236522",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבוא לקידוד רשת, חסמים ובניות",
      "id": "236525",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט תכנות מתקדם במדעי המחשב 2",
      "id": "236526",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים במדעי המחשב 1",
      "id": "236601",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים במדעי המחשב 2",
      "id": "236602",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים במדעי המחשב 3",
      "id": "236603",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים במדעי המחשב 4",
      "id": "236604",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "נושאים מתקדמים במדעי המחשב 5",
      "id": "236605",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "נושאים מתקדמים במדעי המחשב 6",
      "id": "236606",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "נושאים מתקדמים במדעי המחשב 7",
      "id": "236607",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "נושאים מתקדמים במדעי המחשב 8",
      "id": "236608",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים במדעי המחשב 10",
      "id": "236610",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים במדעי המחשב 11",
      "id": "236611",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים בקריפטולוגיה ה'",
      "id": "236613",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים באלגוריתמים ה'",
      "id": "236620",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתק. בתכנון וניתוח רשתות",
      "id": "236638",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "נושאים מתקדמים באינפורמציה קוונטי",
      "id": "236640",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "נושאים מתקדמים באבטחת מידע ה'+ת'",
      "id": "236653",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "הבטחת איכות תוכנה",
      "id": "236698",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "תיכון תוכנה",
      "id": "236700",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "תכנות מונחה עצמים",
      "id": "236703",
      "programs": [{"study_program": "5b0330ea3232de1ca81f78fd", "semester": 4}],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "נושאים בהוכחה אוטומטית של משפטים",
      "id": "236714",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "גאומטריה חישובית",
      "id": "236719",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט במערכות נבונות",
      "id": "236754",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "מבוא למערכות לומדות",
      "id": "236756",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינר בהנדסת תוכנה",
      "id": "236800",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינר במדעי המחשב 1",
      "id": "236801",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינר במדעי המחשב 2",
      "id": "236802",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינר במדעי המחשב 3",
      "id": "236803",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינר במדעי המחשב 4",
      "id": "236804",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינר בשיטות אימות פורמליות",
      "id": "236814",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינר בביואינפורמטיקה",
      "id": "236818",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט במערכות מחשבים",
      "id": "236828",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 3.0,
      "name": "פרויקט בראיה ממוחשבת",
      "id": "236874",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    },
    {
      "credit_points": 2.0,
      "name": "סמינריון מחקר בקומבינטוריקה ותורת",
      "id": "238902",
      "programs": [],
      "faculty": "5b02cd11585e1409ec3f5e71"
    }
  ];
  for (var i in courses) {
    courses[i].schedule = '5b03f448ac9375130db4d08a';
    sendRequest('POST', '/api/faculty/5b02cd11585e1409ec3f5e71/course/create', courses[i], function (out) {
      console.log(out);
    })
  }
}

window.addEventListener('load', debug, false);