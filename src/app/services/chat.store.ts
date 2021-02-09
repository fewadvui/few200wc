import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

export interface ChatState {
  history: Chat[],
  userName: string;
}

export interface Chat {
  when: string;
  content: string;
  who: string;
}


@Injectable()
export class ChatStore extends ComponentStore<ChatState> {

  constructor() {
    super({
      history: [],
      userName: null
    })
  }

  readonly setName = this.updater((state, value: string) => ({
    ...state,
    userName: value
  }));

  readonly addChat = this.updater((state, value: Chat) => ({
    ...state,
    history: [value, ...state.history]
  }))
}
