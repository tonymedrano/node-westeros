/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/army/IfExample.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:06:24 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Knight } from "./Knight";
import { FootSoldier } from "./FootSoldier";
import { Lord } from "./Lord";
import { Archer } from "./Archer";

export class IfExample {
  Execute() {
    var collection = [];
    collection.push(new Knight());
    collection.push(new FootSoldier());
    collection.push(new Lord());
    collection.push(new Archer());

    for (let i = 0; i < collection.length; i++) {
      if (collection[i]._type == "Knight")
        collection[i].printName();
      else console.log("No match");
    }
  }
}
