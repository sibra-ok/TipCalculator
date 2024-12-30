console.log('hi')

let Bill=document.getElementById('Bill');
let People=document.getElementById('people')
let select=document.querySelectorAll('.tipValue');
let custom=document.getElementById('custom')
let reset=document.getElementById('reset');


custom.addEventListener('input',function(e){
custom.innerHTML=custom.value;
});



select.forEach(element=>{
element.addEventListener('click', (event) => {
let Bill=document.getElementById('Bill').value;
let People=document.getElementById('people').value;
let calculate=document.querySelector('.color');
let custom=document.getElementById('custom').value;
let error=document.getElementById('error');
let tipPerson=document.getElementById('tipPerson');
let billPerson=document.getElementById('billPerson');
let borderError=document.getElementById('people')
if(People==""){
alert('please fill the number of People First')
}
else if(People==0){
error.innerHTML=`Can't be zero`;
borderError.classList.add('border');
}
else{
console.log('clicked');
select.forEach(el=>{
el.classList.remove('color');
})
element.classList.add('color');
error.innerHTML="";
let Bill=document.getElementById('Bill').value;
let People=document.getElementById('people').value;
let calculate=document.querySelector('.color');
let button=calculate.textContent;
let NUMBER=parseInt(button)
let TipPerson=Bill/100*NUMBER/People;
let reset=document.getElementById('reset');
tipPerson.innerHTML='$'+TipPerson;
let BillPerson=Bill/People+TipPerson;
console.log(button);
console.log(TipPerson);
console.log(BillPerson);
billPerson.innerHTML='$'+BillPerson;
if(billPerson.innerHTML==0&&billPerson.innerHTML==""){
console.log('wrong');
}
//else if(isNaN(billPerson.innerHTML)){
//console.log('Nan')
//billPerson.innerHTML=''
//tipPerson.innerHTML=''
//}
else{
reset.classList.add('color')
}
};
});
})


custom.addEventListener('click',function(e){
let custom=document.getElementById('custom');
let billPerson=document.getElementById('billPerson');
let tipPerson=document.getElementById('tipPerson');
if(custom.value==""){
custom.classList.remove('color');
billPerson.innerHTML=""
tipPerson.innerHTML="";
reset.classList.remove('color')
}
});


reset.addEventListener('click',function(e){
location.reload();
})