import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import { Form, Input, Button, message, Spin } from 'antd';
import { LockOutlined, MailOutlined  } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function LoginScreen({history}) {

    const dispatch = useDispatch()

    const userLogin = useSelector(state=> state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {

      if (userInfo) {
        history.push('/')
      }
      

    },[history, userInfo])

    const onFinish = (values) => {
        console.log('Received email of form: ', values.email);
        console.log('Received password of form: ', values.password);
        const email = values.email
        const password = values.password
        dispatch(login(email, password))
      };
    
    const errorAlert = () => {
        message.error(error);
      };

    return (
        <div className="block formBlock">
          <div className="container-fluid">
            <div className="titleHolder">
            <h2>Log in</h2>
            {loading && <Spin />}
            </div>
            {error && errorAlert()}
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

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                  Log in
                </Button>
                Or <Link to='/register'>register now!</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
    )
}

export default LoginScreen
