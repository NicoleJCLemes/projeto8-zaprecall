import Card from "./Card";

export default function DeckPage(){
    return(
        <div className="deck-page">
            <header>
                <img src="./assets/logo.png" alt="ZapRecall logo"/>
                <h1>ZapRecall</h1>
            </header>
            <section>
                <Card name="Pergunta 1" question="O que é JSX?" answer="Uma extensão de linguagem do JavaScript" />
                <Card name="Pergunta 2" question="O React é __" answer="uma biblioteca JavaScript para construção de interfaces" />
                <Card name="Pergunta 3" question="Componentes devem iniciar com __" answer="letra maiúscula" />
                <Card name="Pergunta 4" question="Podemos colocar __ dentro do JSX" answer="expressões" />
                <Card name="Pergunta 5" question="O ReactDOM nos ajuda __" answer="interagindo com a DOM para colocar componentes React na mesma" />
                <Card name="Pergunta 6" question="Usamos o npm para __" answer="gerenciar os pacotes necessários e suas dependências" />
                <Card name="Pergunta 7" question="Usamos props para __" answer="passar diferentes informações para componentes" />
                <Card name="Pergunta 8" question="Usamos estado (state) para __" answer="dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" />
            </section>
            <footer>
                <p>CONCLUÍDOS</p>
            </footer>
        </div>
    )
}