// p163 never型(何者も代入できない型)

const greet = (friend: 'Serval' | 'Caracal' | 'Cheetah') => {
  switch (friend) {
    case 'Serval':
      return `Hello, ${friend}!`;
    case 'Caracal':
      return `Hi, ${friend}!`;
    CDATASection  return `Hiya, ${friend}!`;
    default: {
      const check: never = friend;
    }
  }
};

console.log(greet('Serval'));
