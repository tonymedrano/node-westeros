/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/communication/LordInstructions.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 4:56:36 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 * Using Command, consisting of a source of command objects and a series of processing objects.
 */

export class LordInstructions {
  public BringTroops(location: string, numberOfTroops: number, when: Date) {
    console.log(
      "You have been instructed to bring " +
        numberOfTroops +
        " troops to " +
        location +
        " by " +
        when
    );
  }
}

let simpleCommand = new Array();
simpleCommand.push(new LordInstructions().BringTroops);
simpleCommand.push("King's Landing");
simpleCommand.push(500);
simpleCommand.push(new Date());

simpleCommand[0](
  simpleCommand[1],
  simpleCommand[2],
  simpleCommand[3],
  simpleCommand[4],
  simpleCommand[5],
  simpleCommand[6]
);
