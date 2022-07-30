let o ={a: 1, b: { name: "foo" },c:8};
let o2 = {a: 1, b: { name: "foo" },c:8};

let flag = true;
function deepEqual(o, o2) {
  if(o==null ||o2==undefined||o2==null ||o==undefined){
    return o===o2;
  }

  if (typeof (o) != "object" && typeof (o2) != "object") {
    if (o === o2) {
      return true;
    }
    else { return false; }
  }

 if (JSON.stringify(Object.keys(o))!=JSON.stringify(Object.keys(o2))) { 
    flag=false;
    }
  
  for (const i in o) {
  

    if (o[i] !== o2[i] &&( typeof (o[i]) != "object"||typeof (o2[i]) != "object") ) {
      flag= false;
    }
    else if (o[i] === o2[i]) {
      continue;
    }
    else if (typeof (o[i]) == "object" && typeof (o2[i]) == "object") {

        deepEqual(o[i], o2[i]);
    }

  }
 return flag;

}
console.log(deepEqual(o, o2));

