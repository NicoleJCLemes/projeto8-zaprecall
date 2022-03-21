import React from 'react';
export default function CardAnswer(props){
    return(
        <div className="cardAnswer">
            <p>{props.answer}</p>
            <div className='buttons'>
                <button onClick={() => props.callback('red')} className='not'>Não lembrei</button>
                <button onClick={() => props.callback('orange')} className='almost'>Quase não lembrei</button>
                <button onClick={() => props.callback('green')} className='right'>Zap!</button>
            </div>
        </div>
    )
}