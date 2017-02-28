import {Component} from "@angular/core";
import { Message} from "./message.model";

@Component({
    selector :'app-message-list',
    template :`
    <div class="col-md-8 col-md-offset-2">
        <app-message
                    [message]="contentMessage"
                    (editClicked)="contentMessage.content = $event"
                    *ngFor = "let contentMessage of contentMessages"></app-message>
    </div>
`
})
export class MessageListComponent {
    contentMessages : Message[] = [
        new Message('Hello World', 'Kevin'),
        new Message('Hello Kevin', 'Angela'),
        new Message('Love Together!', 'Angela')
    ];
}