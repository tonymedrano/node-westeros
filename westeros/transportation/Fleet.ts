/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/transportation/Fleet.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:25:31 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 * Using the Facade pattern, we can hide the complexity of the underlying system and only expose a simple interface to the client.
 */

import { Admiral } from "./Admiral";
import { Ship } from "./Ship";
import { SupplyCoordinator } from "./SupplyCoordinator";

export class Fleet {
  public ship: Ship[];
  public admiral: Admiral;
  public supplyCoordinator: SupplyCoordinator;

  public setDestination(destination: string) {
    //pass commands to a series of ships, admirals and whoever else needs it
  }

  public resupply() {}

  public attack(destination: string) {
    //attack a city
  }

  //letious other actions...
}
