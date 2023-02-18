// add eventlistener
document.getElementById('btn-rhombus-calculation').addEventListener('click',function(){
    const d1=16;
    const d2=8;
    const areaOfRhombus=0.5*d1*d2;

    // setting innerText
    const calculationRhombusBtn=document.getElementById('calculated-rhombus');
    calculationRhombusBtn.innerText=areaOfRhombus;
})