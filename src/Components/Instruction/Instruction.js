import React from 'react';
import './Instruction.scss';

const Instruction = () => {
    return (
        <div className='instruction'>
            <span className='instruction_span'>Press the "add card"  button to add new Card.
                Use the "Sort Card" button to sort the cards by the increase.
                Press an X icon on the top of right to delete them.</span>
        </div>
    )
}

export default Instruction;