# Week 2 - Day 5

## Focus

Global error handling in JavaScript using `window.onerror`, and where it fits with `try...catch`.

## Topics Covered

- Built-in JavaScript error types
- Why uncaught errors are a real production problem
- `window.onerror` as a global last-resort error handler
- Meaning of `window.onerror` parameters
- Limits of global handlers (reporting vs recovery)
- How monitoring tools (like Sentry) use global error hooks
- Three-level error handling model

## Detailed Notes

## Built-in Error Types

JavaScript provides standard error constructors:

- `Error`
- `SyntaxError`
- `ReferenceError`
- `TypeError`
- `URIError`
- `EvalError`

These can be thrown directly and are useful for categorizing failures.

## Problem: Uncaught Errors Outside `try...catch`

`try...catch` only protects code inside its block.

If an error occurs outside any `try...catch`, the script can fail and the user may see a broken page.

```javascript
function readData() {
  badFunc(); // ReferenceError
}

readData();
```

In production, this is dangerous because failures can go unnoticed unless logged.

## `window.onerror`: Global Safety Net

`window.onerror` runs when an uncaught runtime error reaches the global scope.

```javascript
window.onerror = function (message, url, line, col, error) {
  // global reporting point
};
```

Think of it as a final reporting hook for errors that escaped local handling.

## Parameters Explained

```javascript
window.onerror = function (message, url, line, col, error) {
```

- `message`: Human-readable error message
- `url`: Script/source file where error happened
- `line`: Line number
- `col`: Column number
- `error`: Full error object (may include stack trace)

This information is enough to identify where and why a crash happened.

## Example Flow

```javascript
window.onerror = function (message, url, line, col) {
  alert(`${message}\nAt ${line}:${col} of ${url}`);
};

function readData() {
  badFunc();
}

readData();
```

Execution flow:

1. `readData()` executes.
2. `badFunc()` throws `ReferenceError`.
3. No local `try...catch` handles it.
4. Browser invokes `window.onerror`.
5. Handler receives crash details and reports them.

## Important Limitation

`window.onerror` does not recover a crashed execution path.

- It can report/log the error.
- It cannot "undo" the exception and continue failed code safely.

So its role is observability, not correction.

## How Production Tracking Uses It

Error monitoring tools (for example, Sentry) attach global handlers.
When users hit uncaught errors, tools collect:

- Error message
- File/line/column
- Stack trace
- Frequency and impacted users

This makes real-world debugging possible.

## Three Levels of Error Handling

1. `try...catch`
   Handles expected failures in specific blocks.

2. Rethrowing (`throw` after partial handling)
   Escalates unexpected errors up the call chain.

3. `window.onerror`
   Last-resort global capture for uncaught errors.

## In My Own Words

`try...catch` is local protection. Rethrowing is escalation. `window.onerror` is the final alarm system that tells us a crash happened so we can investigate it in production.

## What Was Hard / What I Got Wrong

- Assuming `window.onerror` can "fix" runtime crashes.
- Forgetting that local `try...catch` is still the primary way to handle known failure points.

## Tomorrow / Next Steps

- Learn `unhandledrejection` for uncaught Promise errors.
- Compare browser global handlers with Node.js process-level handlers.
- Add a small logger utility that sends global errors to a mock API endpoint.
