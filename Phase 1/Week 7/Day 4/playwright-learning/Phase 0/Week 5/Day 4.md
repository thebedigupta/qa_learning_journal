# Day 4

## Bug Life Cycle

Bug life cycle started when a QA found a bug in the software

**Let's Start Bug Life Cycle**

```
Bug Found > Assign Developer > Developer Marked Fixed > Retest > Closed
                ^                                         |
            Re-Assign    <      <       <        <     < Fail
```

**Note**

Defered : Meaning Not Urgent right now to fix
Reject : Developer Reject it because of not a bug

## Severity Vs Priority

Severity simply means technical Problem

There are four types of severity problem

- Cricital : After button press whole website crash.
- Major : Login fail on firefox only. (core feature exist, workaround not working).
- Minor : Features Partially Broken (Wrong error message shown).
- Trivial : Button color slightly off (cosmetic issue, no functional impact)

Priority simply means loss in money/business

- High : Company logo missing on their landing page (Loss in trust both customer/investors)
- Medium : Showing Search result is slow. (Fix in current sprit)
- Low : Fix when time allows.(Footer copyright year wrong)

**4 Combination Severity and Priority**

1. High Severity + High Priority : Add to cart button unresposive causes loss crash of webpage and money.
2. High Severity + Low Priority : Crash in rarely used admin report.
3. Low Serverity + High Priority : Spelling mistake in the website in the name of founder.
4. Low Severity + Low Priority : typo in the terms and condition form

## A complete good bug report has these features :

```
Bug ID: BUG-001
Title: Login button unresponsive on mobile Chrome
Severity: Major
Priority: High
Environment: Chrome 120, Android 13, Samsung Galaxy S21
Steps to Reproduce:
  1. Open chrome on mobile
  2. Navigate to automationexercise.com/login
  3. Enter valid email and password
  4. Tap Login button
Expected Result: User redirected to homepage
Actual Result: Nothing happens, button does not respond
Screenshot/Video: [attached]

```
