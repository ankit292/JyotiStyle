
import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('Kumar');
  function abc() {
    setName('Verma');
  }
  //callback function but not run yet
  function myDisplaying(some){
   document.getElementById('demo')
  }
  function myCalculator(num1,num2,myCallback){
    let sum = num1 + num2 ;
    myCallback(sum);
  }
  myCalculator(5,5,myDisplaying);

  //filter method
  var arr = ['apple','orange','mango','apple','apple','grapes','pineapple','orange'];
  function removeDuplicate(arr){
    return arr.filter((item,index)=>
      arr.indexOf(item) === index
    );
  }
  console.log(removeDuplicate(arr));
  //Set method
  function rmvDblct(arr){
    return [...new Set(arr)]
  }
  console.log(rmvDblct(arr));
  //indexOf method
  function rmvDblct2(arr){
    var uniq = [];
    for(let i = 0; i < arr.length; i++){
      if(uniq.indexOf(arr[i]) === -1){
        uniq.push(arr[i]);
      }
    }
    return uniq;
  }
  console.log(rmvDblct2(arr))
//last night update 9 40
// for loop

for(let a = 1; a <= 5 ;a++){
  for(let b = 1; b <= a; b++){
    document.write(b)
  }
  document.write('<br>')
}

for(let a = 1; a <= 5;a++){
  let bc = a ;
  for(let b = 1; b <= bc;b++){
    document.write(a);
  }
  document.write('<br>')
}
for(let a = 5; a>= 1; a--){
  let bc = a;
  for(let b = 1; b <= bc; b++){
    document.write(bc);
  }
  document.write('<br>')
}
for(let a = 5; a>=1;a--){
  for(let b = a; b >=1;b--){
    document.write(b);
  }
  document.write('<br>')
}
for(let a = 5;a>=1; a--){
  for(let b = a;b<=5;b++){
    document.write(a);
  }
  document.write('<br>')
}
for(let a = 5;a>=1;a--){
  for(let b = 1;b<=a;b++){
    document.write(b);
  }
  document.write('<br>')
}

let Day;
 var date = new Date();
 var days = date.getDay()
 console.log(date.getDate())

 switch (days) {
  case 0:  Day = "Sunday";
    break;
    case 1:  Day = "Monday";
    break;
    case 2:  Day = "Tuesday";
    break;
    case 3:  Day = "Wednesday";
    break;
    case 4:  Day = "Thursday";
    break;
    case 5:  Day = "Friday";
    break;
    case 6:  Day = "Saturday";
    break;
 
  default:
    break;
 }
document.write(Day);
// ternary operator
let xv = 5;
let zv;
(xv > 10)? zv="true": zv="false";
console.log(zv);
// var prmt = confirm("this is Promt");
// alert(prmt)
// prmt? alert(true):alert(false)
document.write('<br>')
var tblData = [
  ['Ankit',28,'UI Developer','3 Years','3.5 LPA'],
  ['Rishabh',26,'Frontend Developer','3 Years','7 LPA'],
  ['Hemant',24,'UI/UX Designer', '2 Years','5 LPA']
]
// map method
var mapa = tblData.map((item,index)=>{
  return index + ' ' + item + '<br>';
}) 
document.write(mapa);

for(var aData = 0; aData < tblData.length;aData++){
  console.log(tblData)
}
//filter 
 var arrData = [18,23,12,14,20];
 var arrB = arrData.filter(chck);
 function chck(age){
  return age >= 18;
 }
 console.log(arrB);
 //forEach
 var feach = [18,23,12,14,20];
 feach.forEach(loop);
 function loop(value,index){
  document.write(index + ' : ' + value + '<br>');
 }
 //object
 var obj1 = {
  fname: 'Ankit',
  lname: 'Kumar',
  age: 28,
  fullName: function(){
   return this.fname + ' ' + this.lname
  }
 }
 console.log(obj1.fullName());
 //for in loop
 var obj2 = {
  fname: 'ankit',
  lname: 'kumar',
  age: 25,
  city: 'delhi'
 }
 for(var key1 in obj2){
  document.write(obj2[key1] + '<br>');
 }
//map method
var mapb = [
  {
    name: 'Ankit',
    age: 25,
    city: 'delhi',
    
  },
  {
    name: 'rishabh',
    age: 25,
    city: 'gaziyabad'
  }
];
var mapc = mapb.map((item,index)=>{
  return item.name ;
});
document.write(mapc)
// function mapFunc(x){
//   return x.name + x.age + x.city;
// }

//math method
// var matharr = [13,23,45,56,32]
var mathmax = Math.max(13,23,45,56,32);
console.log(mathmax);
var mathmin = Math.min(13,23,45,56,32);
console.log(mathmin);
// date method
var dt = new Date();
var todaydt = dt.toDateString();
console.log(todaydt);
var birthdt = dt.getDate() + '/' + (dt.getMonth()+1) + '/' + dt.getFullYear();

console.log(birthdt )




  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
          <th>Exp.</th>
          <th>CTC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> </td>
        </tr>
      </tbody>
    </table>
    <span id='demo'></span>
     <div>Ankit {name}</div>
     <button onClick={abc}>Click alert</button>
     {/* <span id=''>{cnd1}</span> */}
     
    </>
  );
}

export default App;
