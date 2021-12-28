/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/judicial-system/ClerkOfTheCourt.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:46:21 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Complaint } from "./Complaint";
import { IComplaintListener } from "./Interfaces/IComplaintListener";

export class ClerkOfTheCourt implements IComplaintListener {
  IsInterestedInComplaint(complaint: Complaint): boolean {
    //decide if this is a complaint which can be solved by the clerk
    return false;
  }

  ListenToComplaint(complaint: Complaint): string {
    //perform some operation
    //return solution to the complaint
    return "";
  }
}
