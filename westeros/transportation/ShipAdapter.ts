/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/transportation/ShipAdapter.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:21:35 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { SimpleShip } from "./Interfaces/SimpleShip";
import { Ship } from "./Ship";

export class ShipAdapter implements SimpleShip {
  _ship: Ship;
  constructor() {
    this._ship = new Ship();
  }

  TurnLeft() {
    this._ship.SetRudderAngleTo(-30);
    this._ship.SetSailAngle(3, 12);
  }
  TurnRight() {
    this._ship.SetRudderAngleTo(30);
    this._ship.SetSailAngle(5, -9);
  }
  GoForward() {
    //do something else to the _ship
  }
}
