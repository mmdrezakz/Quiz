
import Header from "./Header"
import Main from "./Main"
import './App.css';
import Loader from "./Loader"
import Error from "./Error"
import Start from "./Start"
import Questions from "./Questions";
import Progress from "./Progress";
import Finish from "./Finish";




import { useEffect, useReducer } from "react";
// import { type } from "@testing-library/user-event/dist/type";
const questions1 = [
  {
    "question": "Which is the most popular JavaScript framework?",
    "options": ["Angular", "React", "Svelte", "Vue"],
    "correctOption": 1,
    "points": 10
  },
  {
    "question": "Which company invented React?",
    "options": ["Google", "Apple", "Netflix", "Facebook"],
    "correctOption": 3,
    "points": 10
  },
  {
    "question": "What's the fundamental building block of React apps?",
    "options": ["Components", "Blocks", "Elements", "Effects"],
    "correctOption": 0,
    "points": 10
  },
  {
    "question": "What's the name of the syntax we use to describe the UI in React components?",
    "options": ["FBJ", "Babel", "JSX", "ES2015"],
    "correctOption": 2,
    "points": 10
  },
  {
    "question": "How does data flow naturally in React apps?",
    "options": [
      "From parents to children",
      "From children to parents",
      "Both ways",
      "The developers decides"
    ],
    "correctOption": 0,
    "points": 10
  },
  {
    "question": "How to pass data into a child component?",
    "options": ["State", "Props", "PropTypes", "Parameters"],
    "correctOption": 1,
    "points": 10
  },
  {
    "question": "When to use derived state?",
    "options": [
      "Whenever the state should not trigger a re-render",
      "Whenever the state can be synchronized with an effect",
      "Whenever the state should be accessible to all components",
      "Whenever the state can be computed from another state variable"
    ],
    "correctOption": 3,
    "points": 30
  },
  {
    "question": "What triggers a UI re-render in React?",
    "options": [
      "Running an effect",
      "Passing props",
      "Updating state",
      "Adding event listeners to DOM elements"
    ],
    "correctOption": 2,
    "points": 20
  },
  {
    "question": "When do we directly \"touch\" the DOM in React?",
    "options": [
      "When we need to listen to an event",
      "When we need to change the UI",
      "When we need to add styles",
      "Almost never"
    ],
    "correctOption": 3,
    "points": 20
  },
  {
    "question": "In what situation do we use a callback to update state?",
    "options": [
      "When updating the state will be slow",
      "When the updated state is very data-intensive",
      "When the state update should happen faster",
      "When the new state depends on the previous state"
    ],
    "correctOption": 3,
    "points": 30
  },
  {
    "question": "If we pass a function to useState, when will that function be called?",
    "options": [
      "On each re-render",
      "Each time we update the state",
      "Only on the initial render",
      "The first time we update the state"
    ],
    "correctOption": 2,
    "points": 30
  },
  {
    "question": "Which hook to use for an API request on the component's initial render?",
    "options": ["useState", "useEffect", "useRef", "useReducer"],
    "correctOption": 1,
    "points": 10
  },
  {
    "question": "Which variables should go into the useEffect dependency array?",
    "options": [
      "Usually none",
      "All our state variables",
      "All state and props referenced in the effect",
      "All variables needed for clean up"
    ],
    "correctOption": 2,
    "points": 30
  },
  {
    "question": "An effect will always run on the initial render.",
    "options": [
      "True",
      "It depends on the dependency array",
      "False",
      "In depends on the code in the effect"
    ],
    "correctOption": 0,
    "points": 30
  },
  {
    "question": "When will an effect run if it doesn't have a dependency array?",
    "options": [
      "Only when the component mounts",
      "Only when the component unmounts",
      "The first time the component re-renders",
      "Each time the component is re-rendered"
    ],
    "correctOption": 3,
    "points": 20
  }
]


function reducer(state,action){
  switch (action.type) {
    case "recived":
      return {...state,questions:action.payload,status:"ready"}
    case "Notready":
      return {...state,status:"Notready",}
    case "Loading":
      return{...state,status:"Loading"}
    case "Active" : 
      return {...state,status:"Active"}
    case "Answer":
      const question = state.questions.at(state.index)
      return{...state,answer:action.payload,points: question.correctOption === action.payload ? state.points + question.points
         : state.points}
      case"Next":
      return{...state,index:state.index + 1,answer:null}
      case"Finish":
      return{...state,status:"Finish",}
      case"Restart":
      return{...state,index:0,answer:null,points:0,status:"Active",}
      case "Time":
      return{...state,timeToSecond:(state.timeToSecond === 0) ? 280 : Number(state.timeToSecond - 1),status: (state.timeToSecond === 0) ? "Finish" : "Active", }
    default:
      break;
  }
}
function App() {
  
  const initializer = {questions: [], status:"Loading",index:0,answer:null,points:0,timeToSecond:280}
  const[{questions,status,index,answer,points,timeToSecond},dispatch] = useReducer(reducer,initializer)
  const LenghtQuestions= questions.length;
  // const {questions,status} =state;
    
   useEffect(() =>{
    dispatch({type:"recived",payload:questions1})
   },[])


  return (
    <div className="app">
      <Header />
      <Main>
      {index < 15 && <Progress index={index} LenghtQuestions={LenghtQuestions} points={points} questions={questions} />}
      {status === "Notready" && <Error />}
      {status === "Loading" && <Loader />}
      {status === "ready" && <Start dispatch={dispatch} LenghtQuestions={LenghtQuestions} />}
      {status === "Active" && <Questions points={points} answer={answer} dispatch={dispatch} questions={questions[index]} index={index} timeToSecond={timeToSecond}/>}
      {status ==="Finish" && <Finish points={points}  questions={questions} dispatch={dispatch} />} 

      </Main>
    </div>
  );
}

export default App;
