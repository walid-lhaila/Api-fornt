import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        if (response.ok) {
            // Parse the response data
            const data = await response.json();

            if (data && data.authorization && data.authorization.token) {
                localStorage.setItem('token', data.authorization.token);

                if (data && data.user && data.user.role) {
                    switch (data.user.role) {
                        case 'organizer':
                            navigate('/annonces');
                            break;
                        case 'volunteer':
                            navigate('/AllAnnounces');
                            break;
                        default:
                            console.log("Role not recognized:", data.user.role);
                            navigate('/defaultRedirectPage');
                            break;
                    }
                }
            }
        }
    }
        return (
            <div>
                <section className="">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[904px] lg:py-0">
                        <div className="py-6 flex flex-col justify-center sm:py-12">
                            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                                <div
                                    className="absolute w-[500px] inset-0 bg-gradient-to-l from-black to-gray-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                                </div>
                                <div
                                    className="relative w-[500px] px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                    <div className="max-w-md mx-auto">
                                        <div>
                                            <h1 className="text-2xl font-semibold text-center">YouCare</h1>
                                        </div>
                                        <form onSubmit={submit}>
                                            <div className="divide-y divide-gray-200">
                                                <div
                                                    className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                    <div className="relative">
                                                        <input onChange={e => setEmail(e.target.value)}
                                                               autoComplete="off" type="text"
                                                               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                               placeholder="Email address"/>
                                                        <label
                                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                                                            Address</label>
                                                    </div>
                                                    <div className="relative">
                                                        <input onChange={e => setPassword(e.target.value)}
                                                               autoComplete="off" type="password"
                                                               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                               placeholder="Password"/>
                                                        <label
                                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                                    </div>
                                                    <div className="relative">
                                                        <button type="submit"
                                                                className="bg-black text-white hover:bg-gray-900 duration-300 rounded-md px-8 py-1">Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };


export default Signin;