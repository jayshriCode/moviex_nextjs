'use client'; // Error components must be Client Components
 
import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
   // console.error(error);
  }, [error]);
 
  return (
    <>
    <div className="flex m-10 justify-center">
    <div className='m-auto'>
    <h2 className="text-3xl font-bold">Something went wrong!</h2>
      <button className='mt-5 bg-transparent hover:bg-pink-500  font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded' onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      </div>
    </div>
      
    </>
  );
}