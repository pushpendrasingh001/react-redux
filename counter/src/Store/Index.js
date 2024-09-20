
import {createStore} from 'redux'
const INITIALVALUE={
  counter:0
}
const counterReducer=(store=INITIALVALUE,action)=>{
  let newStore=store;
 if(action.type==='INCREMENT')
 {
  newStore={counter:store.counter+1}
 }
 else if(action.type==='DECREMENT')
  {
   newStore={counter:store.counter-1}
  }
  else if(action.type==='RESET')
    {
     newStore={counter:store.counter=0}
    }
    else if(action.type==='ADD')
      {
       newStore={counter:store.counter+Number(action.payload.num)}
      }
      else if(action.type==='SUBTRACT')
        {
         newStore={counter:store.counter-Number(action.payload.num)}
        }
    
    
  
  return newStore
}
const counterStore=createStore(counterReducer)
export default counterStore