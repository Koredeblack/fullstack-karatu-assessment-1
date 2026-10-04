function validateSchema(obj, schema) {
  const errors = [];

  for (const key of Object.keys(schema)) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      errors.push(`${key}: missing property`);
      continue;
    }

    const actualType = typeof obj[key];
    const expectedType = schema[key];

    if (actualType !== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
    }
  }

  return errors;
}

module.exports = validateSchema;
