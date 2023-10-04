
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

  return (
    <>
    <span id='demo'></span>
     <div>Ankit {name}</div>
     <button onClick={abc}>Click alert</button>
     
    </>
  );
}

export default App;
