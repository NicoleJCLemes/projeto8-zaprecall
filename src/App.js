import HomePage from "./HomePage";
import DeckPage from "./DeckPage";
import React from 'react';

export default function App(){
    const [visibility, setVisibility] = React.useState('true')
    if(visibility === true){
        return(
            <>
                <HomePage />
            </>
        )
    } if (visibility === false){
        return(
            <>
                <DeckPage />
            </>
        )
    }
}