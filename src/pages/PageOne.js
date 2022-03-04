import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { BubleSortAction} from "../reduxs/actions/action";
import { useHistory } from "react-router-dom";

const PageOne = ({getNumber,dispatch}) => {
    const [value, setValue] = useState({
        number : null
    });
    const [arrayValue, setArrayValue] = useState([]);
    let route = useHistory();
    const onChange = (e) => {
        e.preventDefault(e);
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
  
    };

   
 const handleAddValue = () =>  {
    return dispatch({
        type : "ADD_DATA",
        payload : arrayValue.push(value.number)
    })
}


  
    return(
        <>
            <div className="container">
                <div>
                    <div>
                        <input data-testid="input" type="number" name="number" onChange={(e)=>onChange(e)}/>
                    </div>
                    <div>
                        <button onClick={()=>handleAddValue()}>Add Data</button>
                    </div>
                   
                </div>
                <div>
                    <div>
                        <h1>Tampilkan data</h1>
                        <p>{arrayValue.join(",")}</p>
                    </div>
                </div>
                <div>
                        <button data-testid="button"  type="button" name="button" onClick={()=>BubleSortAction(arrayValue, route,dispatch)}>go to buble sort</button>
                </div>
            </div>
        </>
    )
}

const mapToProps=(state) => {
    return{
        getNumber : state.number
    }
}

export default connect(mapToProps)(PageOne);