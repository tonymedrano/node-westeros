/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/army/SelectiveNamePrinterVisitor.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:07:04 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IMemberOfArmy } from "./Interfaces/IMemberOfArmy";
import { IVisitor } from "./Interfaces/IVisitor";
import { Knight } from "./Knight";

export class SelectiveNamePrinterVisitor implements IVisitor {
  public visit(memberOfArmy: IMemberOfArmy) {
    if (memberOfArmy instanceof Knight) {
      this.VisitKnight(memberOfArmy);
    } else {
      console.log("Not a knight");
    }
  }

  VisitKnight(memberOfArmy: IMemberOfArmy) {
    memberOfArmy.printName();
  }
}
