/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/army/Archer.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:05:34 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IMemberOfArmy } from "./Interfaces/IMemberOfArmy";
import { IVisitor } from "./Interfaces/IVisitor";

export class Archer implements IMemberOfArmy {
  _type = "Archer";
  printName() {
    console.log("Archer");
  }
  visit(visitor: IVisitor) {
    visitor.visit(this);
  }
}
