export default function CardResult(props) {
    if(props.color === 'red'){
        let cssRed = `cardName ${props.color}`
        return(
            <div className={cssRed}>
                <p>{props.name}</p>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        )
    } else if (props.color === 'orange'){
        let cssOrange = `cardName ${props.color}`
        return(
            <div className={cssOrange}>
                <p>{props.name}</p>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        )
    } else if (props.color === 'green'){
        let cssGreen = `cardName ${props.color}`
        return(
            <div className={cssGreen}>
                <p>{props.name}</p>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        )
    }
}

