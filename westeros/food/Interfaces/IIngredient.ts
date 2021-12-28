/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/food/Interfaces/IIngredient.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:45:39 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export interface IIngredient {
  GetName(): string;
  GetCalories(): number;
  GetIronContent(): number;
  GetVitaminCContent(): number;
}
