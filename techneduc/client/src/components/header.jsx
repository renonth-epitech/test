import React from 'react';

import '../style/header.scss'

const Header = () =>
    <div className='header'>
        <h1 >
            <a href="/lecture">
                Techneduc
            </a>
        </h1>
        <div className='administration'>
            <a href="/admin">
                Administration
            </a>
        </div>
    </div >

export default Header;