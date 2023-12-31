//1st focus on code then focus on that are written in optinal part like amountId.

import { useId } from "react";
//"useId" is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    // Parameters :----
    // useId does not take any parameters.

    // Returns :---
    // useId returns a unique ID string associated with this particular useId call in this particular component.

    //["Do not call useId to generate keys in a list. Keys should be generated from your data.""]


function InputBox( { label , amount , onAmountChange , onCurrencyChange , currenyOptions=[] , selectCurrency="usd" , currencyDisable=false ,  amountDisable=false,className = "",} ) {
   
    //optional
    const amountId=useId();

    return (
        //These are nothing but props.
            //'Label' indicates whether it is a 'from' input tag or 'to' input tag. 
            //'Amount' indicates amount you enter

            //joo v input-box component ko call karr raha hai,wahan pai state v toh change hoga naa.
                //onAmountChange():--- amount agar hmne badla toh kya hoga..
                //onCurrencyChange():--- currency ko hmne badla toh kya hoga..

            //currencyOption:-- will give you an array of currencies.
            //selectCurrency:-- will select the currency.
            //amountDisable:-- Some user may not give amount for that
            //currencyDisable:-- Some user may not give currency for that

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>  {/* If user gives some additional css that's why we use this type of syntax. ie.'classname' is added */}
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor={amountId}>
                    {label}
                </label>
                <input
                    id={amountId}  //optional
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //Input filled enable hai ya disable.By-default false means enable.
                    value={amount}
                    onChange={ (e)=>onAmountChange && onAmountChange( Number (e.target.value) ) } //means agar onAmountChange available hai toh hmm method call karenge. "e.target.value" some time it returns a string so convert it to number.
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={ (e)=>onCurrencyChange && onCurrencyChange( e.target.value ) } 
                    disabled={currencyDisable} >

                        {/* We make a loop for getting all currencies.  */}
                        {/* agg loops use karne hain toh 'key' ka dhyan rakhe. */}
                        {/* here key=currency value of array */}
                        {currenyOptions.map( (currency)=>(
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ) 
                        )}

                        {/* We can not use 'useId' for keys! [remember] */}

                </select>
            </div>
        </div>
    );
}


export default InputBox;