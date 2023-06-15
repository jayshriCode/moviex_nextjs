//'use client';

import {notFound} from 'next/navigation'
import React from 'react'

async function getData(id){
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae9a941262msh8989d518872d2a9p150961jsn993dd0a3d84f',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    
    //console.log(data);
   
    if(data.length == 0){
        notFound();
        //throw new Error('Something went wrong...');
    }
    const main_data = data[0].details;
    return main_data;
    
}

const page =  async ({params}) => {
    
    const id = params.id;
    const main_data = await getData(id);
    
    return (
        <>
            <div className="container px-14">
                <h2 className="text-2xl font-bold m-5">Netflix \ <span className='text-red-900'>{main_data.type.substring(0,1).toUpperCase()+main_data.type.substring(1)}</span> </h2>
                <img className="w-1/2" src={main_data.backgroundImage.url} alt={main_data.title} />
                <div className="py-4">
                        <div className="font-bold text-xl mb-2">{main_data.title}</div>
                        <p className="text-gray-700 text-base">
                            {main_data.synopsis}
                        </p>
                    </div> 
            </div>

        </>
    )
}



//   export async function getServerSideProps(context) {
//     const id = context.params.id
//     console.log("hello id...................."+id);
//     const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'ae9a941262msh8989d518872d2a9p150961jsn993dd0a3d84f',
//             'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//         }
//     };
//     const response = await fetch(url, options);
//     const data = await response.json();
//     const main_data = data[0].details;
  
//     return {
//       props: {
//         main_data,
//       },
//     };
//   }

export default page
