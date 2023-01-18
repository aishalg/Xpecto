const oldvalue={
email:"",
displayname:"",
firstname:"",
image:"",
phonenumber:"",
fullname:"",
collegename:"",
degree:"",
branch:"",
referralcode:"",
}

const userinfo=(state =oldvalue,action)=>{
    const newstate=state;
    switch(action.type){
        case "userinfo":
            newstate=action.payload;
        default:
            return state;
    }
    return newstate;
}
export default userinfo;