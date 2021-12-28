/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/foretelling/Soothsayer.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 7:59:46 pm
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
import { WorldStateProvider } from "./WorldStateProvider";

export class Soothsayer {
  startingPoints: Array<WorldState>;
  currentState: WorldStateProvider;
  constructor() {
    this.startingPoints = [];
    this.currentState = new WorldStateProvider();
  }
  public setInitialConditions(
    numberOfKings: number,
    currentKingInKingsLanding: string,
    season: string
  ) {
    this.currentState.numberOfKings = numberOfKings;
    this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
    this.currentState.season = season;
  }
  public alterNumberOfKingsAndForetell(numberOfKings: number) {
    this.startingPoints.push(this.currentState.saveMemento());
    this.currentState.numberOfKings = numberOfKings;
  }
  public alterSeasonAndForetell(season: string) {
    this.startingPoints.push(this.currentState.saveMemento());
    this.currentState.season = season;
  }
  public alterCurrentKingInKingsLandingAndForetell(
    currentKingInKingsLanding: string
  ) {
    this.startingPoints.push(this.currentState.saveMemento());
    this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
  }
  public tryADifferentChange() {
    this.currentState.restoreMemento(this.startingPoints.pop());
  }
}
