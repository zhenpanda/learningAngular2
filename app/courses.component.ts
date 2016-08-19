// import the angualr declarator
import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AuthorService} from './author.service';

import {AutoGrowDirective} from './auto-grow.directive';

//Component is a func that takes in an obj
@Component({
  selector: 'courses',
  template: `
  <h2>Courses</h2>
  {{title}}
  <input type="text" autoGrow />
  <ul>
    <li *ngFor="#course of courses">
    {{course}}
    </li>
  </ul>
  <ul>
    <li *ngFor="#author of authors">
    {{author}}
    </li>
  </ul>
  `,
  providers: [CourseService,AuthorService],
  directives: [AutoGrowDirective]
})

export class CoursesComponent {
  // angular looks for meta data

  // title: string = "The title of course page";
  title = "The title of course page";
  // using interpolation for title
  courses;
  authors;

  //takes the dep injection of CourseService from providers and creates a method on courses component
  constructor(courseService: CourseService, authorService: AuthorService) {
    //new CourseService()
    this.courses = courseService.getCourses();
    this.authors = authorService.getAuthors();
  }
}
