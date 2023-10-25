import { useState } from 'react'

export default function HomePage() {
    const [username, setUsername] = useState("")
    return (
        <div>
            <div>HomePage</div>
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                console.log({ username })
            }}>

                <label htmlFor="user"></label>
                <input
                    id="userInput"
                    className="form-input border-black"
                    type="text"
                    name="user"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="submit" name="submit" id="" />
            </form>
        </div>
    )
}