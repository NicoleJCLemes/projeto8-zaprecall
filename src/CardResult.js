export default function CardResult(props) {
    return(
        <div className="cardName">
            <p className={props.color}>{props.name}</p>
            <ion-icon name="close-circle-outline"></ion-icon>
        </div>
    )
}

// <ion-icon name="help-circle"></ion-icon>
//<ion-icon name="checkmark-circle"></ion-icon>