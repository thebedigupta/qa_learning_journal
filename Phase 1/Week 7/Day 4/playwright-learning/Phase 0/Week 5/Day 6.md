# Day 6

## Agile Manifesto

This was created by 17 people who tired of traditional, slow moving project management which has 4 core values and 12 Principles.

**1. Individuals and Interactions over Processes and Tools** : Instead of postion bug on JIRA and wait for the developer to see it. Go on his desk and communicate to him directly and solve the problem with him at that moment.

**2. Wokring Software over Comprehensive Documentation** : Instead of writing 400 pages of documentation it's better to code one feature of software and instead of following a contract of 2 years write and build software around customer need or feedback or product owner involvement.

**3. Customer Collaboration over contract negotiation** : Instead of following a contract and made a software which is going to be irrelevent after end of contract period. Make a software which is more value in the view of customer and evolve around a customer.

**4. Responding to change over following a plan** : If the market changes or a better idea comes up, change the plan. Don't follow a bad plan just because it's "the plan."

## Scrum

If Agile is the 'Philosophy' then scrum is the game plan. It is a framework used to implement agile by breaking big projects into small, manageable chunks. Think of it like a relay race which was happening in short loop.

### The Three Roles (The Team)

- **The Product Manager** : This is the person who assign the work to the specific developer.

- **The Scrum Master** : This is the person who clear the obstacles that comes in the way of team or any kind of hurdle was coming then that person role is to make sure there is no problem for the team so they work smoothly.

- **The Developers** : The 'Doers' people who actually build the product. (Developers,tester and desginers)

### The Three Artifacts (The People)

- **Product Backlog**: This backlog contain all the features that we are going to implement in the software in future.

- **Sprint Backlog**: This backlog contain that process in which team is already working on in that sprint.

- **Increment**: In this process at the end we got to know what we are going to achieve at the end of sprint.

### The Scrum Process

- **The Sprint** : In this process a team of people working on a specific features in a definite time like 2-4 weeks.

- **The Sprint Planning**: In this process a inital team meeting was happen to decide what we are going to achieve in the end of spint.

- **Daily Scrum**: In this process we report to the scrum on what we did yesterday, what we are going to do today ?, where we are stuck?

- **Sprint Review** : In this process we are completed our sprint and show to our customers and get feedback about it.

- **Sprint Retrospeative** : In this process team did a private meeting together and decided from next sprint what we are going to improve.

#### Essential Components that make Scrum Actually Work

##### User Stories & Acceptance Criteria.

- User Stories: This is the unformal way to describle what user want from that product that we called as user stories which build product around the customer.

In the past years there are 200-400 pages manuals for building product around. but after Agile come in to the picture we started building software or product around the customer and for the customer.

- Why we change : For build product around the customer and for the customer.

- Acceptance criteria : This is the main game plan Developer think he/she finished the work but QA think it's still not done yet.

##### Defintion of Ready vs Definition of Done

- DoR : These we don't have to include in the scrum because these are confusing or missing information in the user stories.

- DoD : When the working product or software are ready to use for the end customer and product is already tested by QA team and completely done for the end user uses.

##### The Unifined Developemnt Team

In the past years the developers pass the product to the QA team over the wall and QA team seen it after a week but now QA team has to work with developers and If developement is done and testing is remaining then that means that sprint is failed or unsuccessful.

##### Sprint Commitement

In this phase the product manager show that which is the most valuable thing to do and ask the team when I get this ready they are not forcing anything they are asking when things done.

The Development team : In this the team look at their capcity and told him/her a time period when they finished those user stories it may 5 or 3 whatever according to user stories time or weeks varies.

### Scrum Cermonies

This is also called as scrum events, This event help team to keep on track and ensure everyone is talking to each other.

#### 1. Sprint Planning

You can consider this as a pre-game strategy where product manager assigned task and then teams have to said when and how much they deliver in the upcoming sprint based on their capacity.

#### 2. Daily Scrum

In this event the team has a backlog sprint (Goal) where all team members has to do daily 15 min stand up and tell the scrum master following things :

- 1. What did they did yesterday ?
- 2. What they are going to do today ?
- 3. Is there something that blocking their way or blocking their work ?

It ensures every sprint was going smoothly.

#### 3. Sprint Review

This session was happeing before ending of sprint and in this sprint teams has to show the product to the customer(or stakeholder) and take their feedback on what ever they build in that sprint and understand customer requirements.

#### 4. Sprint Retrospective

This session was happening in the private and this session attend only the team members where they discuss what they are facing while building the product in previous sprint and what they are going to do or improve in the next sprint.

##### 5. Backlog Refinement

The team meet at mid-sprint to look at 'Next' tasks. They clarify confusing points and check all requirements are met on Defintion of ready.

### Shift - Left Testing

Shift - left testing means testing is not going to do in the end. Testing is going to start with the requirements where SDLC start.

```
[Requirements] --> [Design] --> [Coding] --> [Testing] ---> [Release]

     ^
     |__________ Tester's started involving form the very begginning.
```

#### How to do Shift - Left Testing ?

It ensures from very begginng that software has less bug so they ask required question which detect bugs very early and write test cases according to that.

#### Why to do Shift - left testing ?

Because it causes stable software, less expensive when bug detect early phases and faster developement.

### Continuous Testing in Agile

Continous testing in the process when a developer is writing a code and push over a github (folder where it was stored online) then hundered of test automatically started to test that code is okey or not and if it was breaking something then automatically it was cancel to merged and a remainder send to the QA that this functionalities breaking another part of the software.

#### Why this was required to do ?

1. It automated various repetative task which a QA has to do so it decrease the pressure to check all the test cases manually in a long days so it check everything when a developer is going to bring a coffer for him/her.

2. So QA can focus on more important tasks .

#### Benefits :

- Fast Delivery.
- Reduce Risk.
- Empower QA

#### How it was different from Shift - left testing?

Shift - Left Testing : It is about how early you start ?

Continous Testing : It is about how often you do it. (Always)
