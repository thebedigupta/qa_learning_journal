# Day 3

## Equivalence Partitioning

In this process if we have to test which inputs are accepting then instead of checking all numbers and wasting our time we group numbers into small chunks and then pick any one number from every chunk of each group to test that things are working or not.

```
Example :

Imagine you are testing an online ticketing system. The business rule is: "A customer can buy between 1 and 10 tickets per order."

If you didn't know EP, you might write test cases for 1 ticket, 2 tickets, 3 tickets... all the way to 10. Then you might test 11, 12, 13... up to 100. That is way too many tests to write and automate!

Using Equivalence Partitioning, you just look at the rules and create your buckets:

Bucket 1: Invalid (Too few) -> Any number less than 1 (e.g., 0, -5).

Bucket 2: Valid (Just right) -> Any number from 1 to 10 (e.g., 5, 7).

Bucket 3: Invalid (Too many) -> Any number greater than 10 (e.g., 11, 50, 999).

Now, instead of writing dozens of tests, you only need to pick one random number from each bucket:

Test Case 1 (from Bucket 1): Try to buy 0 tickets. -> Expected Result: Error message.

Test Case 2 (from Bucket 2): Try to buy 4 tickets. -> Expected Result: Success.

Test Case 3 (from Bucket 3): Try to buy 15 tickets. -> Expected Result: Error message.

```

## Boundary Value Analysis (BVA)

Boundary value analysis is related to equivalence partionting. when EP(equivalence partionting) is divided inputs into 3 buckets then BVA is only pick boundary values where the most snekiest bugs are there

```
Example :

A Simple Example: The Age Gateway
Let's use an age requirement rule: "Users must be between 18 and 60 years old."

If we only used EP, we might test 10 (invalid), 30 (valid), and 70 (invalid). But BVA tells us to zoom in right where the rules change. For every boundary line, you test three specific values:

Just below the boundary

Exactly on the boundary

Just above the boundary

For our 18 to 60 rule, our BVA test cases look like this:

The Lower Boundary (18):

17 (Just below) -> Expected Result: Invalid

18 (Exactly on) -> Expected Result: Valid

19 (Just above) -> Expected Result: Valid

The Upper Boundary (60):

59 (Just below) -> Expected Result: Valid

60 (Exactly on) -> Expected Result: Valid

61 (Just above) -> Expected Result: Invalid

By testing exactly at 17, 18, 60, and 61, you catch the most common coding errors ("Off-by-one" errors) before they hit production.
```

**Note :** EP and BVA both works together

## Decision Table Testing

It just create a decision table in which testers get the feasibility to check what senarios have to met so that things workout.

```
Example 1: How to make Decision Base Table for Login Screen?

The condition is simple if the user provides the correct username and password the user will be redirected to the homepage. If any of the input is wrong, an error message will be displayed.


Conditions	  Rule 1	Rule 2	Rule 3	Rule 4
Username (T/F)	F	      T       F	      T
Password (T/F)	F	      F       T	      T
Output (E/H)	E	      E	      E	      H

Legend:

T – Correct username/password
F – Wrong username/password
E – Error message is displayed
H – Home screen is displayed

Interpretation:

Case 1 – Username and password both were wrong. The user is shown an error message.
Case 2 – Username was correct, but the password was wrong. The user is shown an error message.
Case 3 – Username was wrong, but the password was correct. The user is shown an error message.
Case 4 – Username and password both were correct, and the user navigated to the homepage
```

#### Disadvantage

As the input grows table become more long and complex

#### Advantage

Where EP And BVA is fail then Decision table testing work there

```
Example :

Why EP and BVA fail here:

You cannot use EP or BVA on this logic. What is the "boundary" of a valid ATM card? What is the "equivalence partition" of a correct PIN? There aren't any. They aren't numeric ranges; they are independent, absolute states.

Why a Decision Table succeeds here:

Because the behavior of the ATM changes completely based on the combination of these inputs, a Decision Table is the only way to test it accurately.

If we map out just a few combinations:

Combination A: Card Valid (T) + PIN Correct (T) + Account has money (T) + ATM has cash (T) -> Action: Dispense Cash.

Combination B: Card Valid (T) + PIN Correct (T) + Account has money (T) + ATM has cash (F) -> Action: Show "Machine out of order" error.

Combination C: Card Valid (T) + PIN Correct (F) + Account has money (T) + ATM has cash (T) -> Action: Show "Wrong PIN" error.

By laying this out in a Decision Table, you can clearly see all 16 possible combinations ($2^4$) for these four True/False inputs, ensuring you write a test script for every possible scenario a real user might encounter at the ATM.
```

---

[My written Test Cases](!https://docs.google.com/spreadsheets/d/1M09U3zn6qYNpTtjiKt1_P3T-8pMEJc1U0Qs2PrLS53E/edit?usp=sharing)
