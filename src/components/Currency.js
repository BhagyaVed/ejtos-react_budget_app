import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const [ newCurrency, setCurrency] = useState(currency);
    const handleSelect = (e) => {
        console.log(newCurrency, newCurrency.charAt(0), e.target, e.target.innerHTML);
        setCurrency(e.target.innerHTML);
        console.log(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.innerHTML.charAt(0),
        });
    };

    return(
        <div className='row'>       
            <div className="dropdown">
                <button className="btn bg_green btn-lg dropdown-toggle" style={{ color: 'white' }} type="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({newCurrency})
                </button>
                <ul className="dropdown-menu bg_green" aria-labelledby="currencyDropdown" onClick={handleSelect}>
                    <li ><a className="dropdown-item">$ Dollar</a></li>
                    <li><a className="dropdown-item">£ Pound</a></li>
                    <li><a className="dropdown-item">€ Euro</a></li>
                    <li><a className="dropdown-item">₹ Rupee</a></li>
                </ul>
                </div>

            {/* <select className="btn bg_green btn-lg dropdown-toggle form-select" aria-label="Default select example" onChange={(event) => setCurrency(event.target.value)}>
                <option value="$ Dollar" name="Dollar"> Currency ($ Dollar)</option>
                <option value="£ Pound" name="Pound">£ Pound</option>
                <option value="€ Euro" name="Euro">€ Euro</option>
                <option value="₹ Rupee" name="Rupee">₹ Rupee</option>
            </select> */}
            
        </div>
    );
}

export default Currency;