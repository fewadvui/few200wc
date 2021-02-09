import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/services/chat.store';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatHistoryComponent implements OnInit {

  @Input() chats: Chat[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
