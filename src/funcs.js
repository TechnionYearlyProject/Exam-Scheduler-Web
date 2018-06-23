var occupied = {};
var changes_root_key = "local_course_changes";

function faculty_name_to_id(name) {
    let faculties_dict = JSON.parse(localStorage.getItem('faculties_dict'));
    for (let key in faculties_dict) {
        if (faculties_dict[key]['name'] == name) {
            let k = key;
            return k;
        }
    }
    return "";
}

function save_changes_to_local(id, field, value) {
    let changes = JSON.parse(localStorage.getItem(changes_root_key)) || {};
    if (!changes.hasOwnProperty(id)){
        changes[id] = {};
    }
    changes[id][field] = value;
    localStorage.setItem(changes_root_key, JSON.stringify(changes));

};
function popup_modal(type, text, func) {
    var title = document.getElementById("alert_title");
    var body = document.getElementById("alert_body");
    var icon = document.getElementById("alert_icon");
    var buttons = document.getElementById("alert_buttons");
    body.innerHTML = text;
    if (type == 'ERROR') {
        title.innerHTML = 'שגיאה';
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#dc3545';
        buttons.innerHTML = '<button type="button" class="btn btn-danger" style="width: 80px; margin-left: inherit;" data-dismiss="modal">אישור</button>';
    }
    if (type == 'INFO') {
        title.innerHTML = 'מידע';
        icon.innerHTML = '<i class="fas fa-info-circle"></i>';
        icon.style.color = '#ffc107';
        buttons.innerHTML = '<button type="button" class="btn btn-warning" style="width: 80px; margin-left: inherit; color: white" data-dismiss="modal">אישור</button>';
    }
    if (type == 'CONF') {
        title.innerHTML = 'אישור';
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#17a2b8';
        buttons.innerHTML = '<button type="button" class="btn btn-info" data-dismiss="modal" style="width: 80px;">ביטול</button>\n' +
            '<button type="button" id="alert_func" class="btn btn-info" data-dismiss="modal" style="width: 80px; margin-right:10px; margin-left: inherit;">אישור</button>';
    }
    $('#alert_modal').modal();
    if (type == 'CONF') {
        var okay = document.getElementById('alert_func');
        okay.onclick = func;
    }
}




function popover_comment(elem_id, semester, moed, course_id) {
    var test = document.getElementById(elem_id);
    test.setAttribute("data-toggle", "popover");
    var input = document.getElementById("popover_input");
    var popover = document.createElement("div");
    popover.id = "popover_" + course_id;
    popover.innerHTML = '    <div class = "row">\n' +
        '        <div class="col-9" style="padding-left: 0px; padding-right: 11px"><textarea id="popover_input_' + course_id + '" rows = "2" type="text" style="overflow-x: hidden !important; resize: none;  font-size: 13px" class="form-control" placeholder="שליחת הערה"></textarea></div>\n' +
        '        <div class="col-3" style="padding-left: 11px; padding-right: 7px"><button id="popover_button_' + course_id + '" class="btn btn-secondary" style=" font-size: 13px; height: 100%; width: 100%;"><i class="fas fa-flag"></i></button></div>\n' +
        '    </div>';
    $('#' + elem_id).popover({
        trigger: 'focus',
        placement: 'right',
        html:true,
        content: popover
    });

}


function get_course_entry (course_id) {
    var courses = JSON.parse(localStorage.getItem("courses_dict"));
    for (var i in courses) {
        if (courses[i]["id"] == course_id)
            return courses[i];
    }
}

function create_test(target, elem_type, text, course_id, class_name, moed) {
    var test = document.createElement(elem_type);
    test.className += class_name;
    test.innerHTML = text;
    test.draggable = true;
    test.id = "exam_for_" + moed + "_" + course_id;
    test.setAttribute("test_id", moed + "_" + course_id);
    var color = "black";
    if (course_id.startsWith("234")){
        color = "#26A69A";
    } else if (course_id.startsWith("104")){
        color = "#EF5350";
    } else if (course_id.startsWith("094")) {
        color = "#FFEB3B";
    } else if (course_id.startsWith("236")) {
        color = "#9CCC65";
    }
    test.style.backgroundColor = color;
    test.ondragstart = function(ev) {
        $('#' + test.id).popover("hide");
        $('#' + test.id).tooltip("hide");
        var test2 = document.createElement("label");
        test2.className = "test_tooltip";
        test2.innerHTML = text;
        test2.style.backgroundColor = color;
        test2.style.position = 'absolute';
        test2.style.left = '0px';
        test2.style.top = '0px';
        test2.id = 'test_tooltip_' + course_id;
        test2.style.zIndex = '-1';
        document.body.appendChild(test2);
        ev.dataTransfer.setDragImage(test2, 0, 0);
        ev.dataTransfer.setData("test_drag", course_id + "|" + test.parentNode.id);
    };
    target.appendChild(test);
    $('#' + test.id).tooltip({
        trigger: 'hover',
        placement: 'left',
        title:  text
    });
    return test;

}

function make_calendar(start, end, moed) {
    occupied = {};
    var schedule = document.getElementById("schedule_" + moed);
    schedule.innerHTML = '    <div class="row">\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; padding-right: 5px">א\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ב\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ג\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ד\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ה\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ו\'</div>\n' +
        '    </div>';
    var map = new Map();
    if (start.getDay() == 6) {
        start.setDate(start.getDate() + 1);
    }
    if (end.getDay() == 6) {
        end.setDate(end.getDate() - 1);
    }
    var cal_start = new Date(start.getTime() - start.getDay()*86400000);
    var cal_end = new Date(cal_start.getTime() + 34*86400000);
    if (cal_end < end)
        cal_end.setTime(end.getTime() + (6 - end.getDay()) * 86400000);
    var row = document.createElement("div");
    row.className = "row";
    row.style = "min-height: 110px";
    var counter = 0;
    for (current = cal_start; current <= cal_end; current.setDate(current.getDate() + 1)) {
        if (current.getDay() == 6) {
            continue;
        }
        var day = document.createElement("div");
        day.className = "col day";
        day.innerHTML = "<span style='float: left;'>" + current.getDate().toString().padStart(2, '0') + '/' + (current.getMonth() + 1).toString().padStart(2, '0') + "</span>";
        if (current.getDay() == 0) {
            day.style = "font-size: 12px; text-align: left; 2px; border: 1px solid #CFD8DC; border-top: 0px; padding: 1px;"
        } else {
            day.style = "font-size: 12px; text-align: left; 2px; border: 1px solid #CFD8DC; border-right:0px; border-top: 0px; padding: 1px;"
        }
        if (current >= start && current <= end) {
            var id = "moed_" + moed + "_day_" + counter;
            counter += 1;
            day.id = id;
            map.set(current, id);
            day.setAttribute("date", current);
            day.onmouseover = function () {
                this.childNodes[1].style.visibility = "visible";
            };
            day.onmouseout = function () {
                if (this.getAttribute("active") == 1)
                    this.childNodes[1].style.visibility = "hidden";
            };
            day.ondrop = function (ev) {
                ev.preventDefault();
                if (ev.target.className != "col day")
                    return;
                if (this.getAttribute('active') == 0) {
                    return;
                }
                this.childNodes[1].style.visibility = "hidden";
                var moed = day.parentNode;
                while (!moed.hasAttribute("moed"))
                    moed = moed.parentNode;
                var course_id = ev.dataTransfer.getData("list_drag");
                let changes = JSON.parse(localStorage.getItem('local_course_changes'));
                if (course_id != "" && changes[course_id] != undefined)
                {
                    if (changes[course_id][moed.getAttribute("moed") + "_constraint"] != undefined)
                    {
                        popup_modal("ERROR", 'המבחן כבר קיים במועד זה', null);
                        return;
                    }
                }
                if (course_id == "") //dragged from day
                {
                    str = ev.dataTransfer.getData("test_drag");
                    var [temp, day_dragged_id] = str.split("|");
                    course_id = temp;
                    var day_dragged = document.getElementById(day_dragged_id);
                    var moed_dragged = day_dragged.parentNode;
                    while (!moed_dragged.hasAttribute("moed"))
                        moed_dragged = moed_dragged.parentNode;
                    if (moed.getAttribute("moed") != moed_dragged.getAttribute("moed"))
                    {
                        popup_modal("ERROR", 'לא ניתן להעביר מבחנים בין מועדים', null);
                        return;
                    }
                    day_dragged.childNodes[1].style.visibility = "hidden";
                    for (var i in day_dragged.childNodes){
                        var child = day_dragged.childNodes[i];
                        if (child.className == "test")
                            if (child.getAttribute("test_id") == moed.getAttribute("moed") + "_" + course_id)
                                day_dragged.removeChild(child);
                    }
                    $("#exam_for_moed_" + moed.getAttribute("moed") + "_" + course_id).remove();
                }
                var entry = get_course_entry(course_id);
                var test = create_test(ev.target, "div", entry["name"], course_id, "test", "moed_" + moed.getAttribute("moed"));
                let constraint = ev.target.getAttribute("date");
                save_changes_to_local(course_id, moed.getAttribute("moed") + "_constraint", constraint);
                popover_comment(test.id, localStorage.getItem('semester_name'), moed.getAttribute("moed"), entry["id"]);
                test.ondblclick = function () {
                    $('#' + test.id).popover("show");
                    var button = document.getElementById("popover_button_"+entry["id"]);
                    var input = document.getElementById("popover_input_"+entry["id"]);
                    input.value = "";
                    button.onclick = function() {
                        var event = new CustomEvent(
                            "send_msg",
                            {
                                detail: {
                                    message: "Hello World!",
                                    time: new Date(),
                                },
                                bubbles: true,
                                cancelable: true
                            }
                        );
                        localStorage.setItem("popover_data",JSON.stringify({
                            "msg" : input.value,
                            "semester" : localStorage.getItem('semester_name'),
                            "moed" : moed.getAttribute("moed"),
                            "course_id" : entry["id"]
                        }));
                        document.getElementById("popover_input_"+entry["id"]).dispatchEvent(event);

                    };


                }
            };
            day.ondragover = function (ev) {
                ev.preventDefault();
            };
            day.oncontextmenu = function (ev) {

            }
            var lock = document.createElement("span");
            lock.style = "float: right; padding:0px; padding-right:1px; visibility: hidden";
            var img = document.createElement("i");
            img.className = 'fas fa-lock';
            lock.appendChild(img);
            lock.onclick = function () {
                var parent = this.parentElement;
                if (parent.getAttribute('active') == 1) {
                    parent.style.backgroundColor = "#ECEFF1";
                    this.visibility = "visible";
                    parent.setAttribute('active', 0);
                    let children = parent.childNodes;
                    for (let i = children.length - 1; i >= 0; i--) {
                        console.log(children[i]);
                        if (children[i].className == 'test') {
                            parent.removeChild(children[i]);
                        }
                    }
                    occupied[parent.id] = 1;
                } else {
                    parent.style.backgroundColor = "white";
                    this.visibility = "hidden";
                    parent.setAttribute('active', 1);
                    delete occupied[parent.id];
                }
            };
            day.appendChild(lock)
            day.appendChild(document.createElement("br"));
            day.setAttribute('active', '1');
        } else {
            day.style.backgroundColor = "#ECEFF1"
        }
        row.appendChild(day);
        if (current.getDay() == 5) {
            schedule.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
            row.style = "min-height: 110px";
        }
    }
    return map;
}