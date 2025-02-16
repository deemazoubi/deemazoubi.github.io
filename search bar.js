function searchFunction() {
  var query = document.getElementById('search-bar').value.toLowerCase().trim();

  
  if (query === "flashcards") {
    window.location.href = "flashcards.html";  
  } else if (query === "journal") {
    window.location.href = "journal.html";  
  } else if (query === "dream meanings") {
    window.location.href = "dream meanings.html";  
  } else if (query === "calendar") {
    window.location.href = "calendar.html";  
  } else {
    alert("No results found for: " + query);  
  }
}

document.getElementById('search-bar').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {  
    searchFunction();  
  }
});
