/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/banking/OverdrawnState.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:38:02 pm
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
import { GoodStandingState } from "./GoodStandingState";
import { IState } from "./Interfaces/IState";
import { OnHold } from "./OnHold";

export class OverdrawnState implements IState {
  manager: BankAccountManager;
  constructor(manager: BankAccountManager) {
    this.manager = manager;
  }
  public Deposit(amount: number) {
    this.manager.addToBalance(amount);
    if (this.manager.getBalance() > 0) {
      this.manager.moveToState(new GoodStandingState(this.manager));
    }
  }
  public Withdraw(amount: number) {
    this.manager.moveToState(new OnHold(this.manager));
    throw "Cannot withdraw money from an already overdrawn bank account";
  }
}
