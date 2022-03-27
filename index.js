function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

/*
- Create a function called wrapAdjective()
  - Give it a str parameter that defaults to "*"
  - Return a function
   - Takes a single parameter that defaults to "special"
   - Return a string. "You are *a param programmer*!"
*/
function wrapAdjective(str = "*") {
  let message = (param = "special") => {
    return `You are ${str}${param}${str}!`
  }
  return message;
}
