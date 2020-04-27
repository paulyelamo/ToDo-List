
// Adding new Activity

document.querySelector('#add').addEventListener('click', function(e){
     e.preventDefault();
     const newActivity = document.querySelector('#activity').value;
     saveActivity(newActivity);
     addActivity(newActivity);
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

     activities = readLocalStorage();

     if (activities.length > 0){
          activities.push(message);
     }
     else{
          localStorage.setItem('activities', message);
     }

     
}


// Delete from local Storage

document.querySelector('#pending').addEventListener("click", function(e){
     e.preventDefault;
     
     if (e.target.title == "delete" || e.target.name == "delete")
     {
          console.log("ELIMINAR DEL LOCAL STORAGE");

     }

});

function delelteActivity (){
     let activity;

}

// Reading from Local Storage

function readLocalStorage() {
     let activities;

     activities = localStorage.getItem('activities');

     if (activities != null){
          return activities;
     }
     else{
          return activities = [];
     }
     
};