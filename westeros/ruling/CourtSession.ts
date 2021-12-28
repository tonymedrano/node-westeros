/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/ruling/CourtSession.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 11:02:52 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { IRulingFamilyAbstractFactory } from "./Interfaces/IRulingFamilyAbstractFactory";

export class CourtSession {
  COMPLAINT_THRESHOLD = 10;
  constructor(public abstractFactory: IRulingFamilyAbstractFactory) {}
  complaintPresented(complaint: any) {
    if (complaint.severity < this.COMPLAINT_THRESHOLD) {
      return this.abstractFactory.getHandOfTheKing().makeDecision();
    } else return this.abstractFactory.getKing().makeDecision();
  }

  static create(abstractFactory: IRulingFamilyAbstractFactory) {
    return new CourtSession(abstractFactory);
  }
}
