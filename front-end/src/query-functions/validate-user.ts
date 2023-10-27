import axios from "axios";

export async function validateUser(username: string, password: string) {
    try {
        const response = await axios.post("http://localhost:3000/api/login", {  username, password  })
        return response;

    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}
