export default function Finish({points,questions,dispatch}){
    const AllPoints = questions.reduce((prev,cur) => cur.points + prev,0)
    const Darsad = Math.ceil((points / AllPoints) * 100 )
    return(
    <>
        <p className="result ">You Scored <strong>{points}</strong> of <strong>{AllPoints}</strong> <strong>({Darsad}%)</strong></p>
        <button onClick={() =>dispatch({type:"Restart"}) } className="btn btn-ui">
            Restart
        </button>
    </>
    )
}