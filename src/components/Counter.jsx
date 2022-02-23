import React from 'react';
import { connect } from 'react-redux';
import { addCounter, minusCounter, resCounter } from '../redux/actions/CounterActions';

function Counter({counter,addCounter,minCounter,resetCounter}) {

    return (
        <div>
            <p>contador:{counter}</p>
           
            <button onClick={()=>addCounter()}>sumar state de conuter</button>
            <button onClick={()=>minCounter()}>restar state de conuter</button>
            <button onClick={()=>resetCounter()}>resetear state de conuter</button>

        </div>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addCounter:()=>dispatch(addCounter()),
        minCounter:()=>dispatch(minusCounter()),
        resetCounter:()=>dispatch(resCounter())
    }

}

const mapStateToPprops=(state)=>{
    const { CounterReducer} = state
    return{
        counter:CounterReducer.value
    }
}
export default connect(mapStateToPprops,mapDispatchToProps)(Counter);