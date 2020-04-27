// Loading validations and info from local storage when DOM is ready
document.addEventListener('DOMContentLoaded', loading());


// Loading activities from local storage
function loading(){
     let activities;

     document.querySelector('#add').disabled = true;
     activities = readLocalStorage();
     if (activities != null)
     {
          activities.forEach(element => {
               addActivity(element);
          });
     }
};

// Validation quantity of letters on new activity
document.querySelector('#activity').addEventListener('keydown', function(e){
     if (document.querySelector('#activity').value.length > 2)
     {
          document.querySelector('#add').disabled = false;
     }
});

// Adding Event Listener over Form new Activity
document.querySelector('#add').addEventListener('click', function(e){
     e.preventDefault();
     const newActivity = document.querySelector('#activity').value;
     addActivity(newActivity);
     saveActivity(newActivity);
     document.querySelector('#activity').value = "";
});

// Creating New Activity on Pending List.
function addActivity(message){

     const ubication = document.getElementById('pending');
     let adding = document.createElement('div');
     adding.innerHTML = '<div class="alert alert-secondary alert-dismissible fade show" role="alert">' + `${message}` +'<button type="button" class="close delete" data-dismiss="alert" aria-label="Close" name="delete"><span aria-hidden="true" class="delete" title="delete">&times;</span></button></div>';
     ubication.appendChild(adding);
}

// Adding new activity to Local Storage
function saveActivity(message){
     let activities;
     let content = readLocalStorage(); 

     content.push(message);
     localStorage.setItem('activities', JSON.stringify(content));
}


// Delete from local Storage
document.querySelector('#pending').addEventListener("click", function(e){
     e.preventDefault;
     
     if (e.target.title == "delete" || e.target.name == "delete")
     {
          let memory = readLocalStorage();
          let toDelete = e.target.parentElement.parentElement.innerText;
          toDelete = toDelete.substring(0, toDelete.length -2 );
          
          memory.forEach(function(element, index){
               console.log("ELEMENT: " + element + " " + typeof element);
               console.log("A ELIMINAR: "+toDelete + " " + typeof toDelete);
               if( element == toDelete)
               {
                    console.log("ENTRE");
                    memory.splice(index, 1);
                    console.log("SPLICE:"+memory);
               }
          });

          localStorage.setItem('activities', JSON.stringify(memory));
     }
});

// Reading from Local Storage
function readLocalStorage() {
     let activities;

     activities = localStorage.getItem('activities');

     if (activities != null){
          return JSON.parse(activities);
     }
     else{
          return activities = [];
     }
     
};