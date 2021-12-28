/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/court/Spy.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:07:36 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class Spy {
  _partiesToNotify: any;
  _painKillers: any;
  constructor() {
    this._partiesToNotify = [];
  }
  public Subscribe(subscriber: any) {
    this._partiesToNotify.push(subscriber);
  }

  public Unsubscribe(subscriber: any) {
    this._partiesToNotify.remove(subscriber);
  }

  SetPainKillers(painKillers: any) {
    this._painKillers = painKillers;
    for (let i = 0; i < this._partiesToNotify.length; i++) {
      this._partiesToNotify[i](painKillers);
    }
  }
}
