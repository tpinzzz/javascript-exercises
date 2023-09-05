const repeatString = function(str,num) {
   if (num < 0) {
    return "ERROR"
   }
   x = '';
   for (let i = 0; i < num; i++) {
      x = x + str;
   }    
   return x;
};

// Do not edit below this line
module.exports = repeatString;
