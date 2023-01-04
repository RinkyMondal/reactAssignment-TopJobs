import React from 'react';

import Contact_us from '../Images/contact_us.png';
import Header from '../Components/Header';

const CoverPage = () => {

    return (
        <div>
            <div className='ui fluid container'>
                <Header />
                <img src={Contact_us} className="ui fluid image" />
            </div>
        </div>
    )
}

export default CoverPage;