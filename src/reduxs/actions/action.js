export const BubleSortAction = async (value, route, dispatch) => {
    let array = value;
 let buble = array.sort((i, j) => { return i - j })
 await dispatch({
     type : "ADD_DATA",
     payload : buble
    })
    await route.push("/pagetwo")
} 


