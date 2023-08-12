import React from 'react'
const Page1 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font" />
            <div className="container px-5 py-6 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" className="object-cover object-center h-full w-full" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/ayurveda-1200-sixteen_nine.jpg?size=948:533 // image address" />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">

                        <div className="flex-grow">

                            <p className="leading-relaxed text-base">
                                <h1 className="college text-6xl " style={{ font: "bold", fontSize: "40px" }}>Welcome to <span style={{ color: " darkgreen" }}> ITM  Ayurvedic Medical
                                    College{" "}</span>
                                    And Hospital</h1><br />
                                The ITM Group of Institutions in Maharajganj is renowned for its
                                excellence in education and commitment to holistic healing. The focus
                                of their corporate standard website is their Ayurvedic college, which
                                offers the prestigious Bachelor of Ayurveda Medicine and Surgery
                                (BAMS) undergraduate degree program.<br></br>

                                <br></br>
                                The are herbal garden is being maintained which facilities the
                                academic needs of student the huge library has in its store the
                                medical books with around 10103 books and 350 titles. All the
                                department are well equipped with chart models and as per the body
                                norms. The aim of the institute is to make the institute a prime
                                educational center of region so as to cater rural areas for the poor and
                                humble people of india.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">
                                <button class="bg-green-500 text-white font-bold py-2 px-4 rounded">
                                    Read more
                                </button>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section />
        </div>
    )
}

export default Page1