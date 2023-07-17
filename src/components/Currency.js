import React, { useState } from 'react';

const Currency = () => {
    const [currency, setCurrency] = useState('');
    return(
        <div class="dropdown">
            <button class="btn bg_green dropdown-toggle" type="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currency})
            </button>
            <ul class="dropdown-menu" aria-labelledby="currencyDropdown" onChange={(event) => setCurrency(event.target.value)}>
                <li><a class="dropdown-item" href="#">$ Dollar</a></li>
                <li><a class="dropdown-item" href="#">£ Pound</a></li>
                <li><a class="dropdown-item" href="#">€ Euro</a></li>
                <li><a class="dropdown-item" href="#">₹ Rupee</a></li>
            </ul>
        </div>
    );
}

export default Currency;