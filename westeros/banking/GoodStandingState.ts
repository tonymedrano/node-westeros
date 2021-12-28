/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/banking/GoodStandingState.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:37:34 pm
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
import { OverdrawnState } from "./OverdrawnState";

export class GoodStandingState implements IState {
  manager: BankAccountManager;
  constructor(manager: BankAccountManager) {
    this.manager = manager;
  }
  public Deposit(amount: number) {
    this.manager.addToBalance(amount);
  }
  public Withdraw(amount: number) {
    if (this.manager.getBalance() < amount) {
      this.manager.moveToState(new OverdrawnState(this.manager));
    }

    this.manager.addToBalance(-1 * amount);
  }
}
