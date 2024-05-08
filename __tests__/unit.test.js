// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('phone numbers', () => {
  expect(isPhoneNumber('206-555-0123')).toBe(true);
  expect(isPhoneNumber('(310) 555-0145')).toBe(true);
  expect(isPhoneNumber('12345')).toBe(false);
  expect(isPhoneNumber('phone-number')).toBe(false);
});

test('emails', () => {
  expect(isEmail('email@yahoo.com')).toBe(true);
  expect(isEmail('lastname@gmail.com')).toBe(true);
  expect(isEmail('@example.com')).toBe(false);
  expect(isEmail('user@@domain.com')).toBe(false);
});

test('passwords', () => {
  expect(isStrongPassword('Start123')).toBe(true);
  expect(isStrongPassword('Good_Password1')).toBe(true);
  expect(isStrongPassword('hi')).toBe(false);
  expect(isStrongPassword('123')).toBe(false);
});

test('dates', () => {
  expect(isDate('31/12/1999')).toBe(true);
  expect(isDate('2/2/2022')).toBe(true);
  expect(isDate('13-13-2013')).toBe(false);
  expect(isDate('April 5, 2021')).toBe(false); 
});

test('hex colors', () => {
  expect(isHexColor('#a1e3f2')).toBe(true);
  expect(isHexColor('#fff')).toBe(true);
  expect(isHexColor('#12345')).toBe(false);
  expect(isHexColor('abcd')).toBe(false);
});
