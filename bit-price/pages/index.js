
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) =>
{
    return (
        <Layout>
            <div>
                <h1 >Hello BitzPrise</h1>

                <Prices bpi={props.bpi} />
            </div>
        </Layout>
    );
}

Index.getInitialProps = async function ()
{
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();


    return {
        bpi: data
    };
}

export default Index;