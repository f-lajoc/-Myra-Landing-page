let count = 0;
let indexEl = document.getElementById("index");
let saveEl = document.getElementById("enteries");

/* Increment Button */
function increment(){
  indexEl.innerText = count += 1;
   /* count = count + 1 */
}

/* Decrement Button */
function decrement(){
  indexEl.innerText = count -= 1;
  
}
   
/* Save Button */
function save(){
  saveEl.innerHTML += count + " - ";
 /* use innerHTML or textContent because innerText will not give equal spaces between our count and - */
  indexEl.innerText = 0;
  count = 0;
}
