import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import { Form, Input, Button, message, Spin } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function RegisterScreen({history}) {

    const dispath = useDispatch()

    const userRegister = useSelector(state => state.userRegister)

    const { error, loading, userInfo } = userRegister

    useEffect(() =>{

      if (userInfo) {
        history.push('/')
      }

    },[history, userInfo])


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const name = values.name
        const email = values.email
        const password = values.password
        const password2 = values.password2

        if (password !== password2) {
          message.error(error)
        } else {
          dispath(register(name, email, password))
        }

      };
    const errorAlert = () => {
        message.error(error);
      };  
    return (
        <div className="block formBlock">
          <div className="container-fluid">
            <div className="titleHolder">
            <h2>Sign up</h2>
            {loading && <Spin/>}
            {error && errorAlert()}
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              size={'large'}
             >

             <Form.Item
                name="name"
                rules={[
                 {
                    required: true,
                    message: 'Please input your Name!' 
                 }
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
              </Form.Item>   
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" type="email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="password2"
                rules={[
                  {
                    required: true,
                    message: 'Please cinfirm your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                  Sign up
                </Button>
                Or <Link to='/login'>log in!</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
    )
}

export default RegisterScreen
