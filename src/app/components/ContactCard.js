import { MdEmail, MdChat, MdForum } from 'react-icons/md';

const ContactCard = () => {
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 my-10 '>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                        <div className='flex'>
                            <i className='m-auto text-red-500'>< MdEmail size={24} /></i>
                        </div>

                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2">Email</div>
                            <p className="text-gray-700 text-base">
                                Monday to Friday Expected
                            </p>
                            <p className="text-gray-700 text-base">
                                Response time: 72 hours
                            </p>
                        </div>
                        <div className="px-6 pb-2 flex">
                            <button className='m-auto bg-transparent hover:bg-pink-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded'>
                                Send Email
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                        <div className='flex'>
                            <i className='m-auto text-red-500'>< MdChat size={24} /></i>
                        </div>

                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2">Live Chat</div>
                            <p className="text-gray-700 text-base">
                                Weekdays:9 AM -6 PM ET
                            </p>
                            <p className="text-gray-700 text-base">
                                Weekends: 9 AM - 5 PM ET
                            </p>
                        </div>
                        <div className="px-6 pb-2 flex">
                            <button className='m-auto bg-transparent hover:bg-pink-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded'>
                                Chat Now
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                        <div className='flex'>
                            <i className='m-auto text-red-500'>< MdForum size={24} /></i>
                        </div>

                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2">Community Forum</div>
                            <p className="text-gray-700 text-base">
                                Monday to Friday Expected
                            </p>
                            <p className="text-gray-700 text-base">
                                Response time: 72 hours
                            </p>
                        </div>
                        <div className="px-6 pb-2 flex">
                            <button className='m-auto bg-transparent hover:bg-pink-500  font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded'>
                                Ask The Community
                            </button>
                        </div>
                    </div>

                </div>
            

        </>
    )
}

export default ContactCard
