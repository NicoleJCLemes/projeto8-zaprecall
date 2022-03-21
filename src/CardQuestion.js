export default function CardQuestion(props){
    return(
        <div className="cardQuestion">
            <p>{props.question}</p>
            <img onClick={() => props.callback('questionAnswer')} src="./assets/setinha.png" alt="flip arrow"/>
        </div>
    )
}