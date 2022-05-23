import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc , user ) =>   { return acc.concat(user.skills) },[])
    .sort()
    .filter((el, id, arr) => arr.indexOf(el) === id)
};

  console.log(getSortedUniqueSkills(users));
