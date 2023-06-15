'use client';
import React, { useState } from 'react'

const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                }),
            })
            if (response.status == 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            }else{
                setStatus('error');
            }


        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h1 className="text-2xl font-bold m-5 text-center">We'd love to hear <span className='text-red-500'>from you</span> </h1>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700  font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username" name='username' type="text" placeholder="Enter your name" value={user.username} onChange={handleChange} required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700  font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="text" placeholder="Enter your email" value={user.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700  font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name='phone' type="number" placeholder="Enter your phone" value={user.phone} onChange={handleChange} required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700  font-bold mb-2" htmlFor="message">
                            Message
                        </label>

                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name='message' placeholder="Enter your message" cols="30" rows="5" value={user.message} onChange={handleChange} required />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className=" bg-transparent hover:bg-pink-500  font-semibold hover:text-white py-1 px-4 border border-slate-400 hover:border-transparent rounded" type="submit">
                            Sign In
                        </button>
                        {status==='success' && <p className='text-green-800 font-semibold'>Thank you for your message!</p>}
                        {status==='error' && <p className='text-red-800 font-semibold'>There was an error submitting your message. Please try again.</p>}
                    </div>
                </form>


            </div>
        </>
    )
}

export default ContactForm
