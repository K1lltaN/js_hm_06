import users from "./users.js"

const calculateTotalBalance = users => {

  return   users.reduce((acc , user) =>   { return user.balance + acc },0)

}

console.log(calculateTotalBalance(users)); // 20916
