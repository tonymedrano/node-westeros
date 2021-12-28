/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/foretelling/WorldState.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 7:59:33 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class WorldState {
  constructor(
    public numberOfKings: number,
    public currentKingInKingsLanding: string,
    public season: string
  ) {}
}
