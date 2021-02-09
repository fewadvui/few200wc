import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent implements OnInit {

  @Output() onChatSent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendChat(messageEl: HTMLTextAreaElement): void {
    this.onChatSent.emit(messageEl.value);
    messageEl.value = '';
    messageEl.focus();
  }


}
