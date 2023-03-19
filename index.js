// Add JavaScript below
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://rdmianchklkpoglbndsd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkbWlhbmNoa2xrcG9nbGJuZHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NTc1NTgsImV4cCI6MTk5MzAzMzU1OH0.aAB5aDV4d3_JUCPlSYYSEi2YqW7Ei6ASLNblQFF5v7U';
const supabase = createClient(supabaseUrl, supabaseKey);

let {data: books, error} = await supabase
	.from('books')
	.select('*')

let tableNode = document.getElementById('books').children[0];

for (let book of books) {
  let row = document.createElement('tr');
  let entryOne = document.createElement('td');
  let entryTwo = document.createElement('td');
  let entryThree = document.createElement('td');
  let entryFour = document.createElement('td');
  entryOne.innerHTML = book.title;
  entryTwo.innerHTML = book.author;
  entryThree.innerHTML = book.isbn;
  entryFour.innerHTML = book.description;
  
  row.appendChild(entryOne);
  row.appendChild(entryTwo);
  row.appendChild(entryThree);
  row.appendChild(entryFour);
  tableNode.appendChild(row);
}
  