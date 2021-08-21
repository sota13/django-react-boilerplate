import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function TheHeader() {
    return (
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
             <Menu.Item key={'1'}>
                <Link to='/'>Home</Link>
             </Menu.Item>
             <Menu.Item key={'2'}>
                 <Link to='/login'>Login</Link>
             </Menu.Item>
            </Menu>
            
        </div>
    )
}

export default TheHeader
