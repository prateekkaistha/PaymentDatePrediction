var addModal = document.getElementById("addModal");
var editModal = document.getElementById("editModal");
var deleteModal = document.getElementById("deleteModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    addModal = document.getElementById("addModal");
    editModal = document.getElementById("editModal");
    deleteModal = document.getElementById("deleteModal");

    btn = document.getElementById("myBtn");
    span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        addModal.style.display = "none";
      }
      
      window.onclick = function(event) {
        if (event.target == addModal) {
          addModal.style.display = "none";
        }
        if (event.target == editModal) {
          editModal.style.display = "none";
        }
        if (event.target == deleteModal) {
            deleteModal.style.display = "none";
          }
      } 

    //   window.onclick = function(event) {
    //     if (event.target == editModal) {
    //       editModal.style.display = "none";
    //     }
    //   } 

  });




function handleAddButton(){
    addModal.style.display = "block";
}

function handleEditButton(){
    console.log("EDIT MODAL")
    editModal.style.display = "block";
}

function handleDeleteButton(){
    console.log("DELETE MODAL")
    deleteModal.style.display = "block";
}

function handleCancelAdd(){
    addModal.style.display = "none";
}

function handleCancelEdit(){
    editModal.style.display="none";
}

function handleCancelDelete(){
    deleteModal.style.display="none";
}

function handlAddAdd(){
    let customer_name_add=document.getElementById('customer_name_add').value;
    let customer_no_add=document.getElementById('customer_no_add').value;
    let invoice_no_add=document.getElementById('invoice_no_add').value;
    let invoice_amount_add=document.getElementById('invoice_amount_add').value;
    let due_date_add=document.getElementById('due_date_add').value;
    let notes_add=document.getElementById('notes_add').value;

    console.log();
}
function handleClearAdd(){
    document.getElementById('customer_name_add').value ="";
    document.getElementById('customer_no_add').value="";
    document.getElementById('invoice_no_add').value="";
    document.getElementById('invoice_amount_add').value="";
    document.getElementById('due_date_add').value="";
    document.getElementById('notes_add').value="";
}