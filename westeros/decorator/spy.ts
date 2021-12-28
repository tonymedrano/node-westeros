/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros/westeros/decorator/spy.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/VANILLA/node-westeros
 * Created Date: Tuesday, December 28th 2021, 12:49:12 pm
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Tue Dec 28 2021
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2021 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export function spy(target: any, key: string, descriptor?: any) {
  // save a reference to the original method
  // this way we keep the values currently in the
  // descriptor and don't overwrite what another
  // decorator might have done to the descriptor.
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
  }
  var originalMethod = descriptor.value;

  //editing the descriptor/value parameter
  descriptor.value = function (...args: any[]) {
    var a = args.map((a) => JSON.stringify(a)).join();
    // note usage of originalMethod here
    var result = originalMethod.apply(this, args);
    var r = JSON.stringify(result);
    console.log(`Message sent was: ${a}`);
    return result;
  };

  // return edited descriptor as opposed to overwriting
  // the descriptor by returning a new descriptor
  return descriptor;
}
