'use strict';

// This below code defines a set of validation rules for passwords and a PasswordValidator class that can be used to validate passwords against those rules. Each rule is a function that takes a password as input and returns an object indicating whether the password meets the rule and an associated message if it does not. The PasswordValidator class allows you to add rules and validate passwords, returning any errors and a strength assessment.
const minLength = (min) => (password) => ({
  valid: password.length >= min,
  message: `Password must be at least ${min} characters long`,
});

// this rule checks if the password contains at least one uppercase letter
const hasUppercase = () => (password) => ({
  valid: /[A-Z]/.test(password),
  message: 'It must contain capital letter',
});

// this rule checks is there any lowercase words avaliable or not
const hasLowercase = () => (password) => ({
  valid: /[a-z]/.test(password),
  message: 'Password must contain at least small letters',
});

// this rule check is there any number was there or not inside passeord string
const hasNumber = () => (password) => ({
  valid: /\d/.test(password),
  message: 'Password must contain at least one number',
});
// this rule check that a password string has any special character avaliable or not from the provided character
const hasSpecialCharacter =
  (chars = '!@#&%') =>
  (password) => ({
    valid: new RegExp(`[${chars}]`).test(password),
    message: `Your Password doesn't have any special character`,
  });

// this below rule make sure that password string has no space between them
const noSpaces = () => (password) => ({
  valid: !/\s/.test(password),
  message: `Your Password doesn't contain any spaces`,
});

// === VALIDATOR CLASS ===

class PasswordValidator {
  constructor(rules = []) {
    this.rules = rules;
    this.errors = [];
  }

  // Add rule (fluent interface)
  addRule(rule) {
    this.rules.push(rule);
    return this;
  }

  // Validate single password
  validate(password) {
    this.errors = [];

    for (const rule of this.rules) {
      const result = rule(password);
      if (!result.valid) {
        this.errors.push(result.message);
      }
    }

    return {
      valid: this.errors.length === 0,
      errors: this.errors,
      strength: this.calculateStrength(password),
    };
  }

  calculateStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const labels = [
      'Very Weak',
      'Weak',
      'Fair',
      'Good',
      'Strong',
      'Very Strong',
    ];
    return {
      score,
      label: labels[score] || 'Very Strong',
    };
  }

  batchValidate(passwords) {
    return passwords.map((pwd) => ({
      password: pwd,
      ...this.validate(pwd),
    }));
  }
}

// === USAGE EXAMPLES ===

// Example 1: Basic validation
console.log('=== Basic Validator ===');
const basicValidator = new PasswordValidator()
  .addRule(minLength(8))
  .addRule(hasUppercase())
  .addRule(hasLowercase());

const result1 = basicValidator.validate('Hello1');
console.log(result1); // Invalid: too short

const result2 = basicValidator.validate('HelloWorld1');
console.log(result2); // Valid

// Example 2: Strict validation
console.log('\n=== Strict Validator ===');
const strictValidator = new PasswordValidator([
  minLength(12),
  hasUppercase(),
  hasLowercase(),
  hasNumber(),
  hasSpecialCharacter(),
  noSpaces(),
]);

const passwords = [
  'password', // Weak
  'Password123!', // Strong
  'Hello World 123!', // Has space
  'Short1!', // Too short
  'ValidPass123!@#', // Valid
];

passwords.forEach((pwd) => {
  const result = strictValidator.validate(pwd);
  console.log(`${pwd}: ${result.valid ? '✓' : '✗'} ${result.strength.label}`);
  if (!result.valid) {
    console.log('  Errors:', result.errors);
  }
});

// Example 3: Batch processing
console.log('\n=== Batch Processing ===');
const batchResults = strictValidator.batchValidate(passwords);
const validCount = batchResults.filter((r) => r.valid).length;
console.log(`${validCount}/${passwords.length} passwords valid`);

// Export for testing
module.exports = {
  PasswordValidator,
  minLength,
  hasUppercase,
  hasLowercase,
  hasNumber,
  hasSpecialCharacter,
  noSpaces,
};
