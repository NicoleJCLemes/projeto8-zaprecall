import Icons from "./Icons";

export default function Footer(props){
    if(props.answeredQuestions.length === props.totalCards){
        let counter = 0;
        for(let i = 0; i < props.answeredQuestions.length; i++){
            if(props.answeredQuestions[i] === 'red'){
                counter++
            }
        }
        return counter === 0 ?
            (
                <footer className="congrats-footer">
                    <div className="congrats">
                        <img src="./assets/party.png" alt="party emoticon" />
                        <h2>Parabéns!</h2>
                    </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <p>{props.answeredQuestions.length}/{props.totalCards} CONCLUÍDOS</p>
                    <div className="icons-footer">
                        {props.answeredQuestions.map((answeredQuestion) => <Icons color={answeredQuestion}/>)}
                    </div>
                </footer>
            ) : (
            <footer className="congrats-footer">
                <div className="congrats">
                    <img src="./assets/sad.png" alt="sad emoticon" />
                    <h2>Putz...</h2>
                </div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
                <p>{props.answeredQuestions.length}/{props.totalCards} CONCLUÍDOS</p>
                <div className="icons-footer">
                    {props.answeredQuestions.map((answeredQuestion) => <Icons color={answeredQuestion}/>)}
                </div>
            </footer>
        )
    } else if (props.answeredQuestions.length < props.totalCards) {
        return(
            <footer>
                <p>{props.answeredQuestions.length}/{props.totalCards} CONCLUÍDOS</p>
                <div className="icons-footer">
                    {props.answeredQuestions.map((answeredQuestion) => <Icons color={answeredQuestion}/>)}
                </div>
            </footer>
        )
    }
    
}