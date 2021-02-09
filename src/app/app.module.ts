import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './elements/chat/chat.component';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { ChatUiComponent } from './components/chat-ui/chat-ui.component';
import { ChatStore } from './services/chat.store';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatHistoryComponent,
    ChatUiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
