/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/foretelling/WorldStateProvider.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:00:02 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { WorldState } from "./WorldState";

export class WorldStateProvider {
  numberOfKings: number;
  currentKingInKingsLanding: string;
  season: string;
  saveMemento(): WorldState {
    return new WorldState(
      this.numberOfKings,
      this.currentKingInKingsLanding,
      this.season
    );
  }
  restoreMemento(memento: WorldState) {
    this.numberOfKings = memento.numberOfKings;
    this.currentKingInKingsLanding = memento.currentKingInKingsLanding;
    this.season = memento.season;
  }
}
