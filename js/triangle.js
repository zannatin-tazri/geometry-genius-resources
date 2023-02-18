// add eventlistener
document.getElementById('btn-triangle-calculation').addEventListener('click',function(){
// get value of base
const baseField=document.getElementById('triangle-base');
const base=baseField.value;

// get value of height
const heightField=document.getElementById('triangle-height');
const height=heightField.value;
 
// calculation
const areaOfTriangle=0.5*base*height;
areaOfTriangleWithTwoPrecision=areaOfTriangle.toFixed(2);
const calculationTriangleBtn=document.getElementById('calculated-triangle');
calculationTriangleBtn.innerText=areaOfTriangleWithTwoPrecision;
})


