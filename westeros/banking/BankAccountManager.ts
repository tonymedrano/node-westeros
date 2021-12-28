/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/banking/BankAccountManager.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:36:50 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { GoodStandingState } from "./GoodStandingState";
import { IState } from "./Interfaces/IState";

export class BankAccountManager {
  private balance: number;
  private currentState: IState;
  constructor() {
    this.currentState = new GoodStandingState(this);
  }

  public Deposit(amount: number) {
    this.currentState.Deposit(amount);
  }

  public Withdraw(amount: number) {
    this.currentState.Withdraw(amount);
  }
  public addToBalance(amount: number) {
    this.balance += amount;
  }
  public getBalance(): number {
    return this.balance;
  }
  public moveToState(newState: IState) {
    this.currentState = newState;
  }
}
