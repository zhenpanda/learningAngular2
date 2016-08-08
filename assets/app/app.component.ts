// main component that contains everything
import {Component} from 'angular2/core';
// import other component into app
import {MessageComponent} from './messages/message.component.ts';
// import message constructor
import { Message } from './messages/message.ts';

// [message] is property binding, loads in data from appComponent into Message Component
@Component({
    selector: 'my-app',
    template: `
        <h1>Hello World!</h1>
        <h2>Sup</h2>
        <article>
          <div class = "brn">
            <my-message [message]="message"></my-message>
          </div>
        </article>
    `,
    //<input type="text" [(ngModel)] = "message.content">
    // style within component
    styles: [`
      .brn {
        color: brown;
      }
      `],
      // directives meta data same as component
      directives: [MessageComponent]
})
export class AppComponent {
  message: Message = new Message('A new message, really???', null, 'Max');
}
