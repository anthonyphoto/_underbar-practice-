function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };

//   function debounce(fn, tm){
//     let timeout;

//     return function() {
//         const context = this;
//         const args = arguments;
//         const runFn = _ => {
//             fn.apply(context, args);
//             timeout = null;
//         }
//         clearTimeout(timeout);
//         timeout = setTimeout(runFn, tm);
//     }
// }