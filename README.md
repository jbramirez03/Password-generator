# Password-generator
## Description
The first thing I did was make variables for the input the user makes when selecting criteria.
I then made different arrays each holding different values such as lower case letters, upper case letters, numbers and symbols.
I made a variable to link the button id to the script using a query selector,
then i added an event listener and a function.
I then made the main function that will run to creat the password and i worked inside that.
I used the variables that I made in the very beginning and added prompts inside them and confirm messages and that is how the user will select whether or not he/she wants a certain value in their password.
A variable was created in order to merge the arrays that met the criteria and this variable was named choices and I used concat in order to merge the arrays that were selected in the prompts.
I made a conditional where if no length was given the function would automatically end and then right after i added another conditional, this conditional made sure there was atleast one value given in the criteria and if it didnt it would give an alert message.
I then used different 'else if' conditionals for each option possibility and each concat result.
When first writing the code I had a console log inside each of these conditionals in order to see if each one was working properly.
After finishing all the possible outcomes from the selected criteria I made a for loop that looped the number value inputed from the user in the length option prompt.
In the for loop it had a math floor method and math random method in order to get a random whole number and using the length of the array it would give an element from the final merged array.
I then made an empty array which I then used in order to add the final result of all the random given elements into it using the unshift method, I then used the join method in order convert the elements in the array into one single string.
Lastly I made a function that inserted the final password into the textbox with the placeholder text 'your secure password'.
I then called the function and added comments to my script and html.

## Screenshots:
[Runnning live website](./Develop/images/screenshot-1.png)
[Length prompt](Develop/images/screenshot2.png)
[Return with alert if no value given](Develop/images/screenshot3.png)
[Lowercase option](Develop/images/screenshot4.png)
[Uppercase option](Develop/images/screenshot5.png)
[Number option](Develop/images/screenshot6.png)
[Symbol option](Develop/images/screenshot7.png)
[Password in textbox](Develop/images/screenshot9.png)

## Links
[local url](file:///Users/jason/Documents/classwork/Password-maker-3/Password-generator/Develop/index.html)
[Github](https://jbramirez03.github.io/Password-generator/)