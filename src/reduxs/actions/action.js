export const BubleSortAction = (value, route, dispatch) => {
    var count = 0
    var length = array.length
  
    // traverse the array (length of array) times
    while (count !== length) {
      for (var i = length; i > count; i--) {
        var current = array[i]
        var left = array[i - 1]
  
        // delete element if value is null
        if (current === null) {
          array.splice(i, 1)
          continue
        }
  
        // swap
        if (left !== undefined && left > current) {
          array[i - 1] = current
          array[i] = left
        }
      }
      count++
    }
  return dispatch({
      type : "ADD_DATA",
      payload : array
  })
} 


