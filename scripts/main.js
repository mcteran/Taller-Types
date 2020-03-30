import { dataCourses } from './dataCourses.js';
var coursesTbody = document.getElementById('courses'); // Nodo tbody que tiene el id="courses"
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    courses.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + c.name + "</td>\n                           <td>" + c.professor + "</td>\n                           <td>" + c.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
renderCoursesInTable(dataCourses);
getTotalCredits(dataCourses);
