/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/tourism/HamiltonianTour.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 12:14:18 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { HamiltonianTourOptions } from "./HamiltonianTourOptions";

export class HamiltonianTour {
  constructor(public options: HamiltonianTourOptions) {}
  public StartTour() {
    if (
      this.options.onTourStart &&
      typeof this.options.onTourStart === "function"
    )
      this.options.onTourStart();
    this.VisitAttraction("King's Landing");
    this.VisitAttraction("Winterfell");
    this.VisitAttraction("Mountains of Dorne");
    this.VisitAttraction("Eyrie");
    if (
      this.options.onTourCompletion &&
      typeof this.options.onTourCompletion === "function"
    )
      this.options.onTourCompletion();
  }

  VisitAttraction(AttractionName) {
    if (
      this.options.onEntryToAttraction &&
      typeof this.options.onEntryToAttraction === "function"
    )
      this.options.onEntryToAttraction(AttractionName);
    //do whatever one does in a Attraction
    if (
      this.options.onExitFromAttraction &&
      typeof this.options.onExitFromAttraction === "function"
    )
      this.options.onExitFromAttraction(AttractionName);
  }
}
