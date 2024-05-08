# Lab 5 - Starter
Ishan

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Unit testing might not be the best way to fully test the "message" feature of a messaging application if the feature involves complex interactions. Unit tests are designed to test small, isolated pieces of code. The "message" feature, however, involves multiple components like 
User Interface, Network, Database. Since the feature requires integration of these components to function correctly, integration tests or end-to-end tests would be more suitable.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

A unit test would be suitable for testing the "max message length" feature of a messaging application. This feature is a specific function  that checks the length of the message against a defined maximum. The logic is straightforward, making it easy to write unit tests that input various strings to the function and verify whether it correctly accepts messages under 80 characters and properly handles or rejects longer messages.

https://ishxn20.github.io/Lab5/expose.html 
   
https://ishxn20.github.io/Lab5/explore.html
