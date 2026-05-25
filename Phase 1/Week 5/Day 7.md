# Day 7

## Test Strategy Vs Test Plan

Test Strategy is the rule which we have to follow in our complete project or complete company has to follow. It is generally same for every project. It gives answer of who and how. written by Test Manager or QA Lead. It is a high level document which is used to define the testing approach of the project. It is a static document which is not changing according to project or sprint. It is a long term document.

Example : How we are going to do testing over mobile interface. we will do 80% testing through unit tests and UI through playwright.

Test Plan is changing all the time according to requirements or according to projects or according to that sprint. In this we made a strategy on how to do ? what things ?. QA Engineer. It it dynamic document which is changing according to project or sprint. It is a short term document.

Example : Let suppose we are at sprint 12 where we have to check **Reset Password Button**. So X person is going to handle automation and Y person going to handle edge cases. We need to finish next thursday.

## Test Plan Components

1. Scope of testing : In this we are going to do automate all those work which is capable to automate.
2. Test Objective : In this we try to do 80% of manual regression through automation.
3. Test Types : In this we discussed about what kind of test we are going to perform negative testing,functional testing e.t.c
4. Test Criteria : In this process we discussed about what is entry test criteria and exit test criteria.

- Entry Test Criteria : All the code push on QA enviroment or not ?
- Exit Test Criteria : All the high priority issue is solved and 100 % tests run.

5. Test Enviroment : Is the enviroment is completely ready for testing or not ?
6. Timeline : How many days are we going to write test cases? How many days we are going to take to run all test cases.
7. Deliveriables : We deliver the product after performing all the tests.
8. Risk and Metigation : Risk > The website changes it's UI friquently. Metigation > Use stable CSS selectors.

## Acceptance Criteria Vs Exit Criteria

### Acceptance Criteria (The 'Feature' level)

In this the user stories or functionalities has to work and small checks have to passed accoridng to product owner to Accept the product/software.It focuses on functionalities

**Who did this**: Product Owner

### Exit Criteria (The 'Phase' level)

In this high - level conditions are must be met to finish a testing phase or sprint. It focuses on over all quality and process.

**Who did this** : QA

**Let's Write Some Test Plans**

1. Test Plan for Login Page.

```
TEST PLAN — Mobile Banking App Login Feature
Version: 1.0
Author: [Your Name]
Date: [Today's Date]

1. SCOPE
In Scope:
- Login with valid credentials
- Login with invalid credentials
- Password field masking
- Remember me functionality
- Forgot password link navigation
- Account lockout after 3 failed attempts
- Session timeout after inactivity

Out of Scope:
- Payment transactions
- Account registration
- Two-factor authentication (separate sprint)
- Admin panel

2. TESTING TYPES
- Functional Testing: verify all login scenarios work correctly
- Negative Testing: invalid inputs, wrong passwords, empty fields
- Boundary Value Testing: password length boundaries
- Security Testing: SQL injection in login fields
- Usability Testing: error messages are clear and helpful
- Regression Testing: ensure login changes don't break existing features

3. ENTRY CRITERIA
- Login feature development complete
- Build deployed to test environment
- Test data prepared (valid accounts, locked accounts, inactive accounts)
- Test cases reviewed and approved
- Test environment verified as stable

4. EXIT CRITERIA
- 100% of critical test cases executed
- 100% of high priority test cases executed
- Zero critical severity bugs open
- Zero high severity bugs open
- Test execution report submitted and reviewed
- Product Owner sign-off received

5. TEST ENVIRONMENT
Browsers: Chrome 120, Firefox 119, Safari 17
Mobile OS: Android 13 (Samsung Galaxy), iOS 16 (iPhone 13)
Test Environment URL: staging.bankingapp.com
Test Accounts: 3 valid users, 1 locked account, 1 inactive account

6. RESOURCES
QA Engineer: responsible for writing and executing all test cases
Developer: available for bug fixes and environment support
Product Owner: available for requirement clarifications

7. SCHEDULE
Day 1: Test case writing and review
Day 2: Test environment setup and data preparation
Day 3-4: Test case execution
Day 5: Bug reporting and retest of fixes
Day 6: Final regression and sign-off

8. RISKS AND MITIGATIONS
Risk 1: Test environment unstable
Mitigation: Use local development build as backup environment

Risk 2: Test data unavailable
Mitigation: Developer creates seed script to generate test accounts

Risk 3: Login feature delayed from development
Mitigation: QA uses that time to complete test case writing in advance

9. DELIVERABLES
- Test cases document (Google Sheets)
- Bug reports in JIRA
- Test execution report showing pass/fail counts
- Sign-off email to Product Owner
```

**It was getting tough for me write a test plan after reading or seeing in a example so instead of memorizing the template I am trying to get in the head of QA and try to think like a tester**

So from now I am trying to follow a approach and try to think like a tester

Before writing a single word, I am going to ask myself these five questions about the features (e.g a 'Search Bar')

1. Five **W**'s mindset

- **What** are we testing ? (Scope)
- **Why** are we testing it ? (Objective)
- **Who** is doing the work ? (Resources)
- **Where** it will run ? (Enviroment)
- **When** must it be finished ? (Schedule)

2. The 'Boundary' Technique (For Scope)

To write the Scope section,imagine the feature as a box and ask yourself what is inside the box and what is outside the box. This will help you to define the in scope and out of scope clearly.

Example :

**In-Scope**: Everything inside the box. If the feature is "Login," think of the buttons, the fields, and the "Forgot Password" link.

**Out-of-Scope**: Everything outside the box. If I'm testing Login, I am not testing the "Bank Statement" page that appears after login. This prevents you from doing too much work.

3. The 'Gate Keeper Mindset' (For Criteria)

To understand Entry and Exit Criteria, imagine you are a security guard at a club:

- **Entry Criteria (The ID Check)**: "I won't let you in (start testing) unless you have your ID (the build) and a ticket (the requirements)."

- **Exit Criteria (The Closing Time)**: "The party isn't over (testing isn't done) until the lights are on (all tests run) and everyone has left safely (0 critical bugs)."

```
I feel like I can't just "invent" a Test Plan from scratch after one reading. A Test Plan isn't a creative essay; it is a technical map. To get into the mindset of a QA Engineer, I need to stop looking at the document as a whole and start looking at it as solving a puzzle.
```

Here is how you can train your brain to write a Test Plan for any feature without memorizing a template.

**1. Use the "Five W's" Mindset**
Before you write a single word, ask yourself these five questions about the feature (e.g., a "Search Bar"):

**What** are we testing? (Scope)

**Why** are we testing it? (Objectives)

**Who** is doing the work? (Resources)

**Where** will it run? (Environment)

**When** must it be finished? (Schedule)

If you can answer these five questions in your head, you already have 70% of your Test Plan.

**2. The "Boundary" Technique (For Scope)**
To write the Scope section, imagine you are drawing a circle around the feature.

- In-Scope: Everything inside the circle. If the feature is "Login," think of the buttons, the fields, and the "Forgot Password" link.

- Out-of-Scope: Everything outside the circle. If I'm testing Login, I am not testing the "Bank Statement" page that appears after login. This prevents you from doing too much work.

**3. The "Gatekeeper" Mindset (For Criteria)**
To understand Entry and Exit Criteria, imagine you are a security guard at a club:

- Entry Criteria (The ID Check): "I won't let you in (start testing) unless you have your ID (the build) and a ticket (the requirements)."

- Exit Criteria (The Closing Time): "The party isn't over (testing isn't done) until the lights are on (all tests run) and everyone has left safely (0 critical bugs)."

**4. Practice with "Reverse Engineering"**
Instead of trying to write a new one immediately, take a simple app you use every day (like WhatsApp or Instagram) and try to "guess" its test plan for just one small part, like the "Send Image" button.

Try this mini-exercise right now:

If you had to write a Test Plan for the "Like Button" on Instagram:

- **Scope**: Can I like a post? Can I unlike it? Does the heart turn red?

- **Environment**: Does it work on an iPhone? Does it work on a slow 3G connection?

- **Risk**: What if the server is slow? (Mitigation: Show a loading spinner).

**5. Follow the "Traceability" Logic**

A professional mindset connects the dots:

```
Requirement -> User Story -> Acceptance Criteria -> Test Case.

If the requirement says "Password must be secure," your Test Plan's Testing Types section must include "Security Testing" and "Negative Testing." The document should feel like a logical chain.
```

This is your structured Test Plan for the Search Bar Feature. Since you are training for an SDET role, I have formatted this exactly as you would present it in a professional environment like a bank or a tech startup.

```
TEST PLAN: Search Bar Functionality
Version: 1.0

Author: Bedi Gupta

Date: 07-05-2026

1. SCOPE
In Scope:

Positive Flow: Searching with valid keywords (e.g., "Savings Account").

Negative Flow: Searching with invalid/nonsense keywords (e.g., "xyz123").

Triggers: Verifying search starts via both the Search Icon click and the Enter Key press.

UI Feedback: Verifying the "Loading" state and the "Results Found" count.

Empty State: Behavior when the search button is clicked with an empty input box.

Out of Scope:

Performance: Testing how the server handles 10,000 searches at once.

Database: Backend database optimization.

Auto-Suggestions: The "Type-ahead" dropdown (to be tested in a later sprint).

2. TESTING TYPES
Functional Testing: Ensuring the search returns the correct data.

Negative Testing: Ensuring the system doesn't crash when given "bad" input.

Usability Testing: Checking if the font and search icon are easy to see and use.

Regression Testing: Ensuring the new search bar doesn't break the existing Navigation Menu.

3. ENTRY CRITERIA
Deployment: Feature code is pushed and successfully deployed to the QA Environment.

Smoke Test: The environment is verified as stable (the website loads).

Documentation: User Stories and Acceptance Criteria are finalized.

Test Data: A list of searchable items is available in the testing database.

4. EXIT CRITERIA
Execution: 100% of planned test cases have been run.

Bug Status: Zero Critical or High severity bugs are open.

Pass Rate: Minimum 95% pass rate for all test cases.

Sign-off: Final approval received from the Product Owner.

5. TEST ENVIRONMENT
Browsers: Chrome (v120), Firefox (v119).

Mobile: Android 13 (Chrome Mobile), iOS 16 (Safari).

URL: [https://staging.bankingapp.com/search-test](https://staging.bankingapp.com/search-test)

6. RESOURCES
Bedi Gupta (QA/SDET): Responsible for writing test cases and creating automation scripts.

Developer Team: Available for bug fixing and environment support.

7. SCHEDULE
Day 1: Finalize Test Cases and prepare Test Data.

Day 2: Execute Manual functional tests.

Day 3: Write and run Playwright automation scripts.

Day 4: Bug reporting and re-testing of fixed issues.

Day 5: Final Regression and Sign-off.

8. RISKS & CONTINGENCIES
Risk: Test Environment is down or unstable.

Contingency: Perform Static Testing (reviewing requirements) or write automation logic (POM) using local builds.

9. DELIVERABLES
Test Case Document (with Pass/Fail status).

Bug Reports (Logged in JIRA).

Test Summary Report (Final result for the stakeholders).

```
