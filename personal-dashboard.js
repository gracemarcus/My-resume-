function toggleTable() {
    const Icon = document.querySelector ("#arrow  i");

    if ( Icon.classList.contains("bx-right-arrow") ) {
        Icon.classList.remove("bx-right-arrow");
        Icon.classList.add("bx-down-arrow");
    }
      else {
        Icon.classList.remove("bx-down-arrow");
        Icon.classList.add("bx-right-arrow");
    } 

}
function toggleIcon() {
    const tableContainer = document.getElementById ("table-container");
    const dashboard = document.getElementsByClassName("side-bar")

    if (tableContainer.classList.contains("hidden")) {
        tableContainer.classList.remove("hidden"); 
        dashboard
    }
    else {
        tableContainer.classList.add("hidden");
    }
}
// script for uploading image 
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("add-photo");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

  

    