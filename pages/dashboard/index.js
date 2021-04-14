import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YouTubeCardSubs from "../components/youtube/YouTubeCardSubs"
import YouTubeCardViews from '../components/youtube/YouTubeCardViews'
import YouTubeCardVids from '../components/youtube/YouTubeCardVids'

export default function home(){
    return (
    <div className="container">
        <Head>
        <title>DashBoard</title>
        </Head>        
            <h1 className="text-center">DashBoard</h1>
            <Row>
                <Col md>
                <p><YouTubeCardSubs/></p>
                </Col>
                <Col md>
                <p><YouTubeCardViews/></p>
                </Col>
                <Col md>
                <p><YouTubeCardVids/></p>
                </Col>
            </Row>
        </div>
    )
}