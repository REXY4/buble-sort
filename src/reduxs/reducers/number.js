const initialState = {
    number : null
};

const number = ( state = initialState , action) => {
    const {payload, type} = action
    switch (type){
        case "ADD_DATA" : 
        return {
            ...state,
            number : payload
        }
        default : 
        return state
        }
    
}

export default number;

