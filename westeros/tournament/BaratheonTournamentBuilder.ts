/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/tournament/BaratheonTournamentBuilder.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 12:32:48 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Tournament } from "./Tournament";
import { Attendee } from "./Attendee";
import { Event } from "./Event";

export class BaratheonTournamentBuilder {
  public build() {
    let tournament = new Tournament();
    tournament.events.push(new Event("Joust"));
    tournament.events.push(new Event("Melee"));

    tournament.attendees.push(new Attendee("Stannis"));
    tournament.attendees.push(new Attendee("Robert"));

    return tournament;
  }
}
