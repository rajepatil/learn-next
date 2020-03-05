import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) =>
{
    return (
        <div>
            <Head>
                <title>hello-next</title>
                <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/solar/bootstrap.min.css" rel="stylesheet" integrity="sha384-Ya0fS7U2c07GI3XufLEwSQlqhpN0ri7w/ujyveyqoxTJ2rFHJcT6SUhwhL7GM4h9" crossorigin="anonymous"></link>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;