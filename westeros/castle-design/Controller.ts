/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/castle-design/Controller.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 12:24:14 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { CreateCastleSuccess } from "./CreateCastleSuccess";
import { CreateCastleView } from "./CreateCastleView";
import { IView } from "./Interfaces/IView";
import { Model } from "./Model";
import { ValidationResult } from "./ValidationResult";

export class Controller {
  model: Model;
  constructor(public document: Document) {}

  public createCastle() {
    this.setView(new CreateCastleView(this.document, this));
  }

  public saveCastle(data: Model) {
    var validationResult = this.validate(data);
    if (validationResult.IsValid) {
      //save castle to storage
      this.saveCastleSuccess(data);
    } else {
      this.setView(
        new CreateCastleView(this.document, this, data, validationResult)
      );
    }
  }

  public saveCastleSuccess(data: Model) {
    this.setView(new CreateCastleSuccess(this.document, this, data));
  }

  private setView(view: IView) {
    //send the view to the browser
  }

  private validate(model: Model): ValidationResult {
    var validationResult = new validationResult();
    if (!model.name || model.name === "") {
      validationResult.IsValid = false;
      validationResult.Errors.push("Name is required");
    }
    return;
  }
}
