import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className="flex m-10 justify-center">
                <div className='m-auto'>
                    <h1 className="text-3xl font-bold">404</h1>
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link  href="/">
                        <button className='mt-5 bg-transparent hover:bg-pink-500  font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
                            Go to Home Page
                        </button>
                    </Link>
                </div>

            </div>

        </>
    )
}



export default NotFound
