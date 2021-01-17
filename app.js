// Init Movie
const movie = new Movie;

// Init UI
const ui = new UI;

// Search input
const movieTitle = document.getElementById('movieTitle');

// Search input event listener
movieTitle.addEventListener('keyup', (e) => {
  // Get input 
 
  const userText = e.target.value;  

  if(userText !== ''){    
    // Make http call
    e.preventDefault() 
    movie.getMovie(userText)
      .then(data => {                 
        ui.showProfile(data.profile, userText);  
        
        
      })
    } else {
      // Clear profile
      ui.clearProfile();
    }

    
});

ui.nominate(); 
ui.removeNominate();  
