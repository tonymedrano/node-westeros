/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/measurement/DragonBarrelCalculator.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:37:45 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 * Using Proxy to provide a placeholder for another object to control access to it.
 */

import { IBarrelCalculator } from "./Interfaces/IBarrelCalculator";
import { BarrelCalculator } from "./BarrelCalculator";

export class DragonBarrelCalculator implements IBarrelCalculator {
  _barrelCalculator: IBarrelCalculator;
  calculateNumberNeeded(volume: number) {
    if (this._barrelCalculator == null)
      this._barrelCalculator = new BarrelCalculator();
    return this._barrelCalculator.calculateNumberNeeded(volume * 0.77);
  }
}
