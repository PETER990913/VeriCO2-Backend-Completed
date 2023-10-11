import React, { useRef } from 'react'
import Header from '../components/Header'
import exampleChart from '../assets/images/example-chart.png'
import Footer from '../components/Footer'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
function DisplayPage() {
    const pdfRef = useRef()
    const downloadPDF = () => {
        const input = pdfRef.current
        html2canvas(input).then((canvas) => {
            console.log("---------------------------")
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4', true)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width
            const imgHeight = canvas.height
            const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight)
            const imgX = (pdfWidth-imgWidth*ratio)/2
            const imgY = 30
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio)
            pdf.save('invoice.pdf')
        })
    }
    return (
        <div className='DisplayPage' ref={pdfRef}>
            <Header />
            <div className='container'>
                <div className='cards'>
                    <div className='card'>
                        <div className='items'>
                            <div className='item'>
                                <span>Emissions</span>
                                <span>(t co2e)</span>
                            </div>
                            <div className='item'>
                                <span>TOTAL EMISSIONS</span>
                                <span>(DEC 2021 - NOV 2022)</span>
                                <span>505,775.37 tCO2e</span>
                            </div>
                            <div className='item'>
                                <span>PREVIOUS PERIOD NET EMISSIONS</span>
                                <span>(DEC 2021 - NOV 2022)</span>
                                <span>491,536.08 tCO2e</span>
                            </div>
                            <div className='item'>
                                <span>VARIANCE</span>
                                <span>(14,239.3 T CO2E)</span>
                                <span>2.89%</span>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='title'>Emission by Period</div>
                        <div className='chart'>
                            <img src={exampleChart} alt="Example Chart" className='example-chart' />
                        </div>
                        <div className='button' onClick={downloadPDF}>Download PDF</div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DisplayPage