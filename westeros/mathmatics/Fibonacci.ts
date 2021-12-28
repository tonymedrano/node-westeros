/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/mathmatics/Fibonacci.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:53:31 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class Fibonacci {
  public NaieveFib(n: number): number {
    if (n == 0) return 0;
    if (n <= 2) return 1;
    return this.NaieveFib(n - 1) + this.NaieveFib(n - 2);
  }

  memorizedValues = [];
  public MemetoFib(n: number): number {
    if (n == 0) return 0;
    if (n <= 2) return 1;
    if (!this.memorizedValues[n])
      this.memorizedValues[n] = this.MemetoFib(n - 1) + this.MemetoFib(n - 2);
    return this.memorizedValues[n];
  }
}
