/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/potion/FanOutInWebWorker.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 3:50:00 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { CombinedIngredient } from "./CombinedIngredient";

import path from 'path';
import { workerData } from 'worker_threads';
 
require('ts-node').register();
require(path.resolve(__dirname, workerData.path));

let combinedIngredient: CombinedIngredient;
workerData.addEventListener(
  "message",
  function (e) {
    var data = e.data;
    var ingredients = data.ingredients;
    combinedIngredient = new CombinedIngredient();
    for (var i = 0; i < ingredients.length; i++) {
      combinedIngredient.Add(ingredients[i]);
    }
    console.log("calculating combination");
    setTimeout(combinationComplete, 2000);
  },
  false
);

function combinationComplete() {
  console.log("combination complete");
  workerData.postMessage({
    event: "combinationComplete",
    result: combinedIngredient,
  });
}
