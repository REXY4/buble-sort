export const BubleSortAction = async (array, route, dispatch) => {
    var count = 0
    var length = array.length
    while (count !== length) {
      for (var i = length; i > count; i--) {
        var current = array[i]
        var left = array[i - 1]
  
       
        if (current === null) {
          array.splice(i, 1)
          continue
        }
  
        if (left !== undefined && left > current) {
          array[i - 1] = current
          array[i] = left
        }
      }
      count++
    }
  await dispatch({
      type : "ADD_DATA",
      payload : array
  })
  await route.push("/pagetwo")
} 


