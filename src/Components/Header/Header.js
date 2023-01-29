import React from 'react';
import Button from '../Button/Button';
import './Header.scss';

const Header = ({ generate_random_number, sort_array }) => {
    return (
        <div className='header-div'>
            <Button onClick={generate_random_number}>Add Card</Button>
            <Button onClick={sort_array}>Sort Cards</Button>
        </div>
    )
}

export default Header;