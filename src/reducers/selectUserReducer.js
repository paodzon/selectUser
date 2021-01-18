const selectUserReducer = (selectedUser=null, action) =>{
    if(action.type ==='FETCH_USER'){
        return action.payload;
    }
    return selectedUser;
}

export default selectUserReducer
