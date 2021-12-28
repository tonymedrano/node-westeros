/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/judicial-system/King.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:47:20 pm
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

export class King implements IComplaintListener {
  IsInterestedInComplaint(complaint: Complaint): boolean {
    return true;
  }

  ListenToComplaint(complaint: Complaint): string {
    //perform some operation
    //return solution to the complaint
    return "";
  }
}
