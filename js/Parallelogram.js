document.getElementById('btn-parallelogram-calculation').addEventListener('click',function(){
    const b=10;
    const h=12;
    const areaOfparallelogram=b*h;

    const calculationParallelogramBtn=document.getElementById('calculated-parallelogram');
    calculationParallelogramBtn.innerText=areaOfparallelogram;
})