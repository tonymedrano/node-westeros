/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/transportation/Ship.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:20:29 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IShip } from "./Interfaces/IShip";
import { SailConfiguration } from "./SailConfiguration";
import { ShipAdapter } from "./ShipAdapter";

export class Ship implements IShip {
  SetRudderAngleTo(angle: number) {}
  SetSailConfiguration(configuration: SailConfiguration) {}
  SetSailAngle(sailId: number, sailAngle: number) {}
  GetCurrentBearing(): number {
    return 7;
  }
  GetCurrentSpeedEstimate(): number {
    return 7;
  }
  ShiftCrewWeightTo(weightToShift: number, locationId: number) {}
}

let ship = new ShipAdapter();
ship.GoForward();
ship.TurnLeft();
