/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/ruling/interfaces/IRulingFamilyAbstractFactory.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 11:04:51 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IKing } from "./IKing";
import { IHandOfTheKing } from "./IHandOfTheKing";

export interface IRulingFamilyAbstractFactory {
  getKing(): IKing;
  getHandOfTheKing(): IHandOfTheKing;
}
