import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data" 
import Footer from "./components/Footer"

export default function App(){
    
    const EntryElements= data.map((element)=>{
        return(
            <Entry
            key={element.id}
            {...element} />
        )
    })
    
    return(
        <>
        <Header />
        {EntryElements}
        <Footer />
        </>
    )
  
}



