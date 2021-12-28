/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/succession/FibonacciIterator.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 7:43:23 pm
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


 export class FibonacciIterator implements KingIterator{
    previous: number;
    beforePrevious: number;
    constructor(){
      this.previous = 1;
      this.beforePrevious = 1;
    }
    next(): number {
      let current = this.previous + this.beforePrevious;
      this.beforePrevious = this.previous;
      this.previous = current;
      return current;
    }
  }