const user ={
    name:'Javascript',
    commute:{
        personal:{
            number:'0000'
        }
    }
};
console.log(user.commute);
console.log(user.commute?.private?.number);  