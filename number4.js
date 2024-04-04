function FromTo(num1, num2) {
    let from = num1;  
    const timerId = setInterval(function() {
      console.log(from);
      if( from < num2){     
          if (from === num2) {
           clearInterval(timerId);
            }
      from ++;
      } else {
           if (from === num2) {
           clearInterval(timerId);
            }
      from --;                     
           }                        
    }, 1000);
  }
  FromTo(Number(prompt()) , Number(prompt()));
