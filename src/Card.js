import React from 'react';
import CardAnswer from './CardAnswer';
import CardQuestion from './CardQuestion';
import QuestionName from './QuestionName';
import CardResult from './CardResult';

export default function Card(props){
    const [content, setContent] = React.useState('questionName');
    const [color, setColor] = React.useState("");
    
    if(content === 'questionName'){
        return(
            <QuestionName name={props.name} callback={(update) => setContent(update)} />
        )
    } else if (content === 'questionTitle'){
        return(
            <CardQuestion question={props.question} callback={((update) => setContent(update))} />
        )
    } else if (content === 'questionAnswer') {
        return(
            <CardAnswer color={color} answer={props.answer} variable={props.variable} callbackColor={((update) => setColor(update))} callback={((update) => setContent(update))} callbackAnswered={(update) => props.callback(update)} />
        )
    } else if (content === 'questionResult') {
        return(
            <CardResult name={props.name} color={color} callbackColor={((update) => setColor(update))} />
    )
    }
    
}
