/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/NODEJS/jcy_fruit_screen/index.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/NODEJS/jcy_fruit_screen
 * Created Date: Tuesday, August 10th 2021, 12:14:44 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import chalk from "chalk";
import * as emoji from "node-emoji";
import { CourtSession, LannisterFactory, TargaryenFactory } from "./westeros";

import { IfExample } from "./westeros/army/IfExample";
import { InstanceOfExample } from "./westeros/army/InstanceOfExample";
import { VisitorExample } from "./westeros/army/VisitorExample";
import { CrowMailBus } from "./westeros/communication/CrowMailBus";
import { CrowMailRequestor } from "./westeros/communication/CrowMailRequestor";
import { IMessageResponder } from "./westeros/communication/interfaces/IMessageResponder";
import { Message } from "./westeros/communication/Message";
import { CrowMessenger } from "./westeros/decorator/CrowMessenger";
import { Bakery } from "./westeros/food-suppliers/Bakery";
import { Fibonacci } from "./westeros/mathmatics/Fibonacci";
import { Combiner } from "./westeros/potion/Combiner";
import { Ingredient } from "./westeros/potion/Ingredient";
import { TaxCollector } from "./westeros/taxation/TaxCollector";
import { HamiltonianTour } from "./westeros/tourism/HamiltonianTour";
import { HamiltonianTourOptions } from "./westeros/tourism/HamiltonianTourOptions";
import { Horse } from "./westeros/travel/Horse";
import { SeaGoingVessel } from "./westeros/travel/SeaGoingVessel";
import { Walk } from "./westeros/travel/Walk";

console.log(
  chalk.bgYellow(
    chalk.black(
      `${emoji.emojify(
        ":rocket: :rocket: Ultra-Magnus is running"
      )} ${chalk.red("---------")}`
    )
  )
);

const courtSession = [];

let courtSession1 = CourtSession.create(TargaryenFactory.create());
courtSession.push(courtSession1.complaintPresented({ severity: 8 }));
courtSession.push(courtSession1.complaintPresented({ severity: 12 }));

let courtSession2 = CourtSession.create(LannisterFactory.create());
courtSession.push(courtSession2.complaintPresented({ severity: 8 }));
courtSession.push(courtSession2.complaintPresented({ severity: 12 }));

courtSession.forEach((session) => {
  console.log(chalk.blueBright(session));
});

let currentMoney = 70;
let strat: any;
if (currentMoney > 500) strat = new SeaGoingVessel();
else if (currentMoney > 50) strat = new Horse();
else strat = new Walk();

console.log(strat);

// Visitor Pattern Example
console.log(chalk.green("Instance of"));
let a = new InstanceOfExample();
a.Execute();
console.log(chalk.red("Type of"));
let b = new IfExample();
b.Execute();
console.log(chalk.yellow("Vistor example"));
let c = new VisitorExample();
c.Execute();

// Accumulator Pattern Example
let peasants = [
  { name: "Jory Cassel", moneyOwed: 11, bankBalance: 50 },
  { name: "letdis Egen", moneyOwed: 15, bankBalance: 20 },
];
let collector = new TaxCollector();
console.log(
  chalk.bgCyanBright(
    collector.collect(peasants, 0, (item) =>
      Math.min(item.moneyOwed, item.bankBalance)
    )
  )
);

// LazyInstatiation Pattern Example
let bakery = new Bakery();
bakery.orderBreadType("Brioche");
bakery.orderBreadType("Anadama bread");
bakery.orderBreadType("Chapati");
bakery.orderBreadType("Focaccia");

console.log(bakery.pickUpBread("Brioche").breadType);

// Memento Pattern Example
let fib = new Fibonacci();
console.log(fib.MemetoFib(50));

// Options Pattern Example
let options = new HamiltonianTourOptions();
options.onTourStart = () => {
  console.log(chalk.blueBright("I love touring!"));
};
let tour = new HamiltonianTour(options);
tour.StartTour();

//new MethodDecoratorExample().method("hi");
let cm = new CrowMessenger();
let rm = cm.SendMessage("Attack at dawn");
console.log(rm);

let combiner = new Combiner();
combiner.combine([
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
  new Ingredient(),
]);

console.log(chalk.redBright(JSON.stringify(combiner)));

// Publish/Subscribe Pattern Example
export class TestResponder1 implements IMessageResponder {
  processMessage(message: Message) {
    console.log("Test responder 1: got a message");
  }
}
export class TestResponder2 implements IMessageResponder {
  processMessage(message: Message) {
    console.log("Test responder 2: got a message");
  }
}
let bus = new CrowMailBus();
bus.Subscribe("SquareRootFound", new TestResponder1());
bus.Subscribe("SquareRootFound", new TestResponder2());
let requestor = new CrowMailRequestor(bus);
requestor.Request();
