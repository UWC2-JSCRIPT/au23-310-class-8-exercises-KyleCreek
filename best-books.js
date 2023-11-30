const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const bookDisplay = document.getElementById("books-container");


// Fetch Homework 
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists'
const API_KEY = 'F0DYYfX3EAneOnBCXdgsItL6XYQmHAKD';
const url = `${BASE_URL}/${date}/hardcover-fiction.json?api-key=${API_KEY}`;

const bookContainer = document.getElementById('books-container');



formEl.addEventListener('submit', function(e) {
  // Prevents the Form From Submitting
  e.preventDefault();

  // Define the Values obtained from the Page
  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  
  // Convert the Data to the Format for the API Call and Translate the String
  const stringDate = `${year}-${month}-${date}`
  const url = `${BASE_URL}/${stringDate}/hardcover-fiction.json?api-key=${API_KEY}`;
  
  // Fetch bestselling books for date and add top 5 to page
	fetch(url)
		.then(function(data){
			return data.json();
	  })
    .then(function(jsonData){
      const bookArr = []
    
      // Grab The Books
      const book1 = jsonData['results']['books'][0];
      const book2 = jsonData['results']['books'][1];
      const book3 = jsonData['results']['books'][2];
      const book4 = jsonData['results']['books'][3];
      const book5 = jsonData['results']['books'][4];

      // Push Books to the Array
      bookArr.push(book1);
      bookArr.push(book2);
      bookArr.push(book3);
      bookArr.push(book4);
      bookArr.push(book5);
      return bookArr;
    })
    .then(function(inputList){
      // Loop Through the Books and Create a Div to the DOM
      for (let i=0; i < 5; i++){
        let book = inputList[i];
        console.log(book['description']);



        // Create New DOM Elements
        const newDiv = document.createElement("div");

        const uList = document.createElement('ul');

        const item1 = document.createElement('li');
        item1.innerText = 'Title: ' + book['title'];

        const item2 = document.createElement('li');
        item2.innerText = 'Author: ' + book['author'];
        
        const item3 = document.createElement('li');
        item3.innerText = 'Description: ' + book['description'];

        // Append The List Items to the list
        uList.append(item1);
        uList.append(item2);
        uList.append(item3);
        // Append the List to the Div
        newDiv.append(uList);
        // Add the Div to the Container. 
        bookContainer.append(newDiv);
      }
    })
});