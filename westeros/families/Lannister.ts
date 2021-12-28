/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/families/Lannister.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 12:56:12 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class Lannister {
  public clone(): Lannister {
    let clone: any = new Lannister();
    for (let attr in this) {
      clone[attr] = this[attr];
    }
    return clone;
  }
  public swordSkills: number;
  public charm: number;
  public wealth: number;
}

let jamie = new Westeros.Families.Lannister();
jamie.swordSkills = 9;
jamie.charm = 6;
jamie.wealth = 10;

let tyrion = jamie.clone();
tyrion.charm = 10;

console.log(tyrion.wealth);
console.log(tyrion.swordSkills);
