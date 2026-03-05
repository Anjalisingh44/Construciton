import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const { data } = await api.post('/auth/login', values);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            message.success('Login Successful');
            navigate('/admin');
        } catch (error) {
            console.error(error);
            message.error(error.response?.data?.msg || 'Login Failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
            <Card title="Admin Login" style={{ width: 400, borderRadius: '15px' }} headStyle={{ textAlign: 'center' }}>
                <Form name="login" onFinish={onFinish}>
                    <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large" loading={loading} style={{ borderRadius: '8px' }}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
