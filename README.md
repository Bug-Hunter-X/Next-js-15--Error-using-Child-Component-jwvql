# Next.js 15: Error using Child Component

This repository demonstrates a bug in Next.js 15 where using a simple child component within the main component throws an error. The error message is not very helpful in diagnosing the issue.

## Bug

The bug occurs when attempting to render a simple functional component, `MyComponent`, inside the main component, `Home`.  The error message is not descriptive. 

## Solution

The solution is to export the child component and ensure it is correctly imported into the parent component.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console and terminal.

## To fix the bug:

1. Ensure that the child component is correctly exported.
2. Ensure that the child component is correctly imported into the parent component.