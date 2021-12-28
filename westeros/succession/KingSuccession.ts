/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/succession/KingSuccession.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 7:40:33 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { KingIterator } from "./Interfaces/KingIterator";

export class KingSuccession implements KingIterator {
  pointer: number;

  constructor(public inLineForThrone: string[]) {
    this.pointer = 0;
  }

  public next(): string {
    return this.inLineForThrone[this.pointer++];
  }
}
