import DisplayCart from "../DisplayCard/DisplayCard"

const DisplayNotes=(props)=>{

    const notesdisplay=props.notes.map((ele)=>{return <DisplayCart note={ele}></DisplayCart>})
    return(
       
              <> {notesdisplay}</> 
           
    )
}

export default DisplayNotes