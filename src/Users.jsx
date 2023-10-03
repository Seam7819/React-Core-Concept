import { useEffect, useState } from "react"
import User from "./User"

export default function Users () {
    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h2 className="mt-10 text-2xl font-bold">Users Data</h2>
            <p>Total Users: {users.length}</p>
            {
                users.map(user => <User user={user}></User>)
                
            }
        </div>
    )
}