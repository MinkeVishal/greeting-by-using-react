import React from "react";
import  ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date(2023, 8, 13, 16);
curDate = curDate.getHours();
let greeting = '';
const cssStyle = { };

if(curDate >= 1 && curDate < 12 ){
   greeting = 'Good Morning';
   cssStyle.color = 'orange';
}else if(curDate>=12 && curDate < 19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'Yellow';
}else{
  greeting ='Good Night';
  cssStyle.color = 'Black';
}


ReactDOM.render(
  <>
  <div>
     <h1>
      Hello sir, <span style={cssStyle}>{ greeting }</span>
      </h1>
  </div>
  </>,
  document.getElementById("root")
);
