
import { dataCourses } from './dataCourses.js';
import { Course } from './course.js';
const coursesTbody: HTMLElement = document.getElementById('courses')!; // Nodo tbody que tiene el id="courses"

function renderCoursesInTable(courses: Course[]): void {
  courses.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.professor}</td>
                           <td>${c.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });

  
function getTotalCredits(courses: Course[]): number
 {
    let totalCredits: number = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
  }
}