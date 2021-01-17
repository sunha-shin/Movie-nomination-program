class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  // Show userinput movies
  showProfile(movie, userText){
    
    document.getElementById('p').innerHTML = '';
    document.getElementById('reul').innerHTML = '';
    
    let searchResults = movie.Search; 

    document.getElementById('input').innerHTML = `"${userText}"`;        

    if(movie.Response === 'False'){                
      const err1 = 'Movie not found!';
      const err2 = 'Too many results.';
      let err = (movie.Error === err1) ? err1 : err2;     
      document.getElementById('p').innerHTML = ` 
        <h6>${err}</h6>            
      `;      
    }else {      
      for(var i=0; i < searchResults.length; i++){  
        document.getElementById('reul').innerHTML += `          
        <li> ${searchResults[i].Title} (${searchResults[i].Year}) 
          <button type="button" 
                  class="btn btn-warning btn-sm" 
                  id="${searchResults[i].imdbID}"}>
            Nominate
          </button>
        </li>          
      `;

    localStorage.setItem(
      searchResults[i].imdbID,
      `${searchResults[i].Title} (${searchResults[i].Year}) ` );     
      
      } // end of for
    } // end of if
  } // end of show file


  // Nominate
  nominate() {  
    let flag = 5;
    localStorage.setItem("flag", flag);    

    document.body.addEventListener('click', (e) => {  
      flag = localStorage.getItem("flag");  
      // Listening which button is clicked
      if(e.target.className === 'btn btn-warning btn-sm' && flag>0){
        e.target.disabled = true;        

        const movieid = e.target.id;
        const moviename = localStorage.getItem(movieid);  

        const ul = document.getElementById('nomul');  
        const li = document.createElement('li');

        li.innerHTML += `
        ${moviename} <button type="button" 
        class="btn btn-outline-secondary btn-sm"
        id="R${movieid}"}>Remove
        `;        
        ul.appendChild(li);

        flag--;
        localStorage.setItem("flag", flag);
        console.log("NOminate flag", flag);
       }else if(flag == 0){
        this.addBanner();
       }       
            
    });
  }

  removeNominate() {
    document.body.addEventListener('click', (e) => {
    var nomid = e.target.id;
    if(e.target.className === 'btn btn-outline-secondary btn-sm'){      
      var resultid = nomid.replace('R','');
      var resultbtn = document.getElementById(resultid);
      resultbtn.disabled = false;
      e.target.parentElement.remove();     
      var flag = localStorage.getItem("flag");
      flag++;
      localStorage.setItem("flag", flag);   
    }else if(localStorage.getItem("flag")==0){
      this.addBanner(flag);
    }

    })

  }

  addBanner(flag){
    console.log("Add banner is working");
    const divBanner = document.getElementById('banner1');
    if(flag==0){  
    divBanner.innerHTML =
    `
    <nav class="navbar navbar-dark bg-success mb-3">
      <div class="container">
        <a href="#" class="navbar-brand">You have five nominations</a>
      </div>  
    </nav>
    `
  }   
  
  }

  clearProfile() {
    document.getElementById('input').innerHTML = '';
    document.getElementById('p').innerHTML = '';
    document.getElementById('reul').innerHTML = '';    
  }
 
}

