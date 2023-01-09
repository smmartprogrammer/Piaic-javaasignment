// Q#1 == Install Node.js and VS Code on your computer.

// Q#2 == Personal Message: Store a person’s name in a variable, and print a message to that person. Your       message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

// var personName = 'Eric';

// console.log(
//   'Hello ' +
//     '' +
//     '' +
//     personName +
//     '' +
//     ' would you like to learn some Python today?',
// );

// Q#3 == Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// var personName = 'partab';

// console.log(personName.toLocaleLowerCase());
// console.log(personName.toLocaleUpperCase());

// let cap =
//   personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();

// console.log(cap);

// Q#4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// let quote = '“A person who never made a mistake never tried anything new.”';

// console.log('Albert Einstein once said ' + quote);

// Q#5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// let quote =
//   '“When pain, misery, or anger happen, it is time to look within you, not around you.”';

// let famous_person = 'Sadhguru';

// console.log(
//   'i like this quote: ' + '' + quote + '' + '\n\n' + famous_person + '!',
// );

//Q#6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// var personName = '\tRaghunathji\t\nRaghunathji';

// console.log(personName);

//Q#7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:

// console.log(5 + 3)

// Q#8 Your output should simply be four lines with the number 8 appearing once on each line.

// console.log(5 + 3);
// console.log(11 - 3);
// console.log(4 * 2);
// console.log(16 / 2);

//Q#9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// var favNum = 16;

// console.log('My favorite number is ' + favNum);

// Q#10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

/*
// This is my name
let myName = 'Partab';
console.log(myName);

// This is program is printing the current date:
let currentDate = new Date();
console.log(currentDate);
*/

// Q#11 == Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// var names = ['harshi', 'ashvin', 'chotu'];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// Q#12 == Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// var names = ['harshi', 'ashvin', 'chotu'];

// console.log('GREETINGS ' + names[0]);
// console.log('GREETINGS ' + names[1]);
// console.log('GREETINGS ' + names[2]);

// Q#13 == Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// var myTransportationMedium = ['car', 'Tesla', 'heavyBike', 'Porshe'];

// for (let i = 0; i <= myTransportationMedium.length; i++) {
//   console.log(
//     'My favourite mode of transportion is ' + myTransportationMedium[i],
//   );
// }

// Q#14 == Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// var myGuest = [
//   'Danial sir',
//   'Zeeshan Sir',
//   'Adeel Sir',
//   'Zia Sir',
//   'Heera madam',
// ];

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// Q#15 == Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// var myGuest = [
//   'Danial sir',
//   'Zeeshan Sir',
//   'Adeel Sir',
//   'Zia Sir',
//   'Heera madam',
// ];

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }
// console.log(
//   'due to some personal reason ' + myGuest[4] + ' can not come to our dinner',
// );

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// var myGuest = [
//   'Danial sir',
//   'Zeeshan Sir',
//   'Adeel Sir',
//   'Zia Sir',
//   'Heera madam',
// ];

// myGuest[4] = 'Ameen Sir';

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// • Print a second set of invitation messages, one for each person who is still in your list.

// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// Q#16 == More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }
// console.log(
//   'This is informing that, we have found bigger table now, so three new guest will going to join us',
// );

// • Add one new guest to the beginning of your array.

// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// myGuest.splice(0, 0, 'mohsin khalid');

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// • Add one new guest to the middle of your array.
// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// myGuest.splice(2, 0, 'Amir Pinger');

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// • Use append() to add one new guest to the end of your list.
// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// myGuest.push('Heera Khan');

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// • Print a new set of invitation messages, one for each person in your list.

// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// myGuest.splice(0, 0, 'mohsin khalid');

// myGuest.splice(2, 0, 'Amir Pinger');
// myGuest.push('Heera Khan');

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// Q#17==Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// myGuest.splice(0, 0, 'mohsin khalid');

// myGuest.splice(2, 0, 'Amir Pinger');
// myGuest.push('Heera Khan');

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// var myGuest = ['Danial sir', 'Zeeshan Sir', 'Adeel Sir', 'Zia Sir'];

// for (let i = 0; i < myGuest.length; i++) {
//   if (myGuest.length > 1) {
//     console.log();
//     myGuest.pop();
//     console.log(myGuest);
//   }
// }

// myGuest.pop(0, 0, 'mohsin khalid');

// myGuest.splice(2, 0, 'Amir Pinger');
// myGuest.push('Heera Khan');

// for (let i = 0; i <= myGuest.length - 1; i++) {
//   console.log('Hi, You are coordially invited to dinner with me ' + myGuest[i]);
// }

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// 18 -- Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// var placesExotic = ['kailas', 'maldive', 'srilanka', 'switzerland', 'avadh'];

// • Print your array in its original order.

// console.log(placesExotic);

// // • Print your array in alphabetical order without modifying the actual list.

// var placesSort = placesExotic.sort();

// console.log(placesSort);

// • Show that your array is still in its original order by printing it.

// var originalPlaces = placesExotic;
// console.log(originalPlaces);

// • Print your array in reverse alphabetical order without changing the order of the original list.

// var reverseOrder = placesExotic.reverse();
// console.log(reverseOrder);

// • Show that your array is still in its original order by printing it again.
// console.log(originalPlaces);

// • Reverse the order of your list. Print the array to show that its order has changed.

// console.log(originalPlaces.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// console.log(originalPlaces.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// var originalPlacesSorted = originalPlaces.sort();
// console.log(originalPlacesSorted);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// console.log(originalPlacesSorted.reverse());

// Q# 19 -- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Q# 20 --Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// var mountains = prompt('please enter  mountain elements name');
// var rivers = prompt('please enter rivers  elements name');
// var countries = prompt('please enter countries elements name');
// var cities = prompt('please enter cities elements name');
// var languges = prompt('please enter languages elements name');

// var elements = [mountains, rivers, countries, cities, languges];

// console.log(elements);

// 21 -- They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

// const person = {
//   firstName: 'Partab',
//   lastName: 'Parmar',
//   Age: 35,
//   Car: 'Mira',
// };

// // console.log(person);
// console.log(person.Age);
// console.log(person.lastName);
// console.log(person.Car);

// 22 -- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// var intentionalError = [45, 'apple', mango, 'fish'];

// console.log(intentionalError[1]);

//23 -- Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// var a = 3;
// var b = 6;
// console.log(a == 6);
// console.log(a === 6);
// console.log(a > 6);
// console.log(a === '3');
// console.log(a == b);
// console.log(a == '3');
// console.log(a == 3);
// console.log(a != 6);
// console.log(a !== 6);
// console.log(a < 6);
// console.log(a <= 6);

// 24 --More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
// var a = '45';

// console.log(a == 45);
// console.log(a === 45);

// • Tests using the lower case function
// var a = 'Raghunathji';
// console.log(a == 'Raghunathji');
// console.log(a == 'raghunathji');

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// var a = 5;
// var b = 9;
// console.log(a == 5);
// console.log(a === 5);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// • Tests using "and" and "or" operators

// var a = 60;
// var b = a > 50 && a < 70;
// var c = 80;
// var d = c > 50 && c < 70;
// console.log(b);

// console.log(d);

// var a = 60
// var b = a <50 || a >70
// console.log(b)

// var c = 80
// var d = c<50 ||c>70
// console.log(d)

// • Test whether an item is in a array
// • Test whether an item is not in a array

// var list = Number(prompt('please advise a number'));

// if (list > 50 && list <= 80) {
//   console.log('Number is in array');
// } else {
//   console.log('Number is not in array');
// }

// 25 -- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// var alien_color = prompt('what is the alient color');
// if (alien_color == 'green' || alien_color || 'yellow' || alien_color == 'red') {
//   console.log(' Player just earned 5 points');
// } else {
//   console.log('Player didnt earned any points');
// }

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// var alien_color = prompt('what is the alient color');
// if (alien_color == 'green' || alien_color || 'yellow' || alien_color == 'red') {
//   console.log(' Player just earned 5 points');
// }

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
