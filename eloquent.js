Eloquent Javascript - 3 Functions - Exercises

Minimum
function min(a, b){
  if(a < b)
    return a;
  else
    return b
}

Recursion
function isEven(a){
  if(a % 2)
    return true;
  else if(a % 1)
    return false;
  else
    return isEven(a * 2);
  }
}

Bean counting
function countBs(B){
  var i = 0;
  var j = 0;
  while(i < B.length){
    if("B" === B.charAt(i))
      j++;
    ++i;
  }
  return j;
}

function countChar(str, target){
  var i = 0;
  var j = 0;
  while(i < str.length){
    if(target === str.charAt(i))
      j++;
    i++;
  }
  return j;
}

