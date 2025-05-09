import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../../Config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Message = () => {
    const [messages, setMessages] = useState([]);

    const getData = async () => {
        try {
            const usersRef = collection(db, 'messages');
            const docsRef = await getDocs(usersRef);
            setMessages(docsRef.docs.map((doc) => doc.data()));
        } catch (e) {
            console.error('Error Loading messages: ', e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
                    {/* Title Section */}
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white text-center lg:pr-30 lg:text-left"
                        ><span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">SM</span> Huzaifa Riaz's <span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">Messages</span> to the Viewer
                        </motion.h2>
                    </div>

                    {/* Messages Section */}
                    <div className="w-full mx-auto md:w-1/2 space-y-4 sm:space-y-6 md:pl-20">
                        {messages && messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 200 }}
                                animate={{ opacity: 1,  x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.7 }}
                                className="p-4 bg-neutral-950 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-900"
                            >
                                <p className="text-white mb-2">{message.message}</p>
                                {message.messageLink && (
                                    <a
                                        href={message.messageLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-br from-orange-500 to-amber-400 rounded-md hover:from-orange-600 hover:to-amber-500"
                                    >
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7z" /></svg>
                                        View Link
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
