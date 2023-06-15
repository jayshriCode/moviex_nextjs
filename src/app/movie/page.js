import React from 'react'
import MovieCard from '../components/MovieCard';



const Movie = async () => {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        }, 2000)
    })
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae9a941262msh8989d518872d2a9p150961jsn993dd0a3d84f',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const main_data = data.titles;
    //console.log(data);
    return (
        <>
       
            <div className="container px-14">
            
                <h1 className="text-3xl font-bold m-5">Series & Movies</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mb-10 '>
                {
                    main_data.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />
                    })
                }
                </div>
            </div>

        </>
    )
}

export default Movie
