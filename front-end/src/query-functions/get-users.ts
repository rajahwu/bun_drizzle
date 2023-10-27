import axios from "axios";

export async function getUsers() {
    const response = await axios.get("http://localhost:3000/api/users")
    return response
}