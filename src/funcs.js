function make_calendar(start_param, end_param, moed) {
    function showLock(x) { x.style.visibility = 'hidden'; }
    var start = start_param;
    var end = end_param;
    var map_a = new Map();
    if (start.getDay() == 6) {
        start.setDate(start.getDate() + 1);
    }
    if (end.getDay() == 6) {
        end.setDate(end.getDate() - 1);
    }
    var schedule = document.getElementById("schedule_" + moed);
    schedule.innerHTML = '    <div class="row">\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; padding-right: 5px">א\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ב\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ג\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ד\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ה\'</div>\n' +
        '      <div class="col" style="background-color: #CFD8DC; border: 1px solid #CFD8DC; border-right: 0px; padding-right: 5px">ו\'</div>\n' +
        '    </div>';
    var current = new Date(start.getTime() - start.getDay()*86400000);
    var row = document.createElement("div");
    row.className = "row";
    row.style = "height: 113px";
    while (current < start) {
        var day = document.createElement("div");
        day.className = "col day";
        if (current.getDay() == 0) {
            day.style = "font-size: 12px; text-align: left; border: 1px solid #CFD8DC; border-top: 0px; padding: 1px; width: 70px;"
        } else {
            day.style = "font-size: 12px; text-align: left; border: 1px solid #CFD8DC; border-right:0px; border-top: 0px; padding: 1px; width: 70px;"
        }
        day.style.backgroundColor = "#ECEFF1";
        day.innerHTML = "<span style='float: left;'>" + current.getDate().toString().padStart(2,'0') + '/' + (current.getMonth()+1).toString().padStart(2,'0') + "</span>";
        row.appendChild(day);
        current.setDate(current.getDate() + 1);
    }
    var counter = 0;
    for (current = start; current <= end; current.setDate(current.getDate() + 1)) {
        if (current.getDay() == 6) {
            continue;
        }
        var day = document.createElement("div");
        var id = "moed_a_day_" + counter;
        counter += 1;
        day.id = id;
        map_a.set(current,id);
        day.oncontextmenu = function(){
            var test = document.createElement("div");
            test.className = "test";
            test.innerHTML = "אלגוריתמים";
            this.appendChild(test);
        };
        day.onmouseover= function(){
            this.childNodes[1].style.visibility = "visible";
        };
        day.onmouseout= function(){
            if (this.getAttribute("active") == 1)
                this.childNodes[1].style.visibility = "hidden";
        };
        day.className = "col day";
        if (current.getDay() == 0) {
            day.style = "font-size: 12px; text-align: left; 2px; border: 1px solid #CFD8DC; border-top: 0px; padding: 1px;"
        } else {
            day.style = "font-size: 12px; text-align: left; 2px; border: 1px solid #CFD8DC; border-right:0px; border-top: 0px; padding: 1px;"
        }
        var lock = document.createElement("span");
        lock.style = "float: right; padding:0px; padding-right:1px; visibility: hidden";
        var img = document.createElement("i");
        img.className = 'fas fa-lock';
        lock.appendChild(img);
        lock.onclick = function(){
            var parent =  this.parentElement;
            if (parent.getAttribute('active') == 1) {
                parent.style.backgroundColor="#ECEFF1";
                this.visibility = "visible";
                parent.setAttribute('active', 0);
            } else {
                parent.style.backgroundColor="white";
                this.visibility = "hidden";
                parent.setAttribute('active', 1);
            }
        };
        day.innerHTML = "<span style='float: left;'>" + current.getDate().toString().padStart(2,'0') + '/' + (current.getMonth()+1).toString().padStart(2,'0') + "</span>";
        day.appendChild(lock)
        day.appendChild(document.createElement("br"));
        day.setAttribute('active','1');
        row.appendChild(day);
        if (current.getDay() == 5) {
            schedule.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
            row.style = "height: 113px";
        }
    }
    while (current.getDay() <= 5) {
        var day = document.createElement("div");
        day.className = "col day";
        if (current.getDay() == 0) {
            day.style = "font-size: 12px; text-align: left; 2px; border: 1px solid #CFD8DC; border-top: 0px; padding: 1px;"
        } else {
            day.style = "font-size: 12px; text-align: left; 2px; border: 1px solid #CFD8DC; border-right:0px; border-top: 0px; padding: 1px;"
        }    day.innerHTML = current.getDate().toString().padStart(2,"0") + '/' + (current.getMonth()+1).toString().padStart(2,"0");
        row.appendChild(day);
        day.style.backgroundColor = "#ECEFF1"
        if (current.getDay() == 5) {
            schedule.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
            row.style = "height: 113px";
        }
        current.setDate(current.getDate() + 1);
    }
}