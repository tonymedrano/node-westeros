/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/ruling/TargaryenFactory.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 11:02:12 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IRulingFamilyAbstractFactory } from "../Interfaces/IRulingFamilyAbstractFactory";
import { IKing } from "../Interfaces/IKing";
import { KingAerys } from "./KingAerys";
import { IHandOfTheKing } from "../Interfaces/IHandOfTheKing";
import { LordConnington } from "./LordConnington";

export class TargaryenFactory implements IRulingFamilyAbstractFactory {
  getKing(): IKing {
    return new KingAerys();
  }
  getHandOfTheKing(): IHandOfTheKing {
    return new LordConnington();
  }
  static create(): IRulingFamilyAbstractFactory {
    return new TargaryenFactory();
  }
}
