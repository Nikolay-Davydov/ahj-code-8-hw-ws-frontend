//const { Validate } = require('../validate')

import Validate from "../validate";

test("validate number if card true", () => {
  let crd = new Validate();
  let result = crd.validate("4024007149927021");

  expect(result).toBe(true);
});

test("validate number if card false", () => {
  let crd = new Validate();
  let result = crd.validate("4024007418927021");

  expect(result).toBe(false);
});

test("validate payment system if card true", () => {
  let crd = new Validate();
  let result = crd.definPaymentSystem("4024007419927021");

  expect(result).toBe("visa");
});
