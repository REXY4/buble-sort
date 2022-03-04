export const BubleSortAction = async(value, route, dispatch) => {
    try {
        let array = value;
        for(var i = 0; i < array.length; i++){
            for(var j = 0; j < ( array.length - i -1 ); j++){
              if(array[j] > array[j+1]){
                var temp = array[j]
                array[j] = array[j + 1]
                array[j+1] = temp
              }
            }
          }
         
         await dispatch({
             type : "ADD_DATA",
             payload : array
         })
         await route.push("/pagetwo")
    } catch (error) {
        console.log(error)
    }
} 


