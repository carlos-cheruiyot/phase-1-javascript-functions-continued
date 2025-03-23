// code your solution here
// 1. Saturday Fun Function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 2. Monday Work Function
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // 3. Wrap Adjective Function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Examples of usage:
  
  // 1. Testing saturdayFun
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("read a book")); // Output: "This Saturday, I want to read a book!"
  
  // 2. Testing mondayWork
  console
  
