import Options from "./Options";
import NextButton from "./NextButton";
import Time from "./Time"


export default function Questions({questions,dispatch,answer,points,index,timeToSecond}){
    
    return(
        <div>
            {(index < 15) ? <>
                <h4>{questions.question}</h4>
            <Options points={points} answer={answer}  questions={questions} dispatch={dispatch}/>
            <Time dispatch={dispatch} timeToSecond={timeToSecond}/>
            <NextButton dispatch={dispatch} answer={answer}  />
            </> :dispatch({type:"Finish",})}

        </div>
    )
}