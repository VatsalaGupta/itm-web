import React from 'react';

const PDFViewer = () => {
    const openPDF = () => {
        const pdfURL = "./Images/BAMS 1st YEAR JUNIORS.docx"; // Change the path to your PDF file
        window.open(pdfURL, '_blank');
    };
    const openPDF1 = () => {
        const pdfURL1 = "./Images/BAMS 1st YEAR SENIORS.docx"; // Change the path to your PDF file
        window.open(pdfURL1, '_blank');
    };

    return (
        <div>
            <h1 className='text-center text-3xl underline font-bold mt-20 borde-2'>STUDENT LIST</h1>

            <div className='items-center justify-center flex content-center'>
                <div className="mt-10 ">
                    <table className="border-collapse border border-slate-400 px-5 text-lg">
                        <tbody>
                            <tr>
                                <td className="border border-black font-bold text-center">BAMS 1st YEAR JUNIORS</td>
                                <td className="border border-black text-center hover:text-blue-800">  <button className='underline ' onClick={openPDF}>BAMS 1st YEAR JUNIORS</button></td>
                            </tr>
                            <tr>
                                <td className="border border-black font-bold text-center">BAMS 1st YEAR SENIORS</td>
                                <td className="border border-black text-center hover:text-blue-800">  <button className=' underline ' onClick={openPDF1}>BAMS 1st YEAR SENIORS</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default PDFViewer;
