/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/judicial-system/Interfaces/IComplaintListener.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:44:35 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Complaint } from "../Complaint";

export interface IComplaintListener {
  IsInterestedInComplaint(complaint: Complaint): boolean;
  ListenToComplaint(complaint: Complaint): string;
}
