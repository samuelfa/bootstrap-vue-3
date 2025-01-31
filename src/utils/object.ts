/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {isObject} from './inspect'

export const assign = (target: any, ...args: any[]) => Object.assign(target, ...args)
export const defineProperties = (obj: any, props: PropertyDescriptorMap & ThisType<any>) =>
  Object.defineProperties(obj, props)

export const defineProperty = (
  obj: any,
  prop: string | number | symbol,
  descriptor: PropertyDescriptor & ThisType<any>
): any => Object.defineProperty(obj, prop, descriptor)

// Convenience method to create a read-only descriptor
export const readonlyDescriptor = () => ({enumerable: true, configurable: false, writable: false})
