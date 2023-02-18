// add eventlistener
document.getElementById('btn-pentagon-calculation').addEventListener('click',function(){
    const p=6;
    const b=10;
    const areaOfPentagon=0.5*p*b;
    const areaOfPentagonWithTwoPrecision=areaOfPentagon.toFixed(2);
    // setting innertext
    const calculationPentagonBtn=document.getElementById('calculated-pentagon');
    calculationPentagonBtn.innerText=areaOfPentagonWithTwoPrecision;
})