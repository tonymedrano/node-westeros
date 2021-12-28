/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/food/BasicBeer.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 10:56:26 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class BasicBeer {
  public Create() {
    this.AddIngredients();
    this.Stir();
    this.Ferment();
    this.Test();
    if (this.TestingPassed()) {
      this.Distribute();
    }
  }

  AddIngredients() {
    throw "Add ingredients needs to be implemented";
  }

  Stir() {
    //stir 15 times with a wooden spoon
  }

  Ferment() {
    //let stand for 30 days
  }

  Test() {
    //draw off a cup of beer and taste it
  }

  TestingPassed(): boolean {
    throw "Conditions to pass a test must be implemented";
  }

  Distribute() {
    //place beer in 50L casks
  }
}
