/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/potion/Combiner.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 1:11:07 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import { Worker } from "worker_threads";
import { Ingredient } from "./Ingredient";

export class Combiner {
  waitingForChunks = 0;
  combine(ingredients: Array<Ingredient>) {
    console.log("Starting combination");
    if (ingredients.length > 10) {
      for (let i = 0; i < Math.ceil(ingredients.length / 2); i++) {
        this.waitingForChunks++;
        console.log("Dispatched chunks count at: " + this.waitingForChunks);
        /* const worker = new Worker('./FanOutInWebWorker.js', {
          workerData: {
            path: './FanOutInWebWorker.ts'
          }
        });
        worker.on("message", (message: any) => this.complete(message));
        worker.postMessage({ ingredients: ingredients.slice(i, i * 2) }); */
      }
    }
  }
  complete(message: any) {
    this.waitingForChunks--;
    console.log("Outstanding chunks count at: " + this.waitingForChunks);
    if (this.waitingForChunks == 0) console.log("All chunks received");
  }
}
