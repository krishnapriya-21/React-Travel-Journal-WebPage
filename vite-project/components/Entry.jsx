export default function Entry(props){

    return(
        
        <main>
            <div className="imgcontainer">
                <img src={props.img.src} alt={props.img.alt} className="PlaceImage" />
            </div>

            <div className="PlaceDetails">
                <div className="LocationDetails">
                    <img src="../images/marker.png" alt="location icon" className="locationIcon"/>
                    <p className="country">{props.country}</p>
                    < a href={props.googleMapsLink} className="googleMapsLink" target="_blank" rel="noopener norefferer">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.date}</p>
                <p className="description">{props.text}</p>
                <hr />
            </div>
            
        </main>

    )
}