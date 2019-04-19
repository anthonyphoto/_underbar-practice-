function unique(arr){
    return arr.filter((a, ind, arr) => arr.indexOf(a) === ind);
  }
  
  const arr = [1,2,3,3,4,2,5,6];
  unique(arr);
  