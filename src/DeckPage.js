import Card from "./Card";
import React from "react";

export default function DeckPage(){
    const cards = [
        {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
        {question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
        {question:"Componentes devem iniciar com __", answer:"letra maiúscula"},
        {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
        {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"},
        {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
        {question:"Usamos props para __", answer:"passar diferentes informações para componentes"},
        {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    const cardName = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]

    function comparing() { 
        return Math.random() - 0.5; 
    }

    cards.sort(comparing);

    function nameCards(){
        for(let i = 0; i < cards.length; i++){
            cards[i].name = cardName[i]
        }
    }

    nameCards();

    const [answeredQuestions, setAnsweredQuestions] = React.useState(0);

    return(
        <div className="deck-page">
            <header>
                <img src="./assets/logo.png" alt="ZapRecall logo"/>
                <h1>ZapRecall</h1>
            </header>
            <section>
                {
                    cards.map(card => 
                        <Card key={card.name} variable={answeredQuestions} name={card.name} question={card.question} answer={card.answer} callback={(update) => setAnsweredQuestions(update)} />
                        )
                }
            </section>
            <footer>
                <p>{answeredQuestions}/8 CONCLUÍDOS</p>
            </footer>
        </div>
    )
}