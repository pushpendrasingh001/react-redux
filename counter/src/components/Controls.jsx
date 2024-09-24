import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Controls() {
  const dispatch=useDispatch()
  const inputElement =useRef()
  const Increment=()=>{
dispatch({type:'INCREMENT'})
  }
  const Decrement=()=>{
dispatch({type:'DECREMENT'})
  }
  const RESET=()=>{
    dispatch({type:'RESET'})
      }
      const Add=()=>{
        dispatch({type:'ADD',payload:{num:inputElement.current.value}})
        inputElement.current.value=""
          }
          const Subtract=()=>{
            dispatch({type:'SUBTRACT',payload:{num:inputElement.current.value}})
               inputElement.current.value=""
              }
  return (
    <>
    <div className='m-3'>
    <a href="#" className="btn btn-primary m-3" onClick={Increment}> +1</a>
   
    <a href="#" className="btn btn-danger" onClick={Decrement}>-1</a>
    <a href="#" className="btn btn-secondary margin" onClick={RESET}>Reset</a>
    </div>

<div className="input-group">
  <input type="text" className="form-control " placeholder="Enter Number Only"ref={inputElement} />
  <button className="btn btn-outline-primary button_size " type="button"  onClick={Add}>Add</button>
  <button className="btn btn-outline-danger button_size " type="button" onClick={Subtract}>Subtract</button>
</div>
    </>
  )
}

export default Controls
