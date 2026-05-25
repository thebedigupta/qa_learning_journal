# Day 1 - Software Testing Fundamentals (Interactive Notes)

## Learning Objectives

By the end of this note, I should be able to:

- Explain the STLC phases in the correct order.
- Differentiate smoke, sanity, and regression testing clearly.
- Classify testing types into functional and non-functional categories.
- Explain performance testing subtypes with practical examples.
- Distinguish verification and validation with confidence.

## 1) STLC at a Glance

**STLC (Software Testing Life Cycle)** is a sequence of structured testing activities.

**Flow:**

Requirement Analysis $\rightarrow$ Test Planning $\rightarrow$ Test Case Development $\rightarrow$ Test Environment Setup $\rightarrow$ Test Execution $\rightarrow$ Test Cycle Closure

**Ad-hoc Testing:**

- Unplanned and spontaneous testing.
- Useful for quick checks, but less traceable and less systematic than STLC.

<details>
<summary><strong>Quick Self-Check</strong></summary>

- Which STLC stage comes right before execution?
- Why is STLC preferred over only ad-hoc testing in large projects?

</details>

---

## 2) Smoke vs Regression vs Sanity

| Type                   | Purpose                                               | When It Happens                                        |
| :--------------------- | :---------------------------------------------------- | :----------------------------------------------------- |
| **Smoke Testing**      | Verify critical features/build health at a high level | At the very beginning of a testing cycle/build drop    |
| **Regression Testing** | Ensure existing features still work after changes     | After fixes, enhancements, refactoring, or integration |
| **Sanity Testing**     | Validate a specific bug fix or small change quickly   | After a targeted change, before full regression        |

<details>
<summary><strong>Memory Trick</strong></summary>

- **Smoke**: "Is the build alive?"
- **Sanity**: "Is this fix sensible?"
- **Regression**: "Did we break anything old?"

</details>

### Quick Decision Cheat Sheet

| Situation                              | Best First Choice  | Why                               |
| :------------------------------------- | :----------------- | :-------------------------------- |
| Fresh build from dev team              | Smoke testing      | Quickly validates build health    |
| One bug fix in one module              | Sanity testing     | Fast focused validation           |
| New feature merged with existing flows | Regression testing | Checks old behavior is not broken |
| Exact failed test case after fix       | Retesting          | Confirms defect is actually fixed |

---

## 3) Functional Testing

Functional testing is mostly black-box in nature: validate inputs and expected outputs without depending on internal code structure.

### 3.1 Unit Testing

- Tests the smallest testable parts/components.

Related terms:

- **White-box testing**: Tester has access to internal code and logic.
- **Gorilla testing**: Intense repeated testing of a specific module to check robustness.

### 3.2 Integration Testing

- Two or more modules are combined and tested together.

Main focus:

- Interface defects
- Communication between modules
- Data flow

Common approaches:

- Top-down integration
- Bottom-up integration

Related term:

- **Gray-box testing**: Partial knowledge of internal structure/code.

### 3.3 System Testing

- Entire system is tested against specified requirements.

Includes:

- **E2E testing**: Validates complete real-world user flows across the system.
- **Black-box testing**: Behavior-based testing through inputs and outputs.
- **Happy path testing**: Tests positive/ideal user journey only.
- **Monkey testing**: Random testing without scripted test cases.

### 3.4 Acceptance Testing (UAT)

- Done by customer/client/business users using real business scenarios.
- Usually the final validation phase before production release.

Types:

- **Alpha testing**: Performed internally by the organization before external release.
- **Beta testing**: Performed by real users/customers in real environments before full market release.

### 3.5 Operational Acceptance Testing (OAT)

- Performed by operations/system administration teams.
- Ensures operational readiness.

Focus areas:

- Backup and restore
- Install, uninstall, and upgrade checks
- Disaster recovery process
- User management
- Maintainability and operability

Example scenarios:

- **UAT scenario**: Business user validates that invoice tax calculation matches policy rules.
- **OAT scenario**: Ops team validates nightly backup, restore, and log rotation procedures.

---

## 4) Non-Functional Testing

Non-functional testing evaluates behavior and quality attributes such as speed, stability, security, and user experience.

### 4.1 Security Testing

- Verifies protection from internal and external threats.

Examples:

- External: malware, attacks, unauthorized access attempts
- Internal: authentication and authorization weaknesses

Type:

- **Penetration testing**: Authorized simulated cyberattack to identify security vulnerabilities.

### 4.2 Performance Testing

- Measures responsiveness and stability under load.

Types:

- **Load testing**: Expected or below-expected user load.
- **Stress testing**: Beyond expected user load.
- **Scalability testing**: Observe behavior as load increases step-by-step.
- **Volume testing**: Validate database/data-handling capacity.
- **Endurance (Soak) testing**: Check long-duration stability under sustained load.

#### Scalability Example

| Concurrent Users | Response Time | Observation               |
| :--------------- | :------------ | :------------------------ |
| 1000             | 2s            | Stable                    |
| 1400             | 2s            | Stable                    |
| 4000             | 2s            | Stable                    |
| 5000             | 3s            | Degrading                 |
| 5500             | 4.5s          | Significant slowdown      |
| 6000             | Crash         | Breaking point identified |

### 4.3 Usability Testing

- Evaluates user-friendliness, look and feel, and ease of use.

Related:

- **Exploratory testing**: Informal testing to discover unknown defects.
- **Cross-browser/device testing**: Verify behavior across browsers, devices, and form factors.
- **Accessibility testing**: Ensure usability for people with disabilities.

### 4.4 Compatibility Testing

- Validates software behavior across environments:
- Different OS/platforms
- Web servers
- Hardware
- Network environments

---

## 5) SDLC vs STLC

| SDLC                                                                      | STLC                                                                                                        |
| :------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| Planning<br>Design<br>Development<br>Testing<br>Deployment<br>Maintenance | Requirement Analysis<br>Test Planning<br>Test Case Development<br>Environment Setup<br>Execution<br>Closure |
| Mnemonic: **P D D T D M**                                                 | Mnemonic: **R T T E E C**                                                                                   |

---

## 6) Verification vs Validation

| Verification                                 | Validation                                        |
| :------------------------------------------- | :------------------------------------------------ |
| Ensures design/specification is correct      | Ensures final product meets customer expectations |
| Static activities (reviews, walkthroughs)    | Dynamic activities (actual execution/testing)     |
| Code execution not required                  | Code execution required                           |
| Happens early in development                 | Happens toward/end of testing cycle               |
| Checks documents, design, and code artifacts | Checks working software behavior                  |

### Common Confusions (One-Line Fixes)

- **Verification** asks: "Are we building the product right?"
- **Validation** asks: "Are we building the right product?"
- **Load vs Stress**: expected load vs beyond expected load.
- **Sanity vs Regression**: narrow check vs broad impact check.

---

## 7) Revision Checklist

- [ ] I can explain all STLC stages in order.
- [ ] I can differentiate smoke, sanity, and regression testing.
- [ ] I can map testing types to functional vs non-functional.
- [ ] I can explain load vs stress vs scalability vs endurance.
- [ ] I can explain verification vs validation with examples.

<details>
<summary><strong>Rapid Quiz (Answer Mentally)</strong></summary>

1. If a build arrives and you only need to verify core login/payment/search quickly, which test type is best?
2. A bug is fixed in checkout coupon logic. Which quick targeted testing is ideal first?
3. After integrating a new cart service, old invoice flows fail. Which broad suite should run?
4. Testing at 2x expected user traffic without crashing belongs to which type?

</details>

## 8) Next Session Prep

- Review one production app and identify examples of smoke, sanity, and regression testing.
- Write 5 test ideas each for functional and non-functional testing.
- Prepare 3 interview-style answers on verification vs validation.
