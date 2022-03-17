import Card from "./Card";

export default function DeckPage(){
    return(
        <div className="deck-page">
            <header>
                <img src="./assets/logo.png" alt="ZapRecall logo"/>
                <h1>ZapRecall</h1>
            </header>
            <section>
                <Card nome="Pergunta 1" />
                <Card nome="Pergunta 2" />
                <Card nome="Pergunta 3" />
                <Card nome="Pergunta 4" />
                <Card nome="Pergunta 5" />
                <Card nome="Pergunta 6" />
                <Card nome="Pergunta 7" />
                <Card nome="Pergunta 8" />
            </section>
            <footer>
                <p>CONCLUÍDOS</p>
            </footer>
        </div>
    )
}