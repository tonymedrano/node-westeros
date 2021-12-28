/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/history/Parser.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 5:03:34 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Battle } from "./Battle";

export class Parser {
  battleList: string[];
  currentIndex: number = 0;
  constructor(public battleText: string) {
    this.battleList = battleText.split("\n");
  }
  public nextBattle(): Battle {
    if (!this.battleList[0]) return null;
    var segments = this.battleList[0].match(
      /\((.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->\s?(.+)/
    );
    return new Battle(segments[2], segments[1], segments[3], segments[4]);
  }
}
