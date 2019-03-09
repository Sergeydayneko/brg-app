import React from 'react'
import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button'

/**
 * Burger order desk information component
 *
 * @author dayneko_si
 * @since 03.03.2019
 * @param props
 */
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((ingredient, index) => {
            return (
                <li key = { ingredient + index }>
                    <span style = { { textTransform: 'capitalize'} }
                    >{ ingredient }</span> : { props.ingredients[ingredient] }
                </li>
            )
        });


    return (
        <Aux>
            <h3>Your order</h3>
            <p>You have ordered burger with following ingredients:</p>
            <ul>
                { ingredientSummary }
            </ul>
            <p><strong>Total price: </strong> { props.totalPrice.toFixed(2) }</p>
            <p>Continue checkout ?</p>
            <Button btnType = "Danger" clicked = { props.purchaseCanceled } >CANCEL</Button>
            <Button btnType = "Success" clicked = { props.purchaseContinue }>CONTINUE</Button>
        </Aux>
    )

};

export default orderSummary