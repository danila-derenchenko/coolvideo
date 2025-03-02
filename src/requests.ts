import axios from "axios"
import SERVER_URL from "./consts"

const requests = {
    getRequest: (data:object) => {
        axios.get(SERVER_URL, {
            headers: data
        })
    }
}