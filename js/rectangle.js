// // add eventlistener
document.getElementById('btn-rectangle-calculation').addEventListener('click',function(){
    // get value of weight
    weightField=document.getElementById('rectangle-weight');
    const weight=weightField.value;

    // get value of length
    lengthField=document.getElementById('rectangle-length');
    const length=lengthField.value;

    // calculation
    const areaOfRectangle=weight*length;
    const calculationRectangleBtn=document.getElementById('calculated-rectangle');
    calculationRectangleBtn.innerText=areaOfRectangle;
})