/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/communication/BringTroopsCommand.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:56:13 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { LordInstructions } from "./LordInstructions";

export class BringTroopsCommand {
  _location: string;
  _numberOfTroops: number;
  _when: Date;
  constructor(location: string, numberOfTroops: number, when: Date) {
    this._location = location;
    this._numberOfTroops = numberOfTroops;
    this._when = when;
  }

  public Execute() {
    var receiver = new LordInstructions();
    receiver.BringTroops(this._location, this._numberOfTroops, this._when);
  }
}
