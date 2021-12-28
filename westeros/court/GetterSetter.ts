/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/court/GetterSetter.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:07:08 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */
import  { Listener } from "./Listener";

export class GetterSetter {
  _listener: Listener;
  _property: any;
  public GetProperty() {
    return this._property;
  }
  public SetProperty(value: any) {
    let temp = this._property;
    this._property = value;
    this._listener.Event(value, temp);
  }
}
