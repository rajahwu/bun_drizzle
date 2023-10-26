import { useState } from 'react'
import { useActionData, Form } from 'react-router-dom'



export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setComfirmPassword] = useState("")
    const errors = useActionData()

    return (
        <div>
            <Form method="post" onSubmit={async (e) => {
                e.preventDefault()
                if (password !== confirmPassword) throw new Error('Passwords do not match')
                // const hashedPassword = password.hash('123456')
                // setPassword(hashedPassword)
                console.log({ username, password })
            }}>
                <p>
                    <input
                        id="userInput"
                        className="border-black form-input"
                        type="text"
                        name="user"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='username'
                    />
                    {errors?.password && <span>{errors.password}</span>}
                </p>
                <p>
                    <input
                        id="password"
                        className="border-black form-input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                    />
                    {errors?.password && <span>{errors.password}</span>}
                </p>
                <p>
                    <input
                        id="confirmPassword"
                        className="border-black form-input"
                        type="password"
                        name="password"
                        value={confirmPassword}
                        onChange={(e) => setComfirmPassword(e.target.value)}
                        placeholder='confirm password'
                    />
                </p>
                <button type="submit" id="submit">Submit</button>
            </Form>
        </div>
    )
}