import React, {useEffect, useState} from "react";
import { connect } from "react-redux";


const PageTwo = ({getNumber,dispatch}) => {
    const [value, setValue] = useState({
        number : null
    });
    console.log(getNumber)
    return(
        <>
            <div  className="container">
                <div>
                    <h1 >Algoritma Bubble sort</h1>
                </div>
                <div  >
                    <h3>{getNumber.join(',')}</h3>
                </div>
            </div>
        </>
    )
}

const mapToProps=(state) => {
    return{
        getNumber : state.number.number
    }
}

export default connect(mapToProps)(PageTwo);