import HomePage from "./HomePage";
import DeckPage from "./DeckPage";
import React from 'react';

export default function App(){
    const [visibility, setVisibility] = React.useState(true)
    return visibility === true ? (
        <>
            <HomePage callback={(update) => setVisibility(update)}/>
        </>
    ) : (
        <>
            <DeckPage />
        </>
    )
}