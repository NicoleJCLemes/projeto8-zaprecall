import ReactDOM from 'react-dom';
import HomePage from "./HomePage";
import DeckPage from "./DeckPage";

function App(){
    return(
        <>
            <HomePage />
            <DeckPage />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));