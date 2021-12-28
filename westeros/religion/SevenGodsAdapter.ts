/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/religion/SevenGodsAdapter.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:37:28 pm
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
import { PrayerPurposeProvider } from "./PrayerPurposeProvider";
import { SevenGods } from "./SevenGods";

export class SevenGodsAdapter implements IGod {
  _sevenGods: SevenGods;
  public prayerPurposeProvider = new PrayerPurposeProvider();
  constructor() {
    this._sevenGods = new SevenGods();
  }
  public prayTo() {
    this._sevenGods.prayTo(this.prayerPurposeProvider.GetPurpose());
  }
}
