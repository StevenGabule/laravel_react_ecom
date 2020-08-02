import React, {useEffect, useState} from 'react';
import Layout from '../../layout/Layout';
import {useParams} from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        axios.get(`/api/products-show/${id}`).then(({data}) => {
            setProduct(data.product);
        });
    }, [])

    async function handleAddToCard() {
        await axios.post('/api/cart-add', {
            'product_id': id,
            'qty': qty
        }).then((res) => {
            console.log(res)
        })
    }

    const {name, avatar, price, description} = product;
    return (
        <Layout title="Single Product">
            <h3>{name}</h3>
            <img src={avatar} alt=""/>
            <p className="lead">{description}</p>
            <p>{price}</p>
            <div className="input-group" style={{ width: 200}}>
                <input
                    type="number"
                    value={qty}
                    className="form-control"
                    onChange={e => setQty(e.target.value)} />
                     <div className="input-group-append">
                        <button type="button" className="btn btn-info btn-sm" onClick={handleAddToCard}>Add To Cart</button>
                     </div>
            </div>

        </Layout>
    )
}

export default Product;
