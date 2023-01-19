# Sprint 4.2 Level 1

## About the App

This app is the backend server of a dice game. The goal of the game is to throw two dice and get the sum of 7.
<br>
To be able to play, you need to first create a user, if no username is provided, 'anon' will be created to represent that player. Later you can modify with the PATCH method.
<br>
The user will be able to throw as many times as they want, and see the list of all their throws. Since many users can play, a ranking is also provided. With each user's win percentage and the global percentage.
<br>
I hope you enjoy.
<br>
<br>
Any questions, you can contact me at `gsvalient@gmail.com`

## How to Initialize the APP

### Pre-requisites

- Have NodeJS and NPM installed
- Have access to MySQL
- Know your PORT, USERNAME and PASSWORD
- Create a schema in MySQL (remember the name it will be used in a few steps)
- Have access to Postman

## INSTRUCTIONS

1. Clone the repo on your machine
2. Enter the app directory
3. Enter the `.env.template` file and add your proper values. It is important to rename this to `.env`
4. If the step above produces an error, enter the `db/db.connect.js` file. Follow the comment examples. Remember to use ''.
5. Head back to the root folder `sprint4.2Nivel1`, and run `npm i`. This will install all the dependencies.
6. run `npm start` to run the app

## POSTMAN

1. There is a directory called `postman` in the root folder.
2. In postman, import the json file found in step 1.
3. Now you will find all the queries required to use the app.
