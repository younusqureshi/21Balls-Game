function showAlert() {
   let person = prompt("Please enter your name", "Younus Qureshi");
  if (person != null) {
    document.getElementById("comp").innerHTML =
    "Hello " + person +"!! " + "Welcome to the game 21Balls";
  }
  
}

rule = document.getElementById("rules");
rule.innerText = "Click to read rules";

let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');
toggleBtn.onclick = function(){
    container.classList.toggle('active');
    console.log("clicked");
    
}
// function myFunction() {
//     let person = prompt("Please enter your name", "Younus Qureshi");
//     if (person != null) {
//       document.getElementById("comp").innerHTML =
//       "Hello " + person +"!! " + "Welcome to the game";
//       document.getElementById("btn").style.visibility ="hidden";
//       document.getElementsByClassName("toggleBtn").style.visibility="hidden";

//     }
//   }
//   function first(){
//   const yq = document.getElementById("first");
//   const btn1 = document.getElementById("btn1");
//   btn1.onclick = function () {
//     if (yq.style.display !== "none") {
//       yq.style.display = "none";
//     } else {
//       yq.style.display = "block";
//     }
//   };
// }


















function user(){
  let msg1 = document.getElementById("comp");
  msg1.innerText = "Its Your turn now..!!!";
}
function comp(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp1_c,5000);
  
  
  
}
function userlose(){
  let msg1 = document.getElementById("comp");
  msg1.innerText = "Oops, You lost..!!!";
}

function userwon(){
    let msg1 = document.getElementById("comp");
    msg1.innerText = "Hurrah, You Won..!!!";
  }

  


function inp1_u(){
    document.getElementById("one").style.visibility ="hidden";
    comp();
    
    
  }
  
function inp1_c(){
  // document.querySelectorAll("#two,#three,#four").style.visibility = "hidden";
  document.getElementById("two").style.visibility ="hidden";
  document.getElementById("three").style.visibility ="hidden";
  document.getElementById("four").style.visibility ="hidden";
  document.getElementById("five").style.visibility ="hidden";
  
  user();
}





function comp2(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp2_c,5000);
  
}
function inp2_u(){
  document.getElementById("one").style.visibility ="hidden";
  document.getElementById("two").style.visibility ="hidden";
  comp2();
}
  
function inp2_c(){
  document.getElementById("three").style.visibility ="hidden";
  document.getElementById("four").style.visibility ="hidden";
  document.getElementById("five").style.visibility ="hidden";
  user();
}





function comp3(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp3_c,5000);
  
}
function inp3_u(){
  document.getElementById("one").style.visibility ="hidden";
  document.getElementById("two").style.visibility ="hidden";
  document.getElementById("three").style.visibility ="hidden";
  comp3();
}
  
function inp3_c(){
  document.getElementById("four").style.visibility ="hidden";
  document.getElementById("five").style.visibility ="hidden";
  user();
}




function comp4(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp4_c,5000);
  
}
function inp4_u(){
  document.getElementById("one").style.visibility ="hidden";
  document.getElementById("two").style.visibility ="hidden";
  document.getElementById("three").style.visibility ="hidden";
  document.getElementById("four").style.visibility ="hidden";
  comp4();
}
  
function inp4_c(){
  document.getElementById("five").style.visibility ="hidden";
  user();
}

function comp6(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp6_c,5000);
  
}

function inp6_u(){
  document.getElementById("six").style.visibility ="hidden";
  
  comp6();
}
  
function inp6_c(){
  
  document.getElementById("seven").style.visibility ="hidden";
  document.getElementById("eight").style.visibility ="hidden";
  user();

}

function comp67(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp67_c,5000);
  
}

function inp67_u(){
  document.getElementById("six").style.visibility ="hidden";
  document.getElementById("seven").style.visibility ="hidden";
  
  comp67();
}
  
function inp67_c(){
  
  
  document.getElementById("eight").style.visibility ="hidden";
  document.getElementById("nine").style.visibility ="hidden";
  user();

}

function comp68(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp68_c,5000);
  
}

function inp68_u(){
  document.getElementById("six").style.visibility ="hidden";
  document.getElementById("seven").style.visibility ="hidden";
  document.getElementById("eight").style.visibility ="hidden";
  
  comp68();
}
  
function inp68_c(){
  document.getElementById("nine").style.visibility ="hidden";
  user();

}

function comp69(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp69_c,5000);
  
}

function inp69_u(){
  document.getElementById("six").style.visibility ="hidden";
  document.getElementById("seven").style.visibility ="hidden";
  document.getElementById("eight").style.visibility ="hidden";
  document.getElementById("nine").style.visibility ="hidden";

  
  comp69();
}
function inp69_c(){
document.getElementById("ten").style.visibility ="hidden";
document.getElementById("eleven").style.visibility ="hidden";
document.getElementById("twelve").style.visibility ="hidden";
user();

}
function comp9(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp9_c,5000);
  
}

function inp9_u(){
  document.getElementById("nine").style.visibility ="hidden";

  
  comp9();
}
function inp9_c(){
document.getElementById("ten").style.visibility ="hidden";
document.getElementById("eleven").style.visibility ="hidden";
document.getElementById("twelve").style.visibility ="hidden";
document.getElementById("thirteen").style.visibility ="hidden";
user();

}
function comp910(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp910_c,5000);
  
}

function inp910_u(){
  document.getElementById("nine").style.visibility ="hidden";
  document.getElementById("ten").style.visibility ="hidden";
  
  comp910();
}
function inp910_c(){

document.getElementById("eleven").style.visibility ="hidden";
document.getElementById("twelve").style.visibility ="hidden";

user();

}


function comp911(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp911_c,5000);
  
}

function inp911_u(){
  document.getElementById("nine").style.visibility ="hidden";
  document.getElementById("ten").style.visibility ="hidden";
  document.getElementById("eleven").style.visibility ="hidden";
  
  comp911();
}
function inp911_c(){

document.getElementById("twelve").style.visibility ="hidden";
document.getElementById("thirteen").style.visibility ="hidden";
document.getElementById("fourteen").style.visibility ="hidden";

user();

}


function comp912(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp912_c,5000);
  
}
function inp912_u(){
  document.getElementById("nine").style.visibility ="hidden";
  document.getElementById("ten").style.visibility ="hidden";
  document.getElementById("eleven").style.visibility ="hidden";
  document.getElementById("twelve").style.visibility ="hidden";
  comp912();
}
function inp912_c(){
document.getElementById("thirteen").style.visibility ="hidden";
user();

}

function comp10(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp10_c,5000);
  
}
function inp10_u(){
  document.getElementById("ten").style.visibility ="hidden";
  
  comp10();
}
function inp10_c(){
  document.getElementById("eleven").style.visibility ="hidden";
  document.getElementById("twelve").style.visibility ="hidden"; 
  document.getElementById("thirteen").style.visibility ="hidden";
  
user();

}


function comp101(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp101_c,5000);
  
}
function inp101_u(){
  document.getElementById("ten").style.visibility ="hidden";
  document.getElementById("eleven").style.visibility ="hidden";
  
  comp101();
}
function inp101_c(){
document.getElementById("twelve").style.visibility ="hidden"; 
user();

}
function comp102(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp102_c,5000);
  
}
function inp102_u(){
  document.getElementById("ten").style.visibility ="hidden";
  document.getElementById("eleven").style.visibility ="hidden";
  document.getElementById("twelve").style.visibility ="hidden"; 
  
  comp102();
}
function inp102_c(){
  document.getElementById("thirteen").style.visibility ="hidden"; 
  document.getElementById("fourteen").style.visibility ="hidden"; 
user();

}

function comp103(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp103_c,5000);
  
}
function inp103_u(){
  document.getElementById("ten").style.visibility ="hidden";
  document.getElementById("eleven").style.visibility ="hidden";
  document.getElementById("twelve").style.visibility ="hidden"; 
  document.getElementById("thirteen").style.visibility ="hidden"; 
  
  comp103();
}
function inp103_c(){
  
  document.getElementById("fourteen").style.visibility ="hidden"; 
  document.getElementById("fifteen").style.visibility ="hidden"; 
  document.getElementById("sixteen").style.visibility ="hidden"; 
  document.getElementById("seventeen").style.visibility ="hidden"; 
user();

}


function comp13(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp13_c,5000);
  
}
function inp13_u(){
  document.getElementById("thirteen").style.visibility ="hidden";
  comp13();
}
function inp13_c(){
  console.log("clicked");
  document.getElementById("fourteen").style.visibility ="hidden";
  document.getElementById("fifteen").style.visibility ="hidden";
  user();

}


function comp134(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp134_c,5000);
  
}
function inp134_u(){
  document.getElementById("thirteen").style.visibility ="hidden";
  document.getElementById("fourteen").style.visibility ="hidden";
  comp134();
}
function inp134_c(){
  document.getElementById("fifteen").style.visibility ="hidden";
  
  console.log("clicked");
  
  user();

}

function comp135(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp135_c,5000);
  
}
function inp135_u(){
  document.getElementById("thirteen").style.visibility ="hidden";
  document.getElementById("fourteen").style.visibility ="hidden";
  document.getElementById("fifteen").style.visibility ="hidden";
  comp135();
}
function inp135_c(){
 
  document.getElementById("sixteen").style.visibility ="hidden";
  document.getElementById("seventeen").style.visibility ="hidden";
  document.getElementById("eighteen").style.visibility ="hidden";
  console.log("clicked");
  
  user();

}
function comp136(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp136_c,5000);
  
}
function inp136_u(){
  document.getElementById("thirteen").style.visibility ="hidden";
  document.getElementById("fourteen").style.visibility ="hidden";
  document.getElementById("fifteen").style.visibility ="hidden";
  document.getElementById("sixteen").style.visibility ="hidden";
  comp136();
}
function inp136_c(){
 
  
  document.getElementById("seventeen").style.visibility ="hidden";
  document.getElementById("eighteen").style.visibility ="hidden";
  document.getElementById("nineteen").style.visibility ="hidden";
  document.getElementById("twenty").style.visibility ="hidden";
  console.log("clicked");
  
  user();

}


function comp14(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp14_c,5000);
  
}
function inp14_u(){
  document.getElementById("fourteen").style.visibility ="hidden";
  comp14();
}
function inp14_c(){
 document.getElementById("fifteen").style.visibility ="hidden";
  user();

}

function comp145(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp145_c,5000);
}
function inp145_u(){
  document.getElementById("fourteen").style.visibility ="hidden";
  document.getElementById("fifteen").style.visibility ="hidden";
  comp145();
}
function inp145_c(){
  document.getElementById("sixteen").style.visibility ="hidden";
  document.getElementById("seventeen").style.visibility ="hidden";
  document.getElementById("eighteen").style.visibility ="hidden";
  user();

}

function comp146(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp146_c,5000);
}
function inp146_u(){
  document.getElementById("fourteen").style.visibility ="hidden";
  document.getElementById("fifteen").style.visibility ="hidden";
  document.getElementById("sixteen").style.visibility ="hidden";
  comp146();
}
function inp146_c(){
  document.getElementById("seventeen").style.visibility ="hidden";
  user();

}


function comp147(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp147_c,5000);
}
function inp147_u(){
  document.getElementById("fourteen").style.visibility ="hidden";
  document.getElementById("fifteen").style.visibility ="hidden";
  document.getElementById("sixteen").style.visibility ="hidden";
  document.getElementById("seventeen").style.visibility ="hidden";
  comp147();
}
function inp147_c(){
  document.getElementById("eighteen").style.visibility ="hidden";
  document.getElementById("nineteen").style.visibility ="hidden";
  document.getElementById("twenty").style.visibility ="hidden";
  user();

}

function comp15(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp15_c,5000);
}
function inp15_u(){
 document.getElementById("fifteen").style.visibility ="hidden";
  comp15();
}
function inp15_c(){
  document.getElementById("sixteen").style.visibility ="hidden";
  document.getElementById("seventeen").style.visibility ="hidden";
  document.getElementById("eighteen").style.visibility ="hidden";
  user();
}

function comp156(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp156_c,5000);
}
function inp156_u(){
 document.getElementById("fifteen").style.visibility ="hidden";
 document.getElementById("sixteen").style.visibility ="hidden";
  comp156();
}
function inp156_c(){
  document.getElementById("seventeen").style.visibility ="hidden";
  document.getElementById("eighteen").style.visibility ="hidden";
  document.getElementById("nineteen").style.visibility ="hidden";
  document.getElementById("twenty").style.visibility ="hidden";
  user();
}

function comp157(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp157_c,5000);
}
function inp157_u(){
 document.getElementById("fifteen").style.visibility ="hidden";
 document.getElementById("sixteen").style.visibility ="hidden";
 document.getElementById("seventeen").style.visibility ="hidden";
comp157();
}
function inp157_c(){
  
  document.getElementById("eighteen").style.visibility ="hidden";
  document.getElementById("nineteen").style.visibility ="hidden";
  document.getElementById("twenty").style.visibility ="hidden";
  user();
}


function comp158(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp158_c,5000);
}
function inp158_u(){
 document.getElementById("fifteen").style.visibility ="hidden";
 document.getElementById("sixteen").style.visibility ="hidden";
 document.getElementById("seventeen").style.visibility ="hidden";
 document.getElementById("eighteen").style.visibility ="hidden";
comp158();
}
function inp158_c(){
  document.getElementById("nineteen").style.visibility ="hidden";
  user();
}

function comp18(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp18_c,5000);
}
function inp18_u(){
 document.getElementById("eighteen").style.visibility ="hidden";
comp18();
}
function inp18_c(){
  document.getElementById("nineteen").style.visibility ="hidden";
  document.getElementById("twenty").style.visibility ="hidden";
  user();
}

function comp189(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp189_c,5000);
}
function inp189_u(){
 document.getElementById("eighteen").style.visibility ="hidden";
 document.getElementById("nineteen").style.visibility ="hidden";
comp189();
}
function inp189_c(){
  document.getElementById("twenty").style.visibility ="hidden";
  userlose();
}

function comp182(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp182_c,5000);
}
function inp182_u(){
 document.getElementById("eighteen").style.visibility ="hidden";
 document.getElementById("nineteen").style.visibility ="hidden";
 document.getElementById("twenty").style.visibility ="hidden";
comp182();

}
function inp182_c(){
  userwon();
}



function comp19(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp19_c,5000);
}
function inp19_u(){
 document.getElementById("nineteen").style.visibility ="hidden";
comp19();
}
function inp19_c(){
  document.getElementById("twenty").style.visibility ="hidden";
  userlose();
}
// function inp19_c(){
  
  
// }



function comp192(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp192_c,5000);
}
function inp192_u(){
 document.getElementById("nineteen").style.visibility ="hidden";
 document.getElementById("twenty").style.visibility ="hidden";
comp192();
}
function inp192_c(){
  console.log("clciked");
  userwon();
}

function comp20(){
  let msg2 = document.getElementById("comp");
  msg2.innerText = "Its computer turn now..!!!";
  const myTimeout = setTimeout(inp20_c,5000);
}
function inp20_u(){
document.getElementById("twenty").style.visibility ="hidden";
comp20();
}
function inp20_c(){
  
  userwon();
}










// function userlose(){
//   let msg1 = document.getElementById("comp");
//   msg1.innerText = "oops, You lost..!!!";
// }

// function userwon(){
//     let msg1 = document.getElementById("comp");
//     msg1.innerText = "Hurrah, You Won..!!!";
//   }

// function generateRandom(min = 7, max = 10) {

//   // find diff
//   let difference = max - min;

//   // generate random number 
//   let rand = Math.random();

//   // multiply with difference 
//   rand = Math.floor( rand * difference);

//   // add with min value 
//   rand = rand + min;

//   return rand;
  
// }






