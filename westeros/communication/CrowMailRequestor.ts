/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/communication/CrowMailRequestor.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 1:19:18 pm
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

export class CrowMailRequestor {
  constructor(public bus: CrowMailBus) {}

  public Request() {
    let message = {
      __messageDate: new Date(),
      __from: "requestor",
      __corrolationId: Math.random(),
      __messageName: "FindSquareRoot",
      body: "Hello there. What is the square root of 9?",
    };
    this.bus.Subscribe("SquareRootFound", this);
    this.bus.Send(message);
    console.log("message sent!");
  }

  public processMessage(message: Message) {
    console.log("I got");
    console.dir(message);
  }
}
