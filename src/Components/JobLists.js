import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";

import Header from '../Components/Header';

const JobLists = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className='ui container grid'>
                <div className='ui divided padded equal width grid'>
                    <div className='row'>
                        <div className='column'>
                            <div className='ui centered cards'>
                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>Sales Manager</Card.Header>
                                        <Card.Meta>SRG International</Card.Meta>

                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    4-9 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    3,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>

                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>Account Officer - Banking</Card.Header>
                                        <Card.Meta>KAYPEE FOOD PRODUCTS</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    4-9 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    3,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>

                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>SAP FICO Consultant</Card.Header>
                                        <Card.Meta>Bhavana Balkrishna Govekar</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    4-9 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    3,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>


                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>Assisant Manager - PLM</Card.Header>
                                        <Card.Meta>Indigo Airlines</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    4-9 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    3,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='ui centered cards'>
                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>Sales Manager</Card.Header>
                                        <Card.Meta>KAYPEE FOOD PRODUCTS</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    5-9 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    5,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>
                            </div>

                            <div className='ui centered cards'>
                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>Assistant Manager - Banking</Card.Header>
                                        <Card.Meta>ICICI Bank</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    4-9 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    5,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>
                            </div>
                            <div className='ui centered cards'>
                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>Account Officer - Banking</Card.Header>
                                        <Card.Meta>KAYPEE FOOD PRODUCTS</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    4-9 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    3,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>
                            </div>
                            <div className='ui centered cards'>
                                <div className='ui link card' style={{ width: '530px' }}>
                                    <Card.Content onClick={() => navigate("/applyjob")}>
                                        <Card.Header>Officer</Card.Header>
                                        <Card.Meta>FOOD PRODUCTS</Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui three column grid'>
                                            <div className='row'>
                                                <div className='column'>
                                                    <Icon name='briefcase' />
                                                    5-10 yrs
                                                </div>
                                                <div className='column'>
                                                    <Icon name='rupee sign' />
                                                    5,00,000-9,00,000 PA
                                                </div>
                                                <div className='column'>
                                                    <Icon name='map marker alternate' />
                                                    remote
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Content>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobLists;