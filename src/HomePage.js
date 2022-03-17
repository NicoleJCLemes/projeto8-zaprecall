export default function HomePage(){
    return(
        <section className="home-page">
            <div>
                <img src="./assets/logo.png" alt="ZapRecall logo" />
                <h1>ZapRecall</h1>
            </div>
            <button onClick={() => setVisibility('false')}>Iniciar Recall!!</button>
        </section>
    )
}