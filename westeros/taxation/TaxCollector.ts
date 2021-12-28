/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/taxation/TaxCollector.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 11:29:43 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export class TaxCollector {
  public collect(
    items: string | any[],
    value: any,
    projection: (arg0: any) => any
  ) {
    if (items.length > 1)
      return (
        projection(items[0]) + this.collect(items.slice(1), value, projection)
      );
    return projection(items[0]);
  }
}
