document.getElementById('btn-triangle-calculation').addEventListener('click',function(){
// get element of base
const baseField=document.getElementById('triangle-base');
const base=baseField.value;

// get element of height
const heightField=document.getElementById('triangle-height');
const height=heightField.value;
 
const area=0.5*base*height;
const calculationBtn=document.getElementById('calculated-triangle');
calculationBtn.innerText=area;
})


