export default function Icons(props){
    
    if(props.color === ""){
        return(<></>)
    } else if(props.color === 'red'){
        return(
            <div className={props.color}>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        )
    } else if(props.color === 'orange'){
        return(
            <div className={props.color}>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        )
    } else if(props.color === 'green'){
        return(
            <div className={props.color}>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        )
    }
}