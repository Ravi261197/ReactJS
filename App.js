import React,{useReducer} from 'react';
import './App.css';

const initialstate = {count: 0}

function reducer(state,action){
  switch(action.type){
    case 'increment':
      return {count: state.count +1 }
    case 'decrement':
      // return (states)=>{
      //   if (state.count === 0){
      //     console.log('aaaaaaaaaaaaaaaaaa')
      //       return (state.count) ;
      //       }
      //     else{
      //       states(state.count -1);
      //     };
      // }
      return{count: state.count -1}
    default:
      return{count: state.count }
  }
}
const App = () =>{
  const [state, dispatch] = useReducer(reducer,initialstate)

// const App = () =>{
//   const [counter, setCounter] = useState(0)

  // const increment = () =>{
  //   setCounter(counter + 1)
  // }
  // const decrement = () =>{
  //   setCounter(counter -1)
  // }
  return(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '500%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Counter App



      
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',

      }}>
        {/* {counter} */}
        Count:{state.count}
      </div>
      <div className='Decrement'>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor:'red',
          borderRadius: '8%',
          color: 'white',
        }}
        // onClick={decrement}>Decrement</button>
        onClick={() => dispatch({type:'decrement'})}>Decrement</button>



        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor:'green',
          borderRadius: '8%',
          color: 'white',
        }}
        // onClick={increment}>Increment</button>
        onClick={() => dispatch({type:'increment'})}>Increment</button>
      </div>
    </div>
  )
}


export default App;
