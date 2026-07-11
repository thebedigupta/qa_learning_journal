# Question & Answers
I am writing this to check my understanding what things I learned completely and what things are still not completely understand yet.

## API Mocking

**Q. What is the difference between route.fulfill() and route.fetch() + route.fulfill() ?**

__Answer__

Route fulfill : After mocking any api request you are modifying that reqquest from your side or send those data which you wanted to show on frontend.

Route.fetch() + route.fulfill : It simply means when it was fetching data from the server but modified it after fetching from the real backend.

**Q. Write page.route() syntax from memory for intercepting any URL containing /api/ ?**

__Answer__ async page.route({
 const response =    await route.url(`**/api**`);

 const modifiedData = response.map(e => e.crop.name === 'Rabi crop'){
    return 'Kharif crop'
 }

})

## Visual Regresion 

**Q. What command regenerates a baseline snapshot ?**
__Answer :__ When user took a first snapshot which he used in comparing with the other images then that image is called baseline shopshot. 

`````
await page.goto('https://www.saucedemo.com');

await page.screenshot(path: 'user-dashboard.png') // this creates baseline image
`````

**Q. What does playwright stores baseline PNG files ?**
__Answer :__ If path was specified then stored to that path or directly store inside screenshot directory

**Q. What the difference between page.screenshot() and toHaveScreenshot()**

__Answer :__ page.screenshot means take screenshot and tohaveScreenshot() means chechking that step worked and screenshot was taken or not.

## Retries

**Q. What does testInfo.retry equal on the first attempt? On the first retry?**

__Answer :__ It's Zero 0

**What does test labeled flaky mean vs failed ?**

__Answer :__ Falky means that test pases after second attempt means it was unreliable and need investigation and failed means after retry test was getting failed because something is broke somewhere.

**Q. Write the config line that retries only on CI ?**

__Answer :__ retries.on.CI 0 : 2;

## DevTools

**Q. Name the argument passing rule for page.evaluate() ?**

__Answer :__ Not Known

**Q. Which DevTools tab shows XHR/Fetch requests?**

__Answer :__  