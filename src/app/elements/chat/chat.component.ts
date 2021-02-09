import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat, ChatStore } from 'src/app/services/chat.store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userName = 'Not Set';
  @Output() onChatSent = new EventEmitter<Chat>();
  userName$: Observable<string>;
  chats$: Observable<Chat[]>;
  constructor(private store: ChatStore) { }

  ngOnInit(): void {
    this.store.setName(this.userName);
    this.userName$ = this.store.select(s => s.userName);
    this.chats$ = this.store.select(s => s.history);
  }

  addChat(message: string): void {
    const chat = {
      when: new Date().toISOString(),
      content: message,
      who: this.userName
    }
    this.store.addChat(chat);

    this.onChatSent.emit(chat)
  }



}
