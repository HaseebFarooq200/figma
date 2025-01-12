import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal, message, Upload, Button, Avatar } from 'antd';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const Createagent = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );
    return (
        <div className='p-4'>
            <div className='flex flex-row justify-between items-center' >
                <div className='' >
                    <p className='text-[26px] font-bold text-[#151D48]'>AI Agent</p>
                    <p className='text-[16px] text-[#7E7A7A] mt-1'>Manage and Customize your AI Agents</p>
                </div>
                <div className='inline-block bg-[#E5AB39] py-2 px-8 rounded-lg cursor-pointer mt-8'>
                    <p className='text-[#FFFFFF] text-center font-medium text-[12px]'>Create Agent</p>
                </div>
            </div>
            <div className='mt-6'>
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                        Agent name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                        Age
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="number"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                        Place
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                        Occupation
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                        Hobbies
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                        Generate Avatar with AI
                                    </label>
                                    <div className="mt-2" onClick={showModal}>
                                        <Upload
                                            name="avatar"
                                            listType="picture-circle"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}
                                        >
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt="avatar"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                />
                                            ) : (
                                                uploadButton
                                            )}
                                        </Upload>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                        Additional Characteristics
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button
                        key="ok"
                        type="primary"
                        onClick={handleOk}
                        className="flex mx-auto mt-4"
                    >
                        Continue
                    </Button>,
                ]}
            >
                <h3 className="font-bold text-[18px]">Choose Avatar</h3>
                <p className='mt-1 text-[#000000] text-[12px]'>Select and choose avatar of your choice and add it on your profile</p>
                <div className='mt-2 flex flex-wrap '>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                </div>
            </Modal>
        </div>
    );
}

export default Createagent;
