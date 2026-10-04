function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object' || Object.isFrozen(obj)) {
    return obj;
  }

  for (const key of Reflect.ownKeys(obj)) {
    deepFreeze(obj[key]);
  }

  return Object.freeze(obj);
}

module.exports = deepFreeze;
