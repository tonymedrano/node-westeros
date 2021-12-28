/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/army/Interfaces/IVisitor.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:03:28 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IMemberOfArmy } from "./IMemberOfArmy";

export interface IVisitor {
  visit(memberOfArmy: IMemberOfArmy): void;
}
