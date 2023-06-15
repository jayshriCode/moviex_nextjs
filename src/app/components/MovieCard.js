import Link from 'next/link';
import React from 'react'

const MovieCard = (curEle) => {
    const { id, type, title, synopsis, releaseYear } = curEle.jawSummary;
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img className="w-full" src={curEle.jawSummary.backgroundImage.url} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title.substring(0, 20)}</div>
                    <p className="text-gray-700 text-base">
                        {`${synopsis.substring(0, 66)} ...`}
                    </p>
                </div>
                <div className="px-6 pt-2 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{type}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{releaseYear}</span>
                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                </div>
                <div className="px-6 pt-2 pb-4">
                    <Link href={`/movie/${id}`}>
                        <button className='bg-transparent hover:bg-pink-500  font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded' >
                            Read More
                        </button>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default MovieCard
