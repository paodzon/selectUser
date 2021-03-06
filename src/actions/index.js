import dummyapi from '../apis/dummyapi';

export const fetchData = () =>{
    return async(dispatch) =>{
        const response = await dummyapi.get('/user');

        dispatch({
            type:'FETCH_DATA',
            payload: response.data
        })
    }
}

export const fetchUser = (user) =>{
    return (dispatch) =>{
        dispatch({
            type:'FETCH_USER',
            payload:user
        })
    }
}