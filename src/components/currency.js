
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency);

    const currencies = [
        {
            symbol: "$",
            name: "Dollar"
        },
        {
            symbol: "£",
            name: "Pound"
        },
        {
            symbol: "€",
            name: "Euro"
        },
        {
            symbol: "₹",
            name: "Ruppee"
        }
    ];
    let selected = currencies.find(e => e.symbol === newCurrency) || currencies[0];
    const handleCurrencyChange = (event) => {
        const newValue = event.target.value; 
        setCurrency(newValue);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newValue,
        });
    };

    return (
        <select className="form-select" id="currencySelect"  value={selected.symbol} onChange={(event) => handleCurrencyChange(event)}>
            {currencies.map((cu) => (
                <option key={cu.symbol} value={cu.symbol} name={cu.name}>{cu.symbol} {cu.name}</option>
            ))}
        </select>
    );
};
export default Currency;
