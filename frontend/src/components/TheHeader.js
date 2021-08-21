import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions'

function TheHeader() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
             <Menu.Item key={'1'}>
                <Link to='/'>Home</Link>
             </Menu.Item>
             {userInfo ? <Menu.Item key={'3'} onClick={logoutHandler}>
                 logout
             </Menu.Item> : <Menu.Item key={'2'}>
                 <Link to='/login'>Login</Link>
             </Menu.Item>}
            </Menu>
            
        </div>
    )
}

export default TheHeader
