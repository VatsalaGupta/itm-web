import React from 'react'

const Section1 = () => {
    return (
        <div>
            <section className=" body-font">
                <div className="container px-5 py-12 mx-auto"><h1 className="text-center underline text-5xl font">Vision and Mission</h1>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center mt-10">
                        <div className="sm:w-1/2 mb-10 px-4 ">
                            <div className="rounded-lg  overflow-hidden">
                                <img alt="content" className="object-cover object-center w-full max-w-full h-auto " src='./Images/vision.jpeg' />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">VISION</h2>
                            <p className="leading-relaxed text-base text-left">TThe chief objective if this Hospital and Institute is to provide adequate care. Treatment and education to its patients and student. Its principal product is medical surgical and nursing service to the institute is committed it provide quality education and health service without any discrimination to all almost all specialities are providing service in the outpatient deptt. (OPD) and admission is done if necessary casualty & Emergency function round the college is committed to obtain the highest academic place amoung all the ayurvedic medical college in the country by enriching the inquisitive minds of its student with the latest research findings and most up to date and advanced scientific knowlwdge and information on store unturned in making itself one of the finest and the most advanced ayurvedic medical college of the world.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg overflow-hidden">
                                <img alt="content" className="object-cover object-center w-full max-w-full h-auto" src='./Images/mission.jpeg' />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">MISSION</h2>
                            <p className="leading-relaxed text-base text-left"><li>To promote the growth and development in the field of Ayurveda.</li>
                                <li>To produce graduates ih the discipline of Ayurveda.</li>
                                <li>To provide medical care facilities through the traditional Ayurvedic system of medicine to the suffering humanity.</li>
                                <li>To provide and assist in providing services and facilities of the highest order to the human society through the Ayurvedic system of Medicine.</li>
                                <li>To conduct experiments and develop patterns of teaching in under graduate education in Ayurveda.</li></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1