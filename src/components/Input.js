import React from "react";

const Input = (props) => {

    return (
        <div className="input">
            <form action="">
                <div className="label">
                    <p htmlFor="bill">Bill</p>
                    {!props.bill && <p className="error">{props.error}</p>}

                </div>

                <div className="form" style={props.style}>
                    <img src="./design/icon-dollar.svg" alt="" />
                    <input
                        placeholder="0"
                        type="number"
                        id="bill"
                        value={props.bill}
                        onChange={props.handleChange}
                    />
                </div>
              
            </form>

            <p>Select Tip %</p>
            <div className="select-tip">
                <button onClick={() => props.checkData(5)} style={props.btnStyles.btn5}>5%</button>
                <button onClick={() => props.checkData(10)} style={props.btnStyles.btn10}>10%</button>
                <button onClick={() => props.checkData(15)} style={props.btnStyles.btn15}>15%</button>
                <button onClick={() => props.checkData(25)} style={props.btnStyles.btn25}>25%</button>
                <button onClick={() => props.checkData(50)} style={props.btnStyles.btn50}>50%</button>

                <div className="custom">
                    <input
                        onClick={props.changeInput}
                        type={props.type}
                        style={props.style3}
                        value={props.type === "number" ? props.percent : "Custom"}
                        onChange={props.handleChange3}
                    // onBlur={props.handleCustomTip} // Calculate on blur after entering custom percent
                    />
                </div>
            </div>

            <form action="">
                <div className="label">
                    <p htmlFor="numOfPeople">Number of People</p>
                    {!props.numOfPeople && <p className="error">{props.error2}</p>}
                </div>

                <div className="form" style={props.style2}>
                <img src="./design/icon-person.svg" alt="" />
                <input
                    placeholder="0"
                    type="number"
                    id="numOfPeople"
                    value={props.numOfPeople}
                    onChange={props.handleChange2}
                />
                </div>
            </form>            
        </div>
    );
};

export default Input;
