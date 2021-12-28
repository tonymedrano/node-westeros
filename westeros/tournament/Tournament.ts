/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/tournament/Tournament.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Sunday, December 26th 2021, 10:15:01 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Event } from "./Event";
import { Attendee } from "./Attendee";
import { Prize } from "./Prize";

export class Tournament {
  public events: Event[];
  public prizes: Prize[];
  public attendees: Attendee[];
  constructor() {}
}
