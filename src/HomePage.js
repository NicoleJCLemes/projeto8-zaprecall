import React from 'react';
export default function HomePage(props){
    return(
        <section className="home-page">
            <div>
                <img src="./assets/logo.png" alt="ZapRecall logo" />
                <h1>ZapRecall</h1>
            </div>
            <button onClick={() => props.callback('false')}>Iniciar Recall!!</button>
        </section>
    )
}