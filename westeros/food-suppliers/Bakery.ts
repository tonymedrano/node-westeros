/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/food-suppliers/Bakery.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:47:48 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Bread } from "./Bread";

export class Bakery {
  breads: Bread[];
  requiredBreads: string[];
  constructor() {
    this.requiredBreads = [];
  }

  public orderBreadType(breadType: string) {
    this.requiredBreads.push(breadType);
  }

  public pickUpBread(breadType: string): Bread {
    console.log("Picup of bread " + breadType + " requested");
    if (!this.breads) {
      this.createBreads();
    }
    for (var i = 0; i < this.breads.length; i++) {
      if (this.breads[i].breadType == breadType) return this.breads[i];
    }
  }

  createBreads() {
    this.breads = [];
    for (var i = 0; i < this.requiredBreads.length; i++) {
      this.breads.push(new Bread(this.requiredBreads[i]));
    }
  }
}
