import React, { useState, useEffect } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProjectOutlined,
    MailOutlined,
    LogoutOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Table, Space, Modal, Form, Input, Card, message, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState('1');
    const [projects, setProjects] = useState([]);
    const [messages, setMessages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [form] = Form.useForm();
    const [settingsForm] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        fetchProjects();
        fetchMessages();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await api.get('/projects');
            setProjects(data);
        } catch (err) {
            console.error(err);
            message.error('Failed to load projects');
        }
    };

    const fetchMessages = async () => {
        try {
            const { data } = await api.get('/messages');
            setMessages(data);
        } catch (err) {
            console.error(err);
            message.error('Failed to load messages');
        }
    };

    const handleCreateOrUpdate = async (values) => {
        try {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('category', values.category);
            formData.append('description', values.description);
            formData.append('details', values.details);
            formData.append('location', values.location);

            if (fileList.length > 0) {
                formData.append('image', fileList[0].originFileObj);
            }

            if (editingProject) {
                await api.put(`/projects/${editingProject._id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                message.success('Project updated');
            } else {
                if (fileList.length === 0) {
                    message.error('Please upload an image');
                    return;
                }
                await api.post('/projects', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                message.success('Project created');
            }
            setIsModalOpen(false);
            setEditingProject(null);
            setFileList([]);
            form.resetFields();
            fetchProjects();
        } catch (err) {
            console.error(err);
            const errorMsg = err.response?.data?.msg || err.response?.data?.error || 'Failed to save project';
            message.error(errorMsg);
        }
    };

    const deleteProject = async (id) => {
        try {
            await api.delete(`/projects/${id}`);
            message.success('Project deleted');
            fetchProjects();
        } catch (err) {
            console.error(err);
            message.error('Failed to delete project');
        }
    };

    const handleUpdateCredentials = async (values) => {
        try {
            await api.put('/auth/update', values);
            message.success('Credentials updated successfully. Please login again.');
            settingsForm.resetFields();
            handleLogout();
        } catch (err) {
            console.error(err);
            message.error(err.response?.data?.msg || 'Failed to update credentials');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const projectColumns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => (
                <img
                    src={text}
                    alt="project"
                    style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
                />
            )
        },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { title: 'Location', dataIndex: 'location', key: 'location' },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button icon={<EditOutlined />} onClick={() => {
                        setEditingProject(record);
                        setIsModalOpen(true);
                        form.setFieldsValue(record);
                        setFileList([]);
                    }} />
                    <Button icon={<DeleteOutlined />} danger onClick={() => deleteProject(record._id)} />
                </Space>
            ),
        },
    ];

    const messageColumns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        { title: 'Message', dataIndex: 'message', key: 'message' },
        { title: 'Date', dataIndex: 'createdAt', key: 'createdAt', render: (date) => new Date(date).toLocaleString() },
    ];

    const renderContent = () => {
        if (selectedKey === '1') {
            return (
                <Card title="Project Management" extra={<Button type="primary" icon={<PlusOutlined />} onClick={() => { setIsModalOpen(true); setEditingProject(null); form.resetFields(); setFileList([]); }}>Add Project</Button>}>
                    <Table columns={projectColumns} dataSource={projects} rowKey="_id" />
                </Card>
            );
        } else if (selectedKey === '2') {
            return (
                <Card title="User Messages">
                    <Table columns={messageColumns} dataSource={messages} rowKey="_id" />
                </Card>
            );
        } else if (selectedKey === '3') {
            return (
                <Card title="Account Settings">
                    <div style={{ maxWidth: 400 }}>
                        <p style={{ marginBottom: 20 }}>Update your admin login credentials here. You will be logged out after a successful update.</p>
                        <Form form={settingsForm} layout="vertical" onFinish={handleUpdateCredentials}>
                            <Form.Item name="email" label="New Email Address" rules={[{ type: 'email', message: 'Please enter a valid email' }]}>
                                <Input placeholder="Leave blank to keep current" />
                            </Form.Item>
                            <Form.Item name="password" label="New Password" rules={[{ min: 6, message: 'Password must be at least 6 characters' }]}>
                                <Input.Password placeholder="Leave blank to keep current" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" danger>Update Credentials</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>
            );
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', borderRadius: 6 }} />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={({ key }) => setSelectedKey(key)}
                    items={[
                        { key: '1', icon: <ProjectOutlined />, label: 'Projects' },
                        { key: '2', icon: <MailOutlined />, label: 'Messages' },
                        { key: '3', icon: <SettingOutlined />, label: 'Settings' },
                        { key: 'logout', icon: <LogoutOutlined />, label: 'Logout', onClick: handleLogout },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: '16px', width: 64, height: 64 }}
                    />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                    {renderContent()}
                </Content>
            </Layout>

            <Modal
                title={editingProject ? "Edit Project" : "Add Project"}
                open={isModalOpen}
                onCancel={() => { setIsModalOpen(false); setEditingProject(null); form.resetFields(); setFileList([]); }}
                onOk={() => form.submit()}
            >
                <Form form={form} layout="vertical" onFinish={handleCreateOrUpdate}>
                    <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="location" label="Location" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name="details" label="Details" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Upload Image" required={!editingProject}>
                        <Upload
                            beforeUpload={() => false}
                            fileList={fileList}
                            onChange={({ fileList }) => setFileList(fileList)}
                            maxCount={1}
                            listType="picture-card"
                        >
                            {fileList.length < 1 && (
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
};

export default AdminDashboard;
