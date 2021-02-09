import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './elements/chat/chat.component';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { ChatUiComponent } from './components/chat-ui/chat-ui.component';
import { ChatStore } from './services/chat.store';
import { createCustomElement } from '@angular/elements';

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
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(ChatComponent, { injector: this.injector });
    customElements.define('pgr-chat', el); // <pgr-chat></pgr-chat>
  }
}
