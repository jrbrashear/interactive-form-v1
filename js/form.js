//form.js
function fetchId(elem) {
  return document.getElementById(elem);
}

//set focus to name----------------/

function setFocus(name) {
document.getElementById(name).focus();
}
setFocus('name');
//remove post back behavior from enter key press and advise user to use Tab key
const form = fetchId('form');
form.addEventListener('submit', (e) => {
  {e.preventDefault();}
});
//add alert box if enter is pressed
form.addEventListener('keydown', (e) => {
  if(e.keyCode == 13){ alert("Please Use 'Tab' key to advance")}
});
//add variables --------for job role section
let jobRole = fetchId("title");
let otherJobRole;
let userTitle = fetchId('jobRoleSection');
//set jobRole to default of first option
jobRole.selectedIndex = 0 ;
//add event listener and html text field if other is selected/
fetchId('title').addEventListener("change", function (e){
  if(jobRole.selectedIndex == 5){
    let text = document.createElement('input');
    text.type = 'text';
    userTitle.appendChild(text);
    text.id = "other-title";
    text.placeholder = "Your Job Role";
    text.addEventListener('keydown', (e) => {
        if(e.keyCode == 9){
        otherJobRole = text.value;
        }
    });

  }
//remove text input if selected in error-----
  if(jobRole.selectedIndex < 5 &&
    fetchId('jobRoleSection').lastElementChild.id == "other-title"){
      console.log("remove");
      jobRoleSection.lastElementChild.remove();
  }
});

//Shirt Selection --------------------------
const shirtSize = fetchId("size");
const design = fetchId("design");
const color = fetchId("color");
const cornflowerblue = color[0];
const darkslategrey = color[1];
const gold =color[2];
const tomato = color[3];
const steelblue = color[4];
const dimgrey = color[5];

design.addEventListener('change', (e) => {

  if(design.selectedIndex == 1){
    for (let i=3; i<=5; i++){
       color.lastElementChild.remove();
    }
    //add colors if all have been removed
    if(color.firstElementChild == null) {
      color.appendChild(cornflowerblue);
      color.appendChild(darkslategrey);
      color.appendChild(gold)
    }
  }

  if(design.selectedIndex == 2){
    for (let i=3; i<=5; i++){
       color.lastElementChild.remove();
    }
    //add colors if all have been removed
    if(color.firstElementChild == null) {
      color.appendChild(tomato);
      color.appendChild(steelblue);
      color.appendChild(dimgrey);
    }
  }
});
//activities section ----------------
function getLabel(elem) {
  return document.getElementById(elem + 'Label')
}


const activities = fetchId("activities");
activities.addEventListener("change", (e) => {
  const all = fetchId("all");
  const allPrice = 200;
  const frameworks = fetchId("frameworks");
  const frameworksPrice = 100;
  const libs = fetchId("libs");
  const libsPrice = 100;
  const express = fetchId("express");
  const expressPrice = 100;
  const node = fetchId("node");
  const nodePrice = 100;
  const build = fetchId("build");
  const buildPrice = 100;
  const npm = fetchId("npm");
  const npmPrice = 100;

  let total = 0;

  if (all.checked) {
    total = total + allPrice;
    console.log(total);
  }

  if(frameworks.checked) {
    total = total + frameworksPrice;
    console.log(total);
    getLabel("express").style.color = "grey";
    express.disabled = true;
  } else {
    getLabel("express").style.color = "";
    express.disabled = false;
  }

  if(libs.checked) {
    total = total + libsPrice;
    console.log(total);
    getLabel("node").style.color = "grey";
    node.disabled = true;
  } else {
    getLabel("node").style.color = "";
    node.disabled = false;
  }

  if(express.checked) {
    total = total + expressPrice;
    console.log(total);
    getLabel("frameworks").style.color = "grey";
    frameworks.disabled = true;
  } else {
    getLabel("frameworks").style.color = "";
    frameworks.disabled = false;
  }

  if (node.checked) {
    total = total + nodePrice;
    console.log(total);
    getLabel("libs").style.color = "grey";
    libs.disabled = true;
  } else {
    getLabel("libs").style.color = "";
    libs.disabled = false;
  }

  if (build.checked) {
    total = total + buildPrice;
    console.log(total);
  }

  if(npm.checked) {
    total = total + npmPrice;
    console.log(total);
  }

  if (activities.lastElementChild.id == "npmLabel") {
  let label = document.createElement('label');

  activities.appendChild(label);
  label.id = "total";
  label.textContent = "Total: $" + total;
} else {
  activities.lastElementChild.textContent = "Total: $" + total;
}

});
// payment section

const payment = fetchId("payment");
const creditCard = fetchId("credit-card");
const payPal = fetchId("payPal");
const bitcoin = fetchId("bitcoin");


payment.addEventListener("change", (e) => {
  if (payment.selectedIndex == 2 || payment.selectedIndex == 3){
    creditCard.style.display = "none";
  } else {
    creditCard.style.display = "";
  }
  if (payment.selectedIndex == 1 || payment.selectedIndex == 3) {
    payPal.style.display = "none"
  } else {
    payPal.style.display = "";
  }
  if (payment.selectedIndex == 1 || payment.selectedIndex == 2) {
    bitcoin.style.display = "none";
  } else {
    bitcoin.style.display ="";
  }


});



//validation
const button = fetchId('submit');
let address = document.getElementById('mail').value;

button.addEventListener('click', (e) => {
  if (fetchId('name').value.length == 0) {
    fetchId('name').style.borderColor = 'red';
  } else {
    fetchId('name').style.borderColor = "#c1deeb";
  }

})
