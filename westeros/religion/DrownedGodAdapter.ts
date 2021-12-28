/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/religion/DrownedGodAdapter.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:36:51 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { DrownedGod } from "./DrownedGod";
import { HumanSacrifice } from "./HumanSacrifice";
import { IGod } from "./Interfaces/IGod";

export class DrownedGodAdapter implements IGod {
  _drownedGod: DrownedGod;
  constructor() {
    this._drownedGod = new DrownedGod();
  }
  public prayTo() {
    let sacrifice = new HumanSacrifice();
    this._drownedGod.prayTo(sacrifice);
  }
}
