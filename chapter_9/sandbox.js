const scores = [10,30,15,25,50,40,5];

// const filteredScores = scores.filter(score => {
//   return score >20;
// })

// console.log(filteredScores);

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(user =>
  user.premium; // if its true its going to keep it in the array, if false it will kick it out.
)

console.log(premiumUsers);
