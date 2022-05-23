import users from "./users.js"

const getUsersWithEyeColor = (users, color) => {
    
    return users.filter((user)=> {  
      return user.eyeColor === color ;
        
    });


};
console.log(getUsersWithEyeColor(users, 'blue'));
