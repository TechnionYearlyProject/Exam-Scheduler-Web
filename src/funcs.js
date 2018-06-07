function make_calendar(start, end, moed) {
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
    row.style = "height: 113px";
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
            day.onmouseover = function () {
                this.childNodes[1].style.visibility = "visible";
            };
            day.onmouseout = function () {
                if (this.getAttribute("active") == 1)
                    this.childNodes[1].style.visibility = "hidden";
            };
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
                } else {
                    parent.style.backgroundColor = "white";
                    this.visibility = "hidden";
                    parent.setAttribute('active', 1);
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
            row.style = "height: 113px";
        }
    }
    return map;
}