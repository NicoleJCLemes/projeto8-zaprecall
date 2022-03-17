export default function Card(props){
    return(
        <div className="card">
            <p>{props.nome}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}