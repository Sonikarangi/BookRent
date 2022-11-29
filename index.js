// targets the input
let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
// targets the ouput
let titleResult = document.getElementById("title-result");
let authorResult = document.getElementById("author-result");
let isbnResult = document.getElementById("isbn-result");
// targets the button
let button = document.getElementById("btn");
button.addEventListener("click", exeCode);
function exeCode() {
  //  reset
  if (title.value === "" || author.value === "" || isbn.value === "") {
    alert("Complete all the fields: ");
  } else {
    // outputs
    titleResult.innerHTML += " - " + title.value;
    authorResult.innerHTML += " - " + author.value;
    isbnResult.innerHTML += " - " + isbn.value;

    title.value = "";
    author.value = "";
    isbn.value = "";
  }
}
