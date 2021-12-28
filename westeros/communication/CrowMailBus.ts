/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/communication/CrowMailBus.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 1:21:15 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { CrowMailResponder } from "./CrowMailResponder";
import { IMessageResponder } from "./interfaces/IMessageResponder";
import { Message } from "./Message";

export class CrowMailBus {
  responder: CrowMailResponder;
  responders: Array<any>;
  constructor() {
    this.responder = new CrowMailResponder(this);
    this.responders = [];
  }

  public Send(message: Message) {
    if (message.__from == "requestor") {
      process.nextTick(() => this.responder.processMessage(message));
    }
  }

  public Publish(message: Message) {
    for (let i = 0; i < this.responders.length; i++) {
      if (this.responders[i].messageName == message.__messageName) {
        (function (b) {
          process.nextTick(() => b.subscriber.processMessage(message));
        })(this.responders[i]);
      }
    }
  }

  public Subscribe(messageName: string, subscriber: IMessageResponder) {
    this.responders.push({ messageName: messageName, subscriber: subscriber });
  }
}
