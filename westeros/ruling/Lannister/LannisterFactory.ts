/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/ruling/LannisterFactory.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 11:01:09 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IHandOfTheKing } from "../Interfaces/IHandOfTheKing";
import { IKing } from "../Interfaces/IKing";
import { IRulingFamilyAbstractFactory } from "../Interfaces/IRulingFamilyAbstractFactory";
import { KingJoffery } from "./KingJoffery";
import { LordTywin } from "./LordTywin";

export class LannisterFactory implements IRulingFamilyAbstractFactory {
  getKing(): IKing {
    return new KingJoffery();
  }
  getHandOfTheKing(): IHandOfTheKing {
    return new LordTywin();
  }
  static create(): IRulingFamilyAbstractFactory {
    return new LannisterFactory();
  }
}
