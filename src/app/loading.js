import React from 'react'

const Loading = () => {
    return (
        <>
            <div className='flex h-screen justify-center mt-5'>
                <div className="m-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-pink-900 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <div className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Loading...</div>
                </div>
            </div>

            {/* <div className='flex h-screen justify-center mt-5'>
                <div className="m-auto h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-red-800  text-pink-900 align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                    role="status">
                    <div className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</div>
                </div>
            </div> */}
        </>
    )
}

export default Loading
