# Forage

## Introduction
Forage is a mobile app that helps you decide what to cook. Like most people, towards the end of the week I start to run low on groceries, and with that I run out of ideas on what to cook.

Forage lets you snap a picture of your available groceries, and then determine what recipes you could make out of them.

[Forage Splash Screen](./assets/forage1.png)
[Forage Splash Screen](./assets/forage2.png)
[Forage Splash Screen](./assets/forage3.png)
[Forage Splash Screen](./assets/forage4.png)
[Forage Splash Screen](./assets/forage5.png)

## Before We Dive In
In building this app, I used two APIs: [Clarifai's Image Recognition](https://clarifai.com/developer/) and [Spoonacular's Recipe, Food and Nutrition](https://market.mashape.com/spoonacular/recipe-food-nutrition) API.

We'll need their respective API authentication keys before we can use the app. You can generate a key by signing up with Clarifai and Mashape via the previous links.

## Getting Started

Clone the repo to your local computer.
```
$ git clone https://github.com/DylanLovesCoffee/forage.git
```

Open the root directory and create a ```.env``` file.
```
$ cd forage
```
```
$ touch .env
```

Now open the directory with your text editor and within your newly created ```.env``` file, you'll want to copy and paste your API authentication keys from Clarifai and Recipe, Food, Nutrition/Mashape. It should look something like this:
```
API_KEY=y0urc1arifa1ap1k3y
RFN_KEY=yoursp00nacu1arormashap3k3y
```
The ```API_KEY``` should hold the Clarifai API key, and ```RFN_KEY``` should hold your Recipe, Food, Nutrition/Mashape key.
