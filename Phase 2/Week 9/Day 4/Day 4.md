# Day 4


Until Now Whenever I try to write a page inside a POM project which is under **pages/loginPage.ts** (as a exmaple) then whenever I write that pages I write completely based on assumptions 

For Example : 

Like this elemenet is going to hit with the help of this loctaor but at the time of running the test suite most of the time I am facing more difficulty in creating a complete test suite because at the end when error was started hitting becuase I write pages based on assumptions which were started breaking then multiple tests based on that assumptions causes drain my energy focus more and at the end I have to do two things at the same time first creating pages based on test suite which I am writing at the same time.

## How to verify your code hits the right element while writing

Then I got to know that there are built in tools who specificallly designed to solve this exact problem.

__1. First Tool__

**The Playwright VS Code Extension (The "Pick Locator" Feature)**

- This is the absolute fastest way to build your loginPage.ts files accurately.

- Install the official Playwright extension in VS Code.

- In the testing sidebar, check the box that says "Show browser".

- Click "Pick locator". A live browser will open.

- Hover over the element you want to interact with on the website. Playwright will highlight it and show you the exact, most reliable locator.

- When you click the element, Playwright will automatically paste that verified locator directly into your code editor.

__2. Second Tool__

**Playwright UI Mode**

Instead of running tests blindly in the terminal, run them in UI mode:
npx playwright test --ui

- This opens a time-travel UI. You can see the DOM snapshot for every single action your code takes.

- It includes a "Locator" tab at the bottom. You can paste your intended locator (e.g., page.getByRole('button', { name: 'Submit' })) into this tab before putting it in your POM file, and Playwright will highlight the exact element it hits on the screen in real-time.

