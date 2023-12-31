import InputBox from "./InputBox";
import { useState } from 'react';
import useCurrencyinfo from './Hooks/useCurrencyinfo'; //custom hook

function Currency() {

    const [amount,setAmount]=useState(0);
    //It is for converting from which currency to which currency
        const [from,setFrom]=useState('usd');  //denoted to from currency select.
        const [to,setTo]=useState('inr');     //denoted to to currency select.
    
    //Values coming from convert.
        const [convertedAmount,setConvertedAmount]=useState(0);

    //custom hook:-- for converting 'from' to 'to'
        const Currencyinfo=useCurrencyinfo(from);  //it will return all currency objects (like:- inr-82.00,yen-40.00 etc etc)that will convert from usd.

        //Currency info will return a data of consisting key and it's object.
        //But we have to pass keys to "option" tag.
        //We use "Object.keys()" to get all keys

        const options =Object.keys(Currencyinfo);

    //for swapping 'from' to 'to'
        const swap=()=>{
            setFrom(to);
            setTo(from);
            setConvertedAmount(amount);
                //let amount is 1 usd, and it is converted to 82 inr.
                //while swap thne and it returns back to 1
            setAmount(convertedAmount);
        }

    //final result show
        const convert=()=>{
            setConvertedAmount(amount*Currencyinfo[to])
        }

    return ( 
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/8531263/pexels-photo-8531263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert(); //onsubmit convertion occurs
                        }}>
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currenyOptions={options}
                                    onAmountChange={(amount)=>
                                        setAmount(amount) //pass function without {} because we donot want to return anything
                                    }
                                    onCurrencyChange={(from)=>
                                        setFrom(from) //pass function without {} because we donot want to return anything
                                    }
                                    selectCurrency={from}
                                />
                            </div>

                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap} //Here it is refernce.We can use this way also onClick={()=>swap()}
                                >
                                    swap
                                </button>
                            </div>

                            <div className="w-full mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currenyOptions={options}
                                    onCurrencyChange={(to)=>
                                        setTo(to)  //pass function without {} because we donot want to return anything
                                    }
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>

                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from} to {to}
                            </button>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default Currency;