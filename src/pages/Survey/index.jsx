import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey() {
    const { questionNumber } = useParams()

    return (
        <div>
            <h1>Survey</h1>
            <p>Question {questionNumber}</p>
            <div className="buttons">
                {questionNumber > 1 ?
                    <button><Link to={`/survey/${Number(questionNumber) - 1}`}>Previous</Link></button>
                    : <button disabled>Previous</button>}
                {questionNumber < 10 ?
                    <button><Link to={`/survey/${Number(questionNumber) + 1}`}>Next</Link></button>
                    : <button><Link to="/results">Results</Link></button>
                }
            </div>
        </div>
    )
}

export default Survey