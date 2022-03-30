import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrAction, decrAction } from '../redux/product/product.action'
const Product = () => {
    let dispatch = useDispatch();
    let product = useSelector((state) => {
        return state.product
    });
    /* let product = {
        name: "Apple Iphone 12",
        image: "data:image/png;base64,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",
        price: 49900,
        qty: 1
    } */
    let decrHandler = () => {
        dispatch(decrAction());
    }
    let incrHandler = () => {
        dispatch(incrAction())
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <pre>{JSON.stringify(product)}</pre>
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td><img src={product.image} /></td>
                                <td>{product.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={decrHandler}></i> {product.qty} <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product
