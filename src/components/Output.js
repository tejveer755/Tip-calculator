import React from "react"

const Output = (props) => {
    return (
        <div className="output">
            <div className="result">
                <div>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <h1>${props.tipAmountPerPerson}</h1>
            </div>
            <div className="result">
                <div>
                    <h4>Total</h4>
                    <p>/ person</p>
                </div>
                <h1>${props.totalPerPerson}</h1>
            </div>
            <button onClick={props.resetAll}>Reset</button>
        </div>
    )
};

export default Output;
