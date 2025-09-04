export default function Entry(props){

    return(
        <main>
            <img src={props.img.src} alt={props.img.alt} className="PlaceImage" />

            <div>
                <div className="LocationDetails">
                    <img src="./images/globe.png" alt="globe icon" className="globeIcon"/>
                    <p className="country">{props.country}</p>
                    < a href={props.googlemapsLink} className="googleMapsLink" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.date}</p>
                <p className="description">{props.text}</p>
            </div>
        </main>

    )
}