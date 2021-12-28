/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/food/SimpleIngredient.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:46:09 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class SimpleIngredient {
  constructor(
    public name: string,
    public calories: number,
    public ironContent: number,
    public vitaminCContent: number
  ) {}
  GetName(): string {
    return this.name;
  }
  GetCalories(): number {
    return this.calories;
  }
  GetIronContent(): number {
    return this.ironContent;
  }
  GetVitaminCContent(): number {
    return this.vitaminCContent;
  }
}
