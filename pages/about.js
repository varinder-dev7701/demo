import Button from '../components/Button'
//import image from '../public'
export default function about(){
return (

    <div>
         <a href="/" className="home-page">Back to Home Page</a>
        <h1 className="about-title">About Page</h1> 
<ol className="ul-list">
    <li>REACT</li>
    <li>NEXT.JS</li>
    <li>ANGULAR</li>
    <li>VERCEL</li>
</ol>
<Button/>
<p className="temp">Hello this is jsx style class.</p>
<img src="/electron.png" className="image"></img>
<style jsx>{`
        .temp{
            color:blue;
        }
        .image{
            width:100px;
            height:auto;
        }
      `}</style>
     
    </div>
)
}