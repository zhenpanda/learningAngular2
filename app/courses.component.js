System.register(['angular2/core', './course.service', './author.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1, author_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            //Component is a func that takes in an obj
            CoursesComponent = (function () {
                //takes the dep injection of CourseService from providers and creates a method on courses component
                function CoursesComponent(courseService, authorService) {
                    // angular looks for meta data
                    // title: string = "The title of course page";
                    this.title = "The title of course page";
                    //new CourseService()
                    this.courses = courseService.getCourses();
                    this.authors = authorService.getAuthors();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n  <h2>Courses</h2>\n  {{title}}\n  <input type=\"text\" autoGrow />\n  <ul>\n    <li *ngFor=\"#course of courses\">\n    {{course}}\n    </li>\n  </ul>\n  <ul>\n    <li *ngFor=\"#author of authors\">\n    {{author}}\n    </li>\n  </ul>\n  ",
                        providers: [course_service_1.CourseService, author_service_1.AuthorService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService, author_service_1.AuthorService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map