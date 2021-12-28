/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/castle-design/CreateCastleSuccess.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 12:23:44 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Controller } from "./Controller";
import { IView } from "./Interfaces/IView";
import { Model } from "./Model";

export class CreateCastleSuccess implements IView {
  constructor(
    public document: Document,
    public controller: Controller,
    public model?: Model
  ) {}
}
