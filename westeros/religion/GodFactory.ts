/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/religion/GodFactory.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 12:47:29 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IGod } from "./Interfaces/IGod";
import { DrownedGod } from "./DrownedGod";
import { AncientGods } from "./AncientGods";
import { DefaultGod } from "./DefaultGod";

export class GodFactory {
  static Build(godName: string): IGod {
    if (godName === "drowned") return new DrownedGod();
    if (godName === "ancient") return new AncientGods();
    return new DefaultGod();
  }
}
