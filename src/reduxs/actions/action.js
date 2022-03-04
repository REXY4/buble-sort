export const BubleSortAction = (value, route, dispatch) => {
    let array = value;
 let buble = array.sort((i, j) => { return i - j })
  route.push("/pagetwo")
  return dispatch({
      type : "ADD_DATA",
      payload : buble
  })
} 


