/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/measurement/BarrelCalculator.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:37:20 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IBarrelCalculator } from "./Interfaces/IBarrelCalculator";

export class BarrelCalculator implements IBarrelCalculator {
  calculateNumberNeeded(volume: number) {
    return Math.ceil(volume / 157);
  }
}
