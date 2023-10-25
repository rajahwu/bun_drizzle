import { useState } from 'react'

export default function HomePage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setComfirmPassword] = useState("")
    return (
        <div>
            <div>HomePage</div>
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                if(password !== confirmPassword) throw new Error('Passwords do not match')
                console.log({ username })
            }}>

                <input
                    id="userInput"
                    className="form-input border-black"
                    type="text"
                    name="user"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username'
                />
                <input
                    id="password"
                    className="form-input border-black"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password'
                />
                <input
                    id="confirmPassword"
                    className="form-input border-black"
                    type="password"
                    name="password"
                    value={confirmPassword}
                    onChange={(e) => setComfirmPassword(e.target.value)}
                    placeholder='confirm password'
                />
                <input type="submit" name="submit" id="" />
            </form>
        </div>
    )
}