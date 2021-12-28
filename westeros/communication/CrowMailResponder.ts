/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/communication/CrowMailResponder.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 1:19:48 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { CrowMailBus } from "./CrowMailBus";
import { Message } from "./Message";

export class CrowMailResponder {
  constructor(public bus: CrowMailBus) {}
  processMessage(message: Message) {
    let response = {
      __messageDate: new Date(),
      __from: "responder",
      __corrolationId: message.__corrolationId,
      __messageName: "SquareRootFound",
      body: "Pretty sure it is 3.",
    };
    this.bus.Publish(response);
    console.log("Reply published");
  }
}
