import {print_backend} from"../../declarations/print_backend";
document.getElementById("balance").innerText =await print_backend.currbala() ;
document.getElementById("with-btn").addEventListener("click", async (e) => {
  var op = document.getElementById("op-am").value;
  op=parseInt(op);
  var cur2=await print_backend.withd(op);
  if(cur2==-1){
alert("Not enough balance");
  }
  else{
    document.getElementById("balance").innerText = cur2;

  }

  // const greeting = await hello_backend.greet(name0,name1);
  });
document.getElementById("topup-btn").addEventListener("click", async (e) => {
  var ip = document.getElementById("ip-am").value;
  ip=parseInt(ip);
  var cur1=await print_backend.topup(ip);
  // const greeting = await hello_backend.greet(name0,name1);
  document.getElementById("balance").innerText = cur1;
  
  });
  