/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/armor/ChainMail.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 3:06:30 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { BasicArmor } from "./BasicArmor";
import { Hit } from "./Hit";
import { IArmor } from "./Interfaces/IArmor";

export class ChainMail implements IArmor {
  decoratedArmor: IArmor;
  constructor(decoratedArmor: IArmor) {
    this.decoratedArmor = decoratedArmor;
  }
  CalculateDamageFromHit(hit: Hit): number {
    hit.Strength = hit.Strength * 0.8;
    return this.decoratedArmor.CalculateDamageFromHit(hit);
  }
  GetArmorIntegrity(): number {
    return 0.9 * this.decoratedArmor.GetArmorIntegrity();
  }
}

let armor = new ChainMail(new BasicArmor());
console.log(
  armor.CalculateDamageFromHit({
    Location: "head",
    Weapon: "Sock filled with pennies",
    Strength: 12,
  })
);
