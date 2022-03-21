import Icons from "./Icons";

export default function Footer(props){
    if(props.answeredQuestions === props.totalCards){
        return(
            <footer className="congrats-footer">
                <div className="congrats">
                    <img src="./assets/party.png" alt="party emoticon" />
                    <h2>Parabéns</h2>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
                <p>{props.answeredQuestions}/{props.totalCards} CONCLUÍDOS</p>
                <Icons color={props.color} />
            </footer>
        )
    } else if (props.answeredQuestions < props.totalCards) {
        return(
            <footer>
                <p>{props.answeredQuestions}/{props.totalCards} CONCLUÍDOS</p>
                <Icons color={props.color} />
            </footer>
        )
    }
    
}