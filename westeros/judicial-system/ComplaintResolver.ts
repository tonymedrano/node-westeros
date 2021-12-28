/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/judicial-system/ComplaintResolver.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:48:16 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 * Using Chain of Responsibility, consisting of a source of command objects and a series of processing objects.
 */

import { ClerkOfTheCourt } from "./ClerkOfTheCourt";
import { Complaint } from "./Complaint";
import { IComplaintListener } from "./Interfaces/IComplaintListener";
import { King } from "./King";

export class ComplaintResolver {
  complaintListeners: IComplaintListener[];
  constructor() {
    this.complaintListeners = new Array<IComplaintListener>();
    this.complaintListeners.push(new ClerkOfTheCourt());
    this.complaintListeners.push(new King());
  }

  public ResolveComplaint(complaint: Complaint): string {
    for (var i = 0; i < this.complaintListeners.length; i++) {
      if (this.complaintListeners[i].IsInterestedInComplaint(complaint)) {
        return this.complaintListeners[i].ListenToComplaint(complaint);
      }
    }
  }
}
