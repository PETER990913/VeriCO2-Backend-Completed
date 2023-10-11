import React, { useRef } from 'react'
import Header from '../components/Header'
// import exampleChart from '../assets/images/example-chart.png'
import Footer from '../components/Footer'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import { faker } from '@faker-js/faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Emission Chart of Scope3',
        },
    },
};
const labels = ['PurchaseGoodSupplier', 'PurchaseGoodHybrid', 'PurchaseGoodAverage', 'PurchaseGoodSpend', 'CapitalGoodSupplier', 'CapitalGoodHybrid', 'CapitalGoodProduct', 'CapitalGoodSpend', 'FuelEnergyLosses', 'UpstreamFuel', 'UpstreamDistance', 'UpstreamSpend', 'WasteType', 'WasteAverageData', 'BusinessTravelDistance', 'EmployeeDistance', 'EmployeeAverage', 'UpstreamLeasedAssets', 'DownstreamTransporatation', 'SoldProductSite', 'SoldProductAverage', 'SoldDirectUse', 'SoldIndirectUse', 'EndOfLifeWaste', 'DownStreamLeasedAssets', 'FranchieseSpecific', 'FranchisesAverage', 'InvestmentSpecific', 'InvestmentAverage']


function DisplayPage() {
    const Chart1_1 = localStorage.getItem('result1_1')/1000
    const Chart1_2 = localStorage.getItem('result1_2')/1000
    const Chart1_3 = localStorage.getItem('result1_3')/1000
    const Chart1_4 = localStorage.getItem('result1_4')/1000
    const Chart2_1 = localStorage.getItem('result2_1')/1000
    const Chart2_2 = localStorage.getItem('result2_2')/1000
    const Chart2_3 = localStorage.getItem('result2_3')/1000
    const Chart2_4 = localStorage.getItem('result2_4')/1000
    const Chart1_15 = localStorage.getItem('result1_15')/1000
    const Chart3_1 = localStorage.getItem('result3_1')/1000
    const Chart3_2 = localStorage.getItem('result3_2')/1000
    const Chart3_3 = localStorage.getItem('result3_3')/1000
    const Chart4_1 = localStorage.getItem('result4_1')/1000
    const Chart4_2 = localStorage.getItem('result4_2')/1000
    const Chart5_1 = localStorage.getItem('result5_1')/1000
    const Chart6_1 = localStorage.getItem('result6_1')/1000
    const Chart6_2 = localStorage.getItem('result6_2')/1000
    const Chart7_1 = localStorage.getItem('result7_1')/1000
    const Chart8_1 = localStorage.getItem('result8_1')/1000
    const Chart9_1 = localStorage.getItem('result9_1')/1000
    const Chart9_2 = localStorage.getItem('result9_2')/1000
    const Chart10_1 = localStorage.getItem('result10_1')/1000
    const Chart10_2 = localStorage.getItem('result10_2')/1000
    const Chart11_1 = localStorage.getItem('result11_1')/1000
    const Chart12_1 = localStorage.getItem('result12_1')/1000
    const Chart13_1 = localStorage.getItem('result13_1')/1000
    const Chart13_2 = localStorage.getItem('result13_2')/1000
    const Chart14_1 = localStorage.getItem('result14_1')/1000
    const Chart14_2 = localStorage.getItem('result14_2')/1000
    const Numbers_list = [Chart1_1, Chart1_2, Chart1_3, Chart1_4, Chart2_1, Chart2_2, Chart2_3, Chart2_4, Chart1_15, Chart3_1, Chart3_2, Chart3_3, Chart4_1, Chart4_2, Chart5_1, Chart6_1, Chart6_2, Chart7_1, Chart8_1, Chart9_1, Chart9_2, Chart10_1, Chart10_2, Chart11_1, Chart12_1, Chart13_1, Chart13_2, Chart14_1, Chart14_2]
    const maxNumber = Math.max(...Numbers_list);
    const data = {
        labels,
        datasets: [
            {
                label: 'CO2 Emission of Scope3(t CO2)',
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                data: Numbers_list,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
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
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
            const imgX = (pdfWidth - imgWidth * ratio) / 2
            const imgY = 30
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
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
                                <span>TOTAL EMISSIONS OF SCOPE3</span>
                                <span>(2023/10/11/12:00)</span>
                                <span>{maxNumber} tCO2e</span>
                            </div>
                            {/* <div className='item'>
                                <span>PREVIOUS PERIOD NET EMISSIONS</span>
                                <span>(DEC 2021 - NOV 2022)</span>
                                <span>491,536.08 tCO2e</span>
                            </div>
                            <div className='item'>
                                <span>VARIANCE</span>
                                <span>(14,239.3 T CO2E)</span>
                                <span>2.89%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='card'>
                        <div className='title'>Emission analysis display</div>
                        <div className='button' onClick={downloadPDF}>Download PDF</div>
                        <div className='chart'>
                            {/* <img src={exampleChart} alt="Example Chart" className='example-chart' /> */}
                            <Bar options={options} data={data} />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DisplayPage