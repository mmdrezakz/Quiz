export default function Options({questions,dispatch,answer,points}){
//    console.log(questions);
   const isAnswer = answer !== null
    return(
        <div className="options">
            {questions.options.map((option,i) => <button onClick={() => dispatch({type:"Answer",payload:i})}  className={`btn btn-option  ${i === answer ?" answer " : ""}${isAnswer ? (i === questions.correctOption) ?" correct " : " wrong ":""}`} key={i} disabled={isAnswer} >{option}</button>)}
        </div>
    )
} 