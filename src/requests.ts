import axios from "axios"
import SERVER_URL from "./consts"

const requests = {
    getCSRF: () => {
        axios.get(SERVER_URL + 'csrf').then(response => localStorage.setItem('csrf', response.data))
    },
    getRequest: (URL:string) => {
        axios.get(SERVER_URL + URL, { headers: {
            'csrf': localStorage.getItem('csrf')
        } })
    }
}

export default requests