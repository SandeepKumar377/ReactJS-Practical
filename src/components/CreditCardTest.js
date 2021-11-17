import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

export const CreditCardTest = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div>
            <h1>Credit Cards Demo</h1>
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form>
                <input type="tel" name='number'
                    placeholder='Card number'
                    maxLength='16'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
                <input type="text" name='name'
                    placeholder='Card holder name'
                    value={name}
                    maxLength='16'
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
                <input type="text" name='expiry'
                    placeholder='Expiry'
                    maxLength='4'
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
                <input type="tel" name='cvc'
                    placeholder='CVC'
                    maxLength='3'
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
            </form>
        </div>
    )
}
