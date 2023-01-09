import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Job_Search from '../Images/job-seeker.png';
import { Menu } from 'semantic-ui-react';


const Header = () => {
    const navigate = useNavigate();
    let [activeItem, setItem] = useState('');

    return (
        <Menu secondary style={{ fontFamily: 'fantasy', boxShadow: '0px 0px 8px -2px' }}>
            <Menu.Item
                name='Top Jobs'
                style={{ cursor: 'pointer', fontSize: '25px' }}
                onClick={() => navigate("/CoverPage")}
            >
                <img src={Job_Search} className="ui fluid image" style={{ width: '40px' }} />
                <p style={{ padding: '0px 10px' }}>Top Jobs</p>
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='home' data-testid='home-menu-item'
                    active={activeItem === 'home'}
                    onClick={() => navigate("/home")}
                />
                <Menu.Item
                    name='contact us'
                    active={activeItem === 'contact us'}
                    onClick={() => navigate("/contactus")}
                />
                <Menu.Item
                    name='jobs'
                    active={activeItem === 'jobs'}
                    onClick={() => navigate("/joblists")}
                />
            </Menu.Menu>
        </Menu>
    )
}

export default Header;