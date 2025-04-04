export default function Progress({index,LenghtQuestions,points,questions}){

const AllPoints = questions.reduce((prev,cur) => cur.points + prev,0)
    return(
        <header className="progress">
            <progress max={LenghtQuestions} value={index}></progress>
            <p>Question<strong>{index + 1}</strong>/{LenghtQuestions}</p>
            <p>Points<strong>{points}</strong>/{AllPoints}</p>

        </header>
    )
}