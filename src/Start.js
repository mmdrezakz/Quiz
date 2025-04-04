import { type } from "@testing-library/user-event/dist/type";

export default function startTransition({dispatch,LenghtQuestions}){
    return(
        
        <div className="start">
        <h2>Welcome To The react Quiz</h2>
        <h3>{LenghtQuestions} Question to Test for React Mastery</h3>
        <button  onClick={() => dispatch({type:"Active",})} className="btn btn-ui">Let's Start</button>
        </div>
    )
}
