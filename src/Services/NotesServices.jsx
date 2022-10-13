import axios from 'axios'



// Add a NOtes in json
let url ="http://localhost:3000/notes"

// Fetch / axios

export const addNotes=(newNotes)=>{
    return axios.post(`${url}`,newNotes)

}

export const getNotes=()=>{
    return axios.get(`${url}`);
}