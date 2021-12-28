/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/food/RaspberryBeer.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 10:57:44 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 * Using template method pattern
 */

import { BasicBeer } from "./BasicBeer";

export class RaspberryBeer extends BasicBeer {
  AddIngredients() {
    //add ingredients, probably including raspberries
  }

  TestingPassed(): boolean {
      return true;
    //beer must be reddish and taste of raspberries
  }
}
