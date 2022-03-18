import React from 'react';
export default function Card(props){
    const [content, setContent] = React.useState('questionName')
    if(content === 'questionName'){
        return(
            <div onClick={() => setContent('questionTitle')} className="cardName">
                <p>{props.name}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    } else if (content === 'questionTitle'){
        return(
            <div className="cardQuestion">
                <p>{props.question}</p>
                <img onClick={() => setContent('questionAnswer')} src="./assets/setinha.png" alt="flip arrow"/>
            </div>
        )
    } else if (content === 'questionAnswer') {
        return(
            <div className="cardAnswer">
                <p>{props.answer}</p>
                <div className='buttons'>
                    <button className='not'>Não lembrei</button>
                    <button className='almost'>Quase não lembrei</button>
                    <button className='right'>Zap!</button>
                </div>
            </div>
        )
    }
    
}