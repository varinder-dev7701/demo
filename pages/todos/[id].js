const ToDoItem = ({todo}) =>{
    return(
        <div>
            <h1>getStaticPaths</h1>
            <p>userId - {todo.userId}</p>
            <p>id - {todo.Id}</p>
            <p>title - {todo.title}</p>
            <p>completed - {todo.completed}</p>
        </div>
    )
}

export async function getStaticProps(content){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/${content.params.id}')
    const json=await res.json()
    const todo=json
    return{
        props:{
            todo,
        },
    }
}

export async function getStaticPaths(){
    return{
        paths:[
        {params:{id:'1'}}
        // paths:new Array(200).fill(null).map((_, index) > (
        //     {params:{id:'${index+1}'}}
        // )),
        ],
        fallback:false,
    }
}

export default ToDoItem