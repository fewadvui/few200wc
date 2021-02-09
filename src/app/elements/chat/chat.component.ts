import { Component, Input, OnInit } from '@angular/core';
import { ChatStore } from 'src/app/services/chat.store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userName = 'Not Set';
  constructor(private store: ChatStore) { }

  ngOnInit(): void {
    this.store.setName(this.userName);
  }

  addChat(message: string): void {
    this.store.addChat({
      when: new Date().toISOString(),
      content: message,
      who: this.userName
    });
  }



}
