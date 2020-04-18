
document.querySelector('#add').addEventListener('click', function(e){
     e.preventDefault();
     const newActivity = document.querySelector('#activity').value;
     console.log(newActivity);
     addActivity(newActivity);
});

function addActivity(message){
     let ubication = document.getElementById('pending').lastElementChild;
     console.log(ubication);

     const toAdd = document.createElement('div');
     toAdd.className = 'alert alert-secondary alert-dismissible fade show';
     toAdd.setAttribute('role', 'alert');
     toAdd.textContent = message;

}