// add eventlistener
document.getElementById('btn-pentagon-calculation').addEventListener('click',function(){
    const p=6;
    const b=10;
    const areaOfPentagon=0.5*p*b;

    // setting innertext
    const calculationPentagonBtn=document.getElementById('calculated-pentagon');
    calculationPentagonBtn.innerText=areaOfPentagon;
})