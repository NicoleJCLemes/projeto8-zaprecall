import React from 'react';
export default function CardAnswer(props){
    return(
        <div className="cardAnswer">
            <p>{props.answer}</p>
            <div className='buttons'>
                <button onClick={() => {
                props.callbackColor('red') 
                props.callback('questionResult')
                props.callbackAnswered('red')}} className='not'>Não lembrei</button>
                <button onClick={() => {
                props.callbackColor('orange')
                props.callback('questionResult')
                props.callbackAnswered('orange')}} className='almost'>Quase não lembrei</button>
                <button onClick={() => {
                props.callbackColor('green')
                props.callback('questionResult')
                props.callbackAnswered('green')}} className='right'>Zap!</button>
            </div>
        </div>
    )
}