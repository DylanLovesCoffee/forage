# Forage

## Introduction
Forage is a mobile app that helps you decide what to cook. Like most people, towards the end of the week I start to run low on groceries, and with that I run out of ideas on what to cook.

Forage lets you snap a picture of your available groceries, and then determines what recipes you could make out of them.

<img src="https://github.com/DylanLovesCoffee/forage/blob/master/assets/forage1.PNG" width="250"> <img src="https://github.com/DylanLovesCoffee/forage/blob/master/assets/forage2.PNG" width="250">
<img src="https://github.com/DylanLovesCoffee/forage/blob/master/assets/forage3.PNG" width="250">
<img src="https://github.com/DylanLovesCoffee/forage/blob/master/assets/forage4.PNG" width="250">
<img src="https://github.com/DylanLovesCoffee/forage/blob/master/assets/forage5.PNG" width="250">

## Built With
- [React Native](https://facebook.github.io/react-native/)
- [Firebase](https://firebase.google.com/)
- [Clarifai API](https://clarifai.com/developer/)
- [Spoonacular's Recipe, Food and Nutrition API](https://market.mashape.com/spoonacular/recipe-food-nutrition)

The app was built entirely on the React Native framework, using Firebase for user authentication and database.

The Clarifai API was used to help indentify the ingredients in the user's photo, and the Spoonacular API was used to match those respective ingredients to recipes.

## Before We Dive In
We'll need the respective API authentication keys before we can use the app. You can generate a key by signing up with Clarifai and Mashape via the previous links.

We will also need to create a [Firebase](https://firebase.google.com/) account if you haven't already. Go ahead and make a new project in Firebase as well.

## Getting Started
1. Clone the repo to your local computer.
```
$ git clone https://github.com/DylanLovesCoffee/forage.git
```

2. Open the root directory, run ```npm install```, and we'll create a ```.env``` file to hold our API keys.
```
$ cd forage
$ npm install
$ touch .env
```

3. Within your newly created ```.env``` file, you'll want to copy and paste your API authentication keys from Clarifai and Recipe, Food, Nutrition/Mashape. It should look something like this:
```
API_KEY=y0urc1arifa1ap1k3y
RFN_KEY=yoursp00nacu1arormashap3k3y
```
The ```API_KEY``` should hold the Clarifai API key, and ```RFN_KEY``` should hold your Recipe, Food, Nutrition/Mashape key.

4. We'll create a file and a folder to hold our Firebase project information as well. From the root directory, run the following in your command line:
```
$ mkdir /components/services
$ touch /components/services/Firebase.js
```

5. In your ```Firebase.js```, it should look like the following:
```javascript
import React from "react";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: YourFirebaseAPIKey,
  authDomain: YourFirebaseProjectDomain,
  databaseURL: YourFirebaseDatabaseURL,
  projectId: YourFirebaseProjectID,
  storageBucket: YourFirebaseStorageBucket
};

firebase.initializeApp(firebaseConfig);

export default firebase;
```
6. After that, you should be all set to go. Simply run:
```
$ react-native run-ios
```
