// // add eventlistener
document.getElementById('btn-ellipse-calculation').addEventListener('click',function(){
    const a=10;
    const b=4;
    const areaOfEllipse=3.14*10*4;
    const areaOfEllipseWithTwoPrecision=areaOfEllipse.toFixed(2);
    // setting innerText
    const calculationEllipseBtn=document.getElementById('calculated-ellipse');
    calculationEllipseBtn.innerText=areaOfEllipseWithTwoPrecision;
})