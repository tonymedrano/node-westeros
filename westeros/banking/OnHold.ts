/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/banking/OnHold.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:38:32 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { BankAccountManager } from "./BankAccountManager";
import { IState } from "./Interfaces/IState";

export class OnHold implements IState {
  manager: BankAccountManager;
  constructor(manager: BankAccountManager) {
    this.manager = manager;
  }
  public Deposit(amount: number) {
    this.manager.addToBalance(amount);
    throw "Your account is on hold and you must attend the bank to resolve the issue";
  }
  public Withdraw(amount: number) {
    throw "Your account is on hold and you must attend the bank to resolve the issue";
  }
}
