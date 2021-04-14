export default function Todo({todos}){
    return (
        <div>
            <a href="/" className="home-page">Back to Home Page</a>
            <h1>getStaticProps</h1> 
            <ol>
                {todos.map(({id,title,completed})=>
                (
                    <li key={id} className={completed}>{title}
                    </li>
                ))}
            </ol>
            <style jsx>{' .true{ text-decoration:line-through; } '}
            </style>
        </div>
    )
}

export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos')
    const json=await res.json()
    const todos=json
    return{
        props:{
            todos,
        },
    }
}