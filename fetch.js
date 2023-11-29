const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');


// Fetch Homework 
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists'
const API_KEY = 'F0DYYfX3EAneOnBCXdgsItL6XYQmHAKD';
const url = `${BASE_URL}/${date}/hardcover-fiction.json?api-key=${API_KEY}`;

const bookContainer = document.getElementById('books-container');



formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  
  const stringDate = `${year}-${month}-${date}`
  const url = `${BASE_URL}/${stringDate}/hardcover-fiction.json?api-key=${API_KEY}`;
  console.log(url);

  // Fetch bestselling books for date and add top 5 to page
	let test=fetch(url)
		.then(function(data){
			return(data.json());
	});

	console.log(test);
