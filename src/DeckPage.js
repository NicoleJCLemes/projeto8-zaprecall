import Card from "./Card";

export default function DeckPage(){
    return(
        <div className="deck-page hidden">
            <header>
                <img src="./assets/logo.png" alt="ZapRecall logo"/>
                <h1>ZapRecall</h1>
            </header>
            <section>
                <Card />
            </section>
        </div>
    )
}