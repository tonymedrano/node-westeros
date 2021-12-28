/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/armor/BasicArmor.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 3:05:48 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Hit } from "./Hit";
import { IArmor } from "./Interfaces/IArmor";

export class BasicArmor implements IArmor {
  CalculateDamageFromHit(hit: Hit): number {
    return hit.Strength * 0.2;
  }
  GetArmorIntegrity(): number {
    return 1;
  }
}
