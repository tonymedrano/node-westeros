/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/wall/Wall.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Monday, December 27th 2021, 1:01:34 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class Wall {
  private static _instance: Wall = null;
  private height: number = 0;
  constructor() {
    if (Wall._instance) return Wall._instance;
    Wall._instance = this;
  }
  public setHeight(height: number) {
    this.height = height;
  }

  public getStatus() {
    console.log("Wall is " + this.height + " meters tall");
  }
  public static getInstance(): Wall {
    if (!Wall._instance) {
      Wall._instance = new Wall();
    }

    return Wall._instance;
  }
}

let wall = Wall.getInstance();
wall.setHeight(10);
let wall2 = Wall.getInstance();
wall2.getStatus();
let wall3 = new Wall();
wall3.getStatus();
wall3.setHeight(20);
let wall4 = new Wall();
wall4.getStatus();
