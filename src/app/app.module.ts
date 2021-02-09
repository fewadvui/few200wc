import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './elements/chat/chat.component';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { ChatUiComponent } from './components/chat-ui/chat-ui.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
