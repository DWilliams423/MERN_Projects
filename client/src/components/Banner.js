import React from 'react';
import { Link, navigate } from '@reach/router';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className='Banner-Logo'>
                <Link to='/' style={{textDecoration: 'none', color:'white'}}><h1 >MyRecs</h1></Link>
            </div>
            
        </div>
    )
}

export default Banner;