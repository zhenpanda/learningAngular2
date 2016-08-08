// import input from core
import { Component, Input } from "angular2/core";
import { Message } from "./message";

// message component template
@Component({
  selector: 'my-message',
  template: `
    {{ message.content }}
  `
})

export class MessageComponent  {
  // message: Message = new Message('The content', null, 'Max');

  // create a new Message Obj that is bind-able
  @Input() message:Message;
}
