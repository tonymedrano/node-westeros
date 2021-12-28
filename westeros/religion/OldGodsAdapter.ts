/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/religion/OldGodsAdapter.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:35:40 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IGod } from "./Interfaces/IGod";
import { OldGods } from "./OldGods";
import { Sacrifice } from "./Sacrifice";

export class OldGodsAdapter implements IGod {
  _oldGods: OldGods;
  constructor() {
    this._oldGods = new OldGods();
  }
  public prayTo() {
    let sacrifice = new Sacrifice();
    this._oldGods.prayTo(sacrifice);
  }
}
