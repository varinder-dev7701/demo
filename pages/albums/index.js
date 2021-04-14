export default function Albums({albums}){
    return (
        <div>
            <a href="/" className="home-page">Back to Home Page</a>
            <h1>getStaticProps</h1>

            {/* <div className={styles.grid}>

            </div> */}
            <ol>
                {albums.map(({albumId,id,title,thumbnailUrl})=>
                (
                    <li key={id}>{albumId} 
                    <img src={thumbnailUrl}></img>
                    <br></br> {title}
                    </li>
                ))}
            </ol>
            <style jsx>{' .true{ text-decoration:line-through;} '}
            </style>
        </div>
    )
}

export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/photos')
    const json=await res.json()
    const albums=json
    return{
        props:{
            albums,
        },
    }
}