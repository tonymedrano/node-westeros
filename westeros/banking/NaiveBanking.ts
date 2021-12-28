/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/banking/NaiveBanking.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 8:34:08 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Mon Dec 27 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class NaiveBanking {
  state: string = "";
  balance: number = 0;
  public NextState(action: string, amount: number) {
    if (this.state == "overdrawn" && action == "withdraw") {
      this.state = "on hold";
    }
    if (this.state == "on hold" && action != "deposit") {
      this.state = "on hold";
    }
    if (
      this.state == "good standing" &&
      action == "withdraw" &&
      amount <= this.balance
    ) {
      this.balance -= amount;
    }
    if (
      this.state == "good standing" &&
      action == "withdraw" &&
      amount > this.balance
    ) {
      this.balance -= amount;
      this.state = "overdrawn";
    }
  }
}
