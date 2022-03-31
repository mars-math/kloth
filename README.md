Project created with [`React`](https://github.com/facebook/react)
# Project Kloth

## Table of Contents
- [Getting Started](#getting-started)
  - [1. Installing Dependencies](#1-how-to-install-dependencies)
  - [2. Running the Project](#2-running-the-project)
- [Project Details](#project-details)
- [Contributers](#contributors)
- [How to Contribute](#how-to-contribute)

## Getting Started
Kloth is a single page e-commerce web application created utilizing React and Node/Express. This project was created by a team of four engineers.
#### Built With
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![image](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

#### 1. How to Install Dependencies
```bash
npm install
```

#### 2. Running the Project
Runs development server:
```bash
npm run build:dev
npm run start:dev
# or
yarn build:dev
yarn start:dev
```
The application will be running on [http://localhost:3000](http://localhost:3000).
This script will also run webpack and auto refresh the page whenever you make changes.


## Project Details

<details>
  <summary>Overview</summary>
	
- #### Product Information
	
  The top right will have essential product information such as category, name, price, and average star ratings (if reviews exist). 
- #### Image Gallery
	
  Shoppers can see in the image gallery the photos of the current product and its default style. There is a bar to the left of the image gallery that contains more       photos for the shopper to look through. Clicking on the main image will also generate a closable popup of that image. 
- #### Style Selector
	
  Each product can have multiple styles, and they will appear as bubbles users can select between. Selecting a new style will also change the image gallery to reflect   a new set of photos.
	
- #### Add to Cart
	
  If a style is in stock, the size and quantity dropdowns will allow selection and shoppers can add to cart.
	
- #### Share to Facebook, Twitter, and Pinterest
</details>

<details>
  <summary>Ratings and Reviews</summary>
  
- #### See list of reviews for current product 2 at a time
- #### Write new review

![read and write review](./public/gifs/reviews/reviews_render_and_write.gif)

- #### Filter list of reviews by star count, helpfulness, and most recent

![filtering reviews](./public/gifs/reviews/reviews_filters.gif)
</details>

<details>
  <summary>Questions & Answers</summary>
	
  - #### Questions List
	
  Displays a list of up to 4 questions about an item. By clicking additional questions, you 
  can render the rest of the questions. All questions are sorted by their helpful rating.
	
  - #### Individual Question
	
  Each question can be marked as helpful or reported to be removed. Each question will  also show up to 2 corresponding answers where more can be generated by clicking   more answers. Answers from the seller will be prioritized to the top of the list. 
	
  - #### Search Questions
	
  You can search for specific questions in the search bar that will filter the list to only those  that match the search.
	
  - #### Add a Question
	
  Modal pop out that will allow the user to add a question for a given product.
	
  - ####  Add an Answer Modal
	
  Modal pop out that will allow the user to add an answer for a given question.
	
</details>

## Contributors
* [Alex Hu](https://github.com/gunpowder66)
* [Rockwell Allen](https://github.com/Rockwell55)
* [Sarah Ma](https://github.com/sarahma123)
* [Matthew Tanaka](https://github.com/matttanaka)

## How to Contribute

## Learn More
To learn more about React.js, take a look at the following resources:
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn about React.js features and API.
- [Learn React.js](https://reactjs.org/tutorial/tutorial.html) - an interactive React.js tutorial.
- You can check out [the React.js GitHub repository](https://github.com/facebook/react)




