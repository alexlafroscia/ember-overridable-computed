import { computed as originalComputed } from "@ember/object";

export function computed(...args) {
  const OVERRIDE_MAP = new WeakMap();
  const argumentCopy = [...args];
  const fn = argumentCopy.pop();

  return originalComputed(...argumentCopy, {
    get(...computedArgs) {
      if (OVERRIDE_MAP.has(this)) {
        return OVERRIDE_MAP.get(this);
      }

      return fn.apply(this, computedArgs);
    },
    set(key, value) {
      OVERRIDE_MAP.set(this, value);

      return value;
    }
  });
}
