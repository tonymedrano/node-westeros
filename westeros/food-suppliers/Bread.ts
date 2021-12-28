/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/food-suppliers/Bread.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:48:22 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class Bread {
  constructor(public breadType: string) {
    //some complex, time consuming operation
    console.log("Bread " + breadType + " created.");
  }
}
