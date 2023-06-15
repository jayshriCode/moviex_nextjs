import React from 'react'
import Herosection from './components/Herosection'


const Home = () => {
  return (
    <>

      <Herosection title={"LET'S WATCH MOVIE TOGETHER"} />

      <div className="container my-10 mx-auto md:px-6">
      <section className="mb-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/058.jpg"
                  className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div
                className="flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left">
                <div className="lg:pl-12">
                  <h2 className="mb-8 text-3xl font-bold">Let it surprise you</h2>
                  <p className="mb-8 pb-2 lg:pb-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime, sint, repellat vel quo quisquam accusamus in qui at
                    ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                    distinctio eum neque!
                  </p>

                  <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best team
                    </p>

                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best quality
                    </p>

                    <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p>
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                    eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                    ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                    faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                    Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                    Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                    tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                    aliquam lectus. Vestibulum mattis felis quis ex pharetra
                    luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                    ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10 text-center lg:text-left">
          <div className="py-12  md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex  items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div
                    className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-6 text-3xl font-bold">Why is it so great?</h2>
                    <p className="mb-8 text-neutral-500 dark:text-neutral-300">
                      Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                      neque iaculis malesuada. Aenean gravida magna orci, non
                      efficitur est porta id. Donec magna diam.
                    </p>

                    <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Support
                          24/7
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Analytics
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>Components
                        </p>
                      </div>
                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Updates
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Reports
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Mobile
                        </p>
                      </div>
                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Modules
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Blocks
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="mr-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Templates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/121.jpg"
                    className="rotate-lg-6 w-full rounded-lg shadow-lg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </>
  )
}

export default Home
