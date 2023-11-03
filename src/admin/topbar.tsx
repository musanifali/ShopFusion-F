import React from 'react';
import { Layout, Button, Space } from 'antd';
import { MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

interface TopBarProps {
    openDrawer: () => void; // Specify the type of openDrawer prop
}

const TopBar: React.FC<TopBarProps> = ({ openDrawer }) => {
    const navigate = useNavigate();
    const handleUserClick = () => {
        navigate('/users');
    };
    const handleSettingClick = () => {
        navigate('/setting');
    };

    return (
        <Header className="bg-gray-100 p-0 flex items-center px-4">
            <Button icon={<MenuOutlined className="text-black text-2xl" />} onClick={openDrawer} />

            <div className="flex items-center flex-grow justify-center">
                <div className=' font-extrabold text-3xl  text-white '>
                    <div className=' mx-2'>
                       {/* <span className='text-green-400'>Library</span> <span className='text-pink-500'>Management</span>  <span className='text-green-400'>System</span> */}
                    </div>
                </div>
            </div>

            <div className="ml-auto">
                <Space size="large">
                    <Button icon={<SettingOutlined className="text-black text-2xl" />} onClick={handleSettingClick} />
                    <Button icon={<UserOutlined className="text-black text-2xl" />} onClick={handleUserClick} />
                </Space>
            </div>
        </Header>
    );
};

export default TopBar;
