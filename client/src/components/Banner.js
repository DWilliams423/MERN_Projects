import React from 'react';
import { Link, navigate } from '@reach/router';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className='Banner-Logo shadowBox'>
                <Link to='recs/dashboard' style={{textDecoration: 'none', color:'white'}}><h1 className='rainbow rainbow_text_animated'>MyRecs</h1></Link>
            </div>
            
        </div>
    )
}

export default Banner;