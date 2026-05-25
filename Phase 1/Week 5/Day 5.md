# Day 5

## Exploratory Testing

When you don't have any plan of checklist on how to test what things or either a software then that testing went which we called as exploratory testing.

**Example :** Tester doesn't have any plan to test what and what not it started to do anything like in the e-commerce web app what happen when I search with number instead to writing any product name to see how system behave with that input.

**Another Example :** What if I copy and paste a 10,000-word essay into the search bar?

You don't write these steps down beforehand. You make them up on the fly based on how the system reacts. If the system crashes when you paste the 10,000-word essay, boom—you just found a bug that no scripted test case would have ever caught.

## How to do Exploratory Testing ?

Exploratory testing doesn't mean wander aimlessly. You need a mission, a deadline and a journal

**Example :** You sit in your cabin with a timer of 30/60/90 minutes and make sure no one is going to disturb you in that time and you have to act like impatient buyer and you have a journal in which you write about bugs, Questions and coverage and you started exploratary testing with Add to cart feature to buying any product.

In the above condition :

0. An impatient buyer whom role you are performing. (Character)
1. Strict Deadline is mention which is **timer**.
2. **Aim** is mention which is Check things from buying to paying E2E.
3. You found somethings strange or unable to understand you write it in the JIRA (**Journal**) but you are not stopping here you are still exploring until time is over and you found out that if that impatient character is `buying something before loading that product it causes 15 times charges on his card`.
4. Then write what you have find? What you have covered ? what seems strange in it ?

## How many Exploratory Testing Techniques are there ?

Exploratry testing session give you the structure (the timer and notes) and exploratiry testing techniques that gives you the idea what to do while the timer is ticking.

There are four types of testing techniques :

1. Testing the Process.
2. Testing the Memory.
3. Testing the Enviroment.
4. Testing the Edges.

1. Testing the Process (CRUD Operation Example): Let's understand this with example let's suppose you wanted to create an account and you fill all the things and when you hit signup and spinner started loading and then suddenly you press delete account button in most of the case the backend is broke because it was trying to delete that account which is not created completely yet and then try to delete that half of the data.

2. Testing the Memory (The Back Button Analogy): Let's understand this with example you opened a e-commerce website and then you started to do shopping and you wanted to buy a produtc from it and then you press buy now and then checkout after paying for it. then you press back button and you noticed it was again saying to pay for that product.

3. Testing the enviroment ( User Interface ): Let's understand this with example let's suppose you wanted to check and test UI and what you did is you open that website in 500% zoom and then toggling the Dark and white toggle to see any unexpected behaviour to shown or there is somehere overlap of character was happening.

4. Testing the edge (check if the app was crashed or show error politely): Let's understand this with example what we try to do is we are going to a cloud service provider website whom we have to check now what we did was there is a colum stated that 0 to 50MB file uploaded only. Then what I did was trying to upload 51MB file over the cloud which shows error then what I did was I was trying to upload a file which is 5kb then that also show error then What I did was I uploaded 25MB file this time and then make a switch in newtork to see is it show any error or not I make 5G to 3G then nothing was happen then I plug-out ethernet cable from the computer and then see how computer respond to that things is it going to crash or showing any polite error here I am check minumum, maximum, negative and postive values to check everything is working fine or not.
