import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function home(){
    return (
    <div className="container">
        <Head>
        <title>DashBoard</title>
        </Head>        
            <h1 className="text-center">DashBoard</h1>
            <Row>
                <Col md>
                <p>suscribers</p>
                </Col>
                <Col md>
                <p>Views</p>
                </Col>
                <Col md>
                <p>videos</p>
                </Col>
            </Row>
        </div>
    )
}
