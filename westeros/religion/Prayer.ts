/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/religion/Prayer.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 12:46:20 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { GodFactory } from "./GodFactory";

export class Prayer {
  pray(godName: string) {
    GodFactory.Build(godName).prayTo();
  }
}
