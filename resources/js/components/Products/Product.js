import React from 'react';
import {Card, CardBody} from "reactstrap";

function Product({id, name, avatar, price}) {
    return (
        <div className="col mb-2 pl-1 pr-2">
            <Card>
                <img src={avatar} className="card-img-top" alt=""/>
                <CardBody className="p-0 pt-2 pb-2 pl-2">
                    <h5 className="mb-0">{name}</h5>
                    <p>{price}</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default Product;
