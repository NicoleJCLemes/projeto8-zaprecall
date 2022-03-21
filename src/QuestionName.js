export default function QuestionName(props){
    return(
        <div onClick={() => props.callback('questionTitle')} className="cardName">
            <p>{props.name}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}