I guess I'll plan out this rock paper scissors game here as well as document my progress the way I typically do.

The player needs to be able to select one of the options so I guess I can put in three buttons, one for each option and have a listener.

The computer player needs to randomly select an option.

There needs to be an if/else statement for the win condition or tie condition.

Remember that you can make ifs for all wins and elses for the rest, no need to make a statement for every single outcome when you can blanket it with an else.

26/11/2022 - Nope, it's not comparing each of them as strings so it's true. Every time I use them in the console.log I call the function and thus randomize the values. It makes a situation where they are correct 33% of the time... I just need to have them be assigned to a variable and then call the variable.

I thought I could fix it by using const instead of let in the functions but it probably wipes the memory of the variable every time it finishes using the functions so it doesn't stay constant.

26/11/2022 - I was right, I should have changed it after. I'm using "===" to compare the returns of both functions and it is coming back true for everything. This, most certainly, is because it is looking if both objects are a string. 

26/11/2022 - I gave the computer random number function some if/else statements that convert the number to rock, paper, or scissors but I think it might be better and easier to do that outside the function to avoid confusion and mistakes.

25/11/2022 - Just made a function to randomize a number between 1 and 3 and it was very clumsy. Strangely clumsy. I'm going to keep doing it like this because it seems like the common way to do this but surprisingly roundabout for something so common.