export default function User ({user}) {
   
    return (
        <div className="border-solid border-4 border-sky-500 rounded-md mb-5">
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email} </p>
        </div>
    )
}