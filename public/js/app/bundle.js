var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            // message class constructor
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ["angular2/core", "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            // message component template
            MessageComponent = (function () {
                function MessageComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n    {{ message.content }}\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_ts_1, message_ts_1;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_ts_1_1) {
                message_component_ts_1 = message_component_ts_1_1;
            },
            function (message_ts_1_1) {
                message_ts_1 = message_ts_1_1;
            }],
        execute: function() {
            // [message] is property binding, loads in data from appComponent into Message Component
            AppComponent = (function () {
                function AppComponent() {
                    this.message = new message_ts_1.Message('A new message, really???', null, 'Max');
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello World!</h1>\n        <h2>Sup</h2>\n        <article>\n          <div class = \"brn\">\n            <my-message [message]=\"message\"></my-message>\n          </div>\n        </article>\n    ",
                        //<input type="text" [(ngModel)] = "message.content">
                        // style within component
                        styles: ["\n      .brn {\n        color: brown;\n      }\n      "],
                        // directives meta data same as component
                        directives: [message_component_ts_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                // email is a part of the class
                function User(email, password, firstName, lastName) {
                    this.email = email;
                }
                return User;
            }());
            exports_5("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQSw0QkFBNEI7WUFDNUI7Z0JBTUUsaUJBQWEsT0FBZSxFQUFFLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxNQUFlO29CQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDdkIsQ0FBQztnQkFDSCxjQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCw2QkFZQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNURCw2QkFBNkI7WUFRN0I7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFEQztvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQVhWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxpQ0FFVDtxQkFDRixDQUFDOztvQ0FBQTtnQkFPRix1QkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsK0NBS0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDVkQsd0ZBQXdGO1lBc0J4RjtnQkFBQTtvQkFDRSxZQUFPLEdBQVksSUFBSSxvQkFBTyxDQUFDLDBCQUEwQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkF2QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLG9OQVFUO3dCQUNELHFEQUFxRDt3QkFDckQseUJBQXlCO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyx3REFJTixDQUFDO3dCQUNGLHlDQUF5Qzt3QkFDekMsVUFBVSxFQUFFLENBQUMsdUNBQWdCLENBQUM7cUJBQ25DLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQzNCRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNKeEI7Z0JBQ0UsK0JBQStCO2dCQUMvQixjQUFtQixLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFrQixFQUFFLFFBQWlCO29CQUF0RSxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUVoQyxDQUFDO2dCQUNILFdBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVCQUtDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vbGVhcm5pbmdBbmd1bGFyMi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtZXNzYWdlIGNsYXNzIGNvbnN0cnVjdG9yXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZD86IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZykge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgaW5wdXQgZnJvbSBjb3JlXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbi8vIG1lc3NhZ2UgY29tcG9uZW50IHRlbXBsYXRlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICB7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQgIHtcbiAgLy8gbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdUaGUgY29udGVudCcsIG51bGwsICdNYXgnKTtcblxuICAvLyBjcmVhdGUgYSBuZXcgTWVzc2FnZSBPYmogdGhhdCBpcyBiaW5kLWFibGVcbiAgQElucHV0KCkgbWVzc2FnZTpNZXNzYWdlO1xufVxuIiwiLy8gbWFpbiBjb21wb25lbnQgdGhhdCBjb250YWlucyBldmVyeXRoaW5nXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vLyBpbXBvcnQgb3RoZXIgY29tcG9uZW50IGludG8gYXBwXG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQudHMnO1xuLy8gaW1wb3J0IG1lc3NhZ2UgY29uc3RydWN0b3JcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UudHMnO1xuXG4vLyBbbWVzc2FnZV0gaXMgcHJvcGVydHkgYmluZGluZywgbG9hZHMgaW4gZGF0YSBmcm9tIGFwcENvbXBvbmVudCBpbnRvIE1lc3NhZ2UgQ29tcG9uZW50XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPkhlbGxvIFdvcmxkITwvaDE+XG4gICAgICAgIDxoMj5TdXA8L2gyPlxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJicm5cIj5cbiAgICAgICAgICAgIDxteS1tZXNzYWdlIFttZXNzYWdlXT1cIm1lc3NhZ2VcIj48L215LW1lc3NhZ2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIC8vPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV0gPSBcIm1lc3NhZ2UuY29udGVudFwiPlxuICAgIC8vIHN0eWxlIHdpdGhpbiBjb21wb25lbnRcbiAgICBzdHlsZXM6IFtgXG4gICAgICAuYnJuIHtcbiAgICAgICAgY29sb3I6IGJyb3duO1xuICAgICAgfVxuICAgICAgYF0sXG4gICAgICAvLyBkaXJlY3RpdmVzIG1ldGEgZGF0YSBzYW1lIGFzIGNvbXBvbmVudFxuICAgICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZSwgcmVhbGx5Pz8/JywgbnVsbCwgJ01heCcpO1xufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAvLyBlbWFpbCBpcyBhIHBhcnQgb2YgdGhlIGNsYXNzXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBmaXJzdE5hbWU/OiBzdHJpbmcsIGxhc3ROYW1lPzogc3RyaW5nKSB7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
