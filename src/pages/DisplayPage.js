import React, { useRef } from 'react'
import Header from '../components/Header'
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


function DisplayPage() {
    const Category_method1 = sessionStorage.getItem('Category_method1')
    const Category_method2 = sessionStorage.getItem('Category_method2')
    const Category_method4 = sessionStorage.getItem('Category_method4')
    const Category_method5 = sessionStorage.getItem('Category_method5')
    const Category_method7 = sessionStorage.getItem('Category_method7')
    const Category_method10 = sessionStorage.getItem('Category_method10')
    const Category_method11 = sessionStorage.getItem('Category_method11')
    const Category_method14 = sessionStorage.getItem('Category_method14')
    const Category_method15 = sessionStorage.getItem('Category_method15')
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
    const displaycategory1 = () => {
        if (Category_method1 === '0') return Chart1_1
        if (Category_method1 === '1') return Chart1_2
        if (Category_method1 === '2') return Chart1_3
        if (Category_method1 === '3') return Chart1_4
    }
    const displaycategory2 = () => {
        if (Category_method2 === '0') return Chart2_1
        if (Category_method2 === '1') return Chart2_2
        if (Category_method2 === '2') return Chart2_3
        if (Category_method2 === '3') return Chart2_4
    }
    const displaycategory4 = () => {
        if (Category_method4 === '0') return Chart3_1
        if (Category_method4 === '1') return Chart3_2
        if (Category_method4 === '2') return Chart3_3
    }
    const displaycategory5 = () => {
        if (Category_method5 === '0') return Chart4_1
        if (Category_method5 === '1') return Chart4_2
    }
    const displaycategory7 = () => {
        if (Category_method7 === '0') return Chart6_1
        if (Category_method7 === '1') return Chart6_2
    }
    const displaycategory10 = () => {
        if (Category_method10 === '0') return Chart9_1
        if (Category_method10 === '1') return Chart9_2
    }
    const displaycategory11 = () => {
        if (Category_method11 === '0') return Chart10_1
        if (Category_method11 === '1') return Chart10_2
    }
    const displaycategory14 = () => {
        if (Category_method14 === '0') return Chart13_1
        if (Category_method14 === '1') return Chart13_2
    }
    const displaycategory15 = () => {
        if (Category_method15 === '0') return Chart14_1
        if (Category_method15 === '1') return Chart14_2
    }
    
    const displaycategorymethod1 = () => {
        if (Category_method1 === '0') return "PurchaseGoodSupplier"
        if (Category_method1 === '1') return "PurchaseGoodHybrid"
        if (Category_method1 === '2') return "PurchaseGoodAverage"
        if (Category_method1 === '3') return "PurchaseGoodSpend"
    }
    const displaycategorymethod2 = () => {
        if (Category_method2 === '0') return "CapitalGoodSupplier"
        if (Category_method2 === '1') return "CapitalGoodHybrid"
        if (Category_method2 === '2') return "CapitalGoodProduct"
        if (Category_method2 === '3') return "CapitalGoodSpend"
    }
    const displaycategorymethod4 = () => {
        if (Category_method4 === '0') return "UpstreamFuel"
        if (Category_method4 === '1') return "UpstreamDistance"
        if (Category_method4 === '2') return "UpstreamSpend"
    }
    const displaycategorymethod5 = () => {
        if (Category_method5 === '0') return "WasteWasteType"
        if (Category_method5 === '1') return "WasteAverage"
    }
    const displaycategorymethod7 = () => {
        if (Category_method7 === '0') return "EmployeeDistance"
        if (Category_method7 === '1') return "EmployeeAverage"
    }
    const displaycategorymethod10 = () => {
        if (Category_method10 === '0') return "SoldProductsSite"
        if (Category_method10 === '1') return "SoldProductsAverage"
    }
    const displaycategorymethod11 = () => {
        if (Category_method11 === '0') return "SoldProductsDirect"
        if (Category_method11 === '1') return "SoldProductsIndirect"
    }
    const displaycategorymethod14 = () => {
        if (Category_method14 === '0') return "Franchisespecific"
        if (Category_method14 === '1') return "FranchisesAverage"
    }
    const displaycategorymethod15 = () => {
        if (Category_method15 === '0') return "InvestmentSpecific"
        if (Category_method15 === '1') return "InvestmentAverage"
    }
    console.log("---------->>>>>", displaycategory1())
    const labels = [displaycategorymethod1(), displaycategorymethod2(), 'FuelEnergyTransmission', displaycategorymethod4(), displaycategorymethod5(), 'BusinessTravelDistance', displaycategorymethod7(), 'UpstreamLeasedAssets', 'DownstreamTransporatation', displaycategorymethod10(), displaycategorymethod11(), 'EndOfLifeWasteType', 'DownStreamLeasedAssets', displaycategorymethod14(), displaycategorymethod15()]
    const Numbers_list = [displaycategory1(), displaycategory2(), Chart1_15, displaycategory4(), displaycategory5(), Chart5_1, displaycategory7(), Chart7_1, Chart8_1, displaycategory10(), displaycategory11(), Chart11_1, Chart12_1, displaycategory14(), displaycategory15()]
    const maxNumber = Math.max(...Numbers_list).toFixed(3);
    const data = {
        labels,
        datasets: [
            {
                label: 'CO2 Emission of Scope3(t CO2)',
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
                                <span>Max EMISSIONS OF SCOPE3</span>
                                <span>(2023/10/11/12:00)</span>
                                <span>{maxNumber} tCO2e</span>
                            </div>
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