export default function GitHub({data})
{
return(
    <div>
         <a href="/" className="home-page">Back to Home Page</a>
        <h1>getInitialProps</h1>
        <p>{data[0].id}</p>
        <p>{data[0].name}</p>
        <p>{data[0].full_name}</p>
        <p>{data[0].private}</p>
    </div>
)
}

GitHub.getInitialProps =async ()=>{
    const res=await fetch('https://api.github.com/users/bjcarlson42/repos')
    const json=await res.json()
    const data=json
    return{
        data:data
    }
} 