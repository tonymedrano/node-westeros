/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/castle-design/CreateCastleView.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 12:23:00 pm
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
import { ValidationResult } from "./ValidationResult";

export class CreateCastleView implements IView {
  constructor(
    public document: Document,
    public controller: Controller,
    public model?: Model,
    public validationResult?: ValidationResult
  ) {
    this.document
      .getElementById("saveButton")
      .addEventListener("click", () => this.saveCastle());
    (<HTMLInputElement>this.document.getElementById("castleName")).value =
      model.name;
    (<HTMLInputElement>this.document.getElementById("description")).value =
      model.description;
    (<HTMLInputElement>(
      this.document.getElementById("outerWallThickness")
    )).value = model.outerWallThickness;
    (<HTMLInputElement>this.document.getElementById("numberOfTowers")).value =
      model.numberOfTowers;
    (<HTMLInputElement>this.document.getElementById("moat")).value = model.moat;
  }

  saveCastle() {
    let data = {
      name: (<HTMLInputElement>this.document.getElementById("castleName"))
        .value,
      description: (<HTMLInputElement>(
        this.document.getElementById("description")
      )).value,
      outerWallThickness: (<HTMLInputElement>(
        this.document.getElementById("outerWallThickness")
      )).value,
      numberOfTowers: (<HTMLInputElement>(
        this.document.getElementById("numberOfTowers")
      )).value,
      moat: (<HTMLInputElement>this.document.getElementById("moat")).value,
    };
    this.controller.saveCastle(data);
  }
}
