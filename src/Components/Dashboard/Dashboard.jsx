import { useEffect, useState } from "react"
import AddNotes from "../AddNotes/AddNotes"
import { addNotes, getNotes } from '../../Services/NotesServices'
import DisplayNotes from "../DisplayNotes/DisplayNotes"

const DashBoard = () => {

    // Array to collect Notes
    const [notesList, SetNotesLis] = useState([])

    useEffect(() => {
        getNotes().then((data) => {
            SetNotesLis(data.data)
        })
    }, [notesList])

    // title, desc,id
    const SaveNotes = (newNotes) => {
        // notes is temp
        // console.log(notesList,newlist);
        let notes = notesList;
        newNotes.notesId = notesList.length + 1;

        notes.push(newNotes);
        SetNotesLis(notes);
        addNotes(newNotes).then((data) => {
            console.log("sucess");
        })
        console.log(notesList);
    }

    return (
        <div>
            <AddNotes saveNote={SaveNotes}></AddNotes>
            <DisplayNotes notes={notesList}></DisplayNotes>
        </div>
    )
}


export default DashBoard;
