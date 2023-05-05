//? 1. Write a program that takes two user inputs for first and
//? last name using prompt and merge them in a new variable
//? titled fullName. Greet the user using his full name.

// var first=prompt("Enter first name:");
// var second=prompt("Enter second name:");
// var name=first+second;
// console.log(name);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobilePhone = prompt("Enter you Favourate mobile phone:");
// var a = mobilePhone.length
// console.log(a);

//? . Write a program to find the index of letter “n” in the word
//? “Pakistani” and display the result in your browser

// var country = "Pakistan";
// var a = country.indexOf("n")
// console.log(a);

//? 4. Write a program to find the last index of letter “l” in the
//? word “Hello World” and display the result in your browser

// var index = "Hello world";
// var a = index.lastIndexOf("d");
// console.log(a);

//? 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

// var country = "pakistan";
// var a =country[3];
// console.log(a);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser

// var sentences = "ali go to Hyderabad ";
// var a = sentences.replace("Hyderabad", "Islamabad");
// console.log(a);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”

// var message =  "Ali and Sami are best friends and They play cricket and football together";
// var a = message.replace(/and/g,"&")
// console.log(a);

//? 9. Write a program that converts a string “472” to a number  472.
//? Display the values & types in your browser.

// var string = "472";
// console.log(typeof string);
// var a = Number(string);
// console.log(a);
// console.log(typeof a);

//? 10. Write a program that takes user input. Convert and
//? show the input in capital letters.

// var user = prompt("Enter a name:");
// console.log(user.toUpperCase())

//? 12. Write a program that converts the variable num to string.
//? var num = 35.36 ;
//? Remove the dot to display “3536” display in your browser

// var  user = 35.36;
// var a = user.toString().replace(".","");
// console.log(a);

//? 13. Write a program to take user input and store username
//? in a variable. If the username contains any special symbol
//? among [@ . , !], prompt the user to enter a valid username.
//? For character codes of [@ .

// var user = prompt("Enter a store user name:");
// if (user == "@" || user == "." || user == "," || user == "!") {
//   prompt("Enter a valid user name:");
// }

// var userName = prompt("Enter your Input: ");
// checkValidName(userName);
// function checkValidName(un) {
//   var message;
//   var split = [];
//   var arr = [];
//   for (var i = 0; i < un.length; i++) {
//     split[i] = un.split("&nbsp;");
//     arr[i] = un.charCodeAt(i);
//     if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
//       message = "Correct User Name";
//     }
//     while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
//       alert("please enter a valid userName");
//       userName = prompt("Enter your Input: ");
//       split[i] = un.split("&nbsp;");
//       arr[i] = un.charCodeAt(i);
//       if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
//         message = "correct in";
//         break;
//       }
//     }
//   }
//   alert(message);
// }

//? 14. You have an array
//? A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//? Write a program to enable “search by user input” in an
//? array. After searching, prompt the user whether the given
//? item is found in the list or not.
//? Note: Perform case insensitive search. Whether the user
//? enters cookie, Cookie, COOKIE or coOkIE, program
//? should inform about its availability. Example

// var user = prompt("searching  fruits ").toLowerCase();
// var a = ["cake", "apple", "pie ", "cookie", "chips", " patties"];
// var match = "false";
// for (let i = 0; i<= a.length; i++){
//   if (a[i] == user) {
//     match = "true";
//     console.log(a[i] + " " +"available in index" + i);
//   }
// }
// if (match == "false") {
//   console.log("not found");
// }

//? 15. Write a program to take password as an input from
//? user. The password must qualify these requirements:
//? a. It should contain alphabets and numbers
//? b. It should not start with a number
//? c. It must at least 6 characters long
//? If the password does not meet above requirements,
//? prompt the user to enter a valid password.
//? For character codes of a-z, A-Z & 0-9, refer to ASCII
//? table at the end of this document

// while (true) {
//     let password = prompt("Enter a password:");
//     if (password.length < 6) {
//       alert("Password must be at least 6 characters long!");
//     } else if (isNaN(password[0])) {
//       alert("Password must start with an alphabet!");
//     } else if (/\d/.test(password)) {
//       alert("Password must contain at least one digit!");
//     } else if (/[^a-zA-Z0-9]/.test(password)) {
//       alert("Password must contain only alphabets and numbers!");
//     } else {
//       alert("Password is valid!");
//       break;
//     }
//   }

//? 16. Write a program to convert the following string to an
//? array using string split method.
//? var university = "University of Karachi";
//? Display the elements of array in your browser.

// var university = "University of Karachi";
// var a = university.split("");
// console.log(a);

//? 17. Write a program to display the last character of a user input.

// var inputStr = "pakistan";
// var a = inputStr.charAt(inputStr.length - 1 );
// console.log(a);

//? 18. You have a string “The quick brown fox jumps over the
//? lazy dog”. Write a program to count number of
//? occurrences of word “the” in given string.

// var inputStr = "The quick brown fox Jumps over the lazy dog".toLowerCase();
// var arrStr = inputStr.split(" ");
// var count = 0;
// for (var i = 0; i <= inputStr.length; i++) {
//   if (arrStr[i] === "the") {
//     count++;
//   }
// }
// console.log(count);