/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/travel/Walk.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:45:47 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { ITravelMethod } from "./Interfaces/ITravelMethod";
import { TravelResult } from "./TravelResult";

export class Walk implements ITravelMethod {
  public Travel(source: string, destination: string) {
    return new TravelResult(150, 0.55, 0);
  }
}
