import React, {useEffect, useState} from "react";
import Layout from "../../layout/Layout";
import Product from '../../components/Products/Product';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(({data}) => {
            const product = data.products;
            setProducts(product);
        }).catch(err => console.error(err))
    }, []);

    return (
        <Layout title={'Smarket'}>
            Home
            <div className={'row row-cols-1 row-cols-md-4'}>
                {products.map((product, i) => (
                    <Product key={i} {...product} />
                ))}
            </div>

        </Layout>
    )
}

export default Home;
