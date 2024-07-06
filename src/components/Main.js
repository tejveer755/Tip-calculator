import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";


const Main = () => {



    const [bill, setBill] = useState("");
    const [numOfPeople, setNumOfPeople] = useState("");
    const [totalPerPerson, setTotalPerPerson] = useState("0.00");
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState("0.00");
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    const [style, setStyle] = useState();
    const [style2, setStyle2] = useState();
    const [btnStyles, setBtnStyles] = useState({
        btn5: {},
        btn10: {},
        btn15: {},
        btn25: {},
        btn50: {}
    });


    const handleChange = (event) => {
        setBill(parseFloat(event.target.value) || ""); // Convert input to float or empty string
        cleraError()
    };



    const handleChange2 = (event) => {
        setNumOfPeople(parseInt(event.target.value, 10) || ""); // Convert input to integer or empty string
        cleraError2()
    };



    const calculateTotal = (percent) => {
        console.log(percent)
        const tipAmount = ((bill * percent) / 100).toFixed(2);
        const totalPerPerson = ((parseFloat(bill) + parseFloat(tipAmount)) / parseFloat(numOfPeople)).toFixed(2);
        const tipAmountPerPerson = (tipAmount / parseFloat(numOfPeople)).toFixed(2);

        setTotalPerPerson(totalPerPerson);
        setTipAmountPerPerson(tipAmountPerPerson);

        updateBtnStyle(percent);
    }


    const throwError = () => {
        if (!bill || parseFloat(bill) === 0) {
            setError("Can't be zero")
            setStyle({
                border: "2px solid red"
            })
        }

        if (!numOfPeople || parseInt(numOfPeople, 10) === 0) {
            setError2("Can't be zero")
            setStyle2({
                border: "2px solid red"
            })
        }

    }

    const checkData = (percent) => {
        if (!bill || parseFloat(bill) === 0 || !numOfPeople || parseInt(numOfPeople, 10) === 0) { throwError() }
        else { calculateTotal(percent) }
    };

    const updateBtnStyle = (percent) => {
        const btnStyle = {
            color: "hsl(183, 100%, 15%)",
            backgroundColor: "hsla(172, 67%, 45%, 0.532)"
        };

        const defaultBtnStyle = {};
        setBtnStyles({
            btn5: { ...defaultBtnStyle },
            btn10: { ...defaultBtnStyle },
            btn15: { ...defaultBtnStyle },
            btn25: { ...defaultBtnStyle },
            btn50: { ...defaultBtnStyle }
        });

        switch (percent) {
            case 5:
                setBtnStyles(prevStyles => ({
                    ...prevStyles,
                    btn5: btnStyle
                }));
                break;
            case 10:
                setBtnStyles(prevStyles => ({
                    ...prevStyles,
                    btn10: btnStyle
                }));
                break;
            case 15:
                setBtnStyles(prevStyles => ({
                    ...prevStyles,
                    btn15: btnStyle
                }));
                break;
            case 25:
                setBtnStyles(prevStyles => ({
                    ...prevStyles,
                    btn25: btnStyle
                }));
                break;
            case 50:
                setBtnStyles(prevStyles => ({
                    ...prevStyles,
                    btn50: btnStyle
                }));
                break;
            default:
                break;
        }
    };



    const cleraError = () => {
        setError("")
        setStyle({})
    }
    const cleraError2 = () => {
        setError2("")
        setStyle2({})
    }



    const [style3, setStyle3] = useState({
        width: '120px',
        height: '50px',
        margin: '0',
        fontWeight: '850',
        fontSize: '20px',
        backgroundColor: 'hsl(189, 41%, 97%)',
        color: 'hsl(186, 14%, 43%)',
        border: 'none',
        borderRadius: '5px',
        fontFamily: '"Space Mono", monospace',
    });

    const [type, setType] = useState("button");
    const [percent, setPercent] = useState("");

    const handleChange3 = (event) => {
        setPercent(event.target.value);
        handleCustomTip()
    };

    const changeInput = () => {
        setType("number");
        setStyle3({
            ...style3,
            width: "106px",
            height: "46px",
        });
    };

    const handleCustomTip = () => {
        // Pass the custom tip percent to props function for calculation
        console.log(percent)
        checkData(parseFloat(Number(percent)));
    };



    const resetAll = () => {
        setBill("");
        setNumOfPeople("");
        setTotalPerPerson("0.00");
        setTipAmountPerPerson("0.00");
        setError("");
        setError2("");
        setStyle();
        setStyle2();
        setBtnStyles({
            btn5: {},
            btn10: {},
            btn15: {},
            btn25: {},
            btn50: {}
        })
        setStyle3({
            width: '120px',
            height: '50px',
            margin: '0',
            fontWeight: '850',
            fontSize: '20px',
            backgroundColor: 'hsl(189, 41%, 97%)',
            color: 'hsl(186, 14%, 43%)',
            border: 'none',
            borderRadius: '5px',
            fontFamily: '"Space Mono", monospace',
        });
        setType("button");
        setPercent("")
    }




    return (

        <div className="main">

            <Input
                bill={bill}
                numOfPeople={numOfPeople}
                error={error}
                error2={error2}
                style={style}
                style2={style2}
                style3={style3}
                setStyle3={setStyle3}
                btnStyles={btnStyles}
                type={type}
                handleChange={handleChange}
                handleChange2={handleChange2}
                handleChange3={handleChange3}
                changeInput={changeInput}
                checkData={checkData}
                // handleCustomTip={handleCustomTip}
                percent={percent}
            />

            <Output
                tipAmountPerPerson={tipAmountPerPerson}
                totalPerPerson={totalPerPerson}
                resetAll={resetAll}
            />

        </div>

    );
};

export default Main;