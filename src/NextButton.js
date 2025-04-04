import { type } from "@testing-library/user-event/dist/type";

export default function NextButton({dispatch,answer}){
    if(answer === null) return null ;
    return<button onClick={() => dispatch({type:"Next"})} className="btn btn-ui">Next</button>
    
}