import React from 'react'
import { getPriceAfterDiscount } from '../BLL/utiliy'
import { useDispatch } from 'react-redux'
import { INCREASE_QUANTITY_OF_PRODUCT } from '../redux/contantTypes/constantTypes';
import { decrease_quantity, increase_quantity } from '../redux/actions/actions';

function CartElement(props) {
    var dispatch=useDispatch();
    return (
        <>
            <tr>
                <td className="align-middle">
                    <img src={props.item.product.thumbnail} alt="" style={{ width: 50 }} />{" "}
                    {props.item.product.title}
                </td>
                <td className="align-middle">${getPriceAfterDiscount(props.item.product.price, props.item.product.discountPercentage)}</td>
                <td className="align-middle">
                    <div
                        className="input-group quantity mx-auto"
                        style={{ width: 100 }}
                    >
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus">
                                <i onClick={()=>{dispatch(decrease_quantity(props.item.product))}} className="fa fa-minus" />
                            </button>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={props.item.quantity}
                        />
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i onClick={()=>{dispatch(increase_quantity(props.item.product))}} className="fa fa-plus" />
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">${(getPriceAfterDiscount(props.item.product.price, props.item.product.discountPercentage)*props.item.quantity).toFixed(2)}</td>
                <td className="align-middle">
                    <button className="btn btn-sm btn-danger">
                        <i className="fa fa-times" />
                    </button>
                </td>
            </tr>
        </>
    )
}

export default CartElement