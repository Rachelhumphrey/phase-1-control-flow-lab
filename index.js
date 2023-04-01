function scuberGreetingForFeet(x) {
  if (x<=400) {
    return `This one is on me!`;
} else if (x > 400 && x < 2000) { 
      return `That will be twenty bucks.`;
} else if (x > 2000 && x < 2500) {
      return `I will gladly take your thirty bucks.`;
} else (x > 2500); {
      return `No can do.`;
}
}

function ternaryCheckCity(city) {
  let response=city==='NYC' ? 'Ok, sounds good.' : 'No go.'
  return response
}

function switchOnCharmFromTip(tip){
  switch(tip) {
  case "generous":
    return ('Thank you so much.');
  case "not as generous":
    return ('Thank you.');
  default:
    return ('Bye.')
  }
}