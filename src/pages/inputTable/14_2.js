import React, {useState, useEffect} from 'react'
import '../../App.scss'
function InvestmentAverage({onChange}) {
    const [v0, setV0]= useState(3000000);
    const [v1, setV1]= useState(5);
    const [v2, setV2]= useState(100);
    const [v3, setV3]= useState(0.6);
    const [v4, setV4]= useState(7500000);
    const [v5, setV5]= useState(15);
    const [v6, setV6]= useState(100);
    const [v7, setV7]= useState(0.5);
    const [v8, setV8]= useState(1150000);
    const [v9, setV9]= useState(20);
    const [v10, setV10]= useState(100);
    const [v11, setV11]= useState(3.0);
    const [v12, setV12]= useState(5500000);
    const [v13, setV13]= useState(10);
    const [v14, setV14]= useState(60);
    const [v15, setV15]= useState(2.0);
    const [v16, setV16]= useState(40);
    const [v17, setV17]= useState(1.5);

    useEffect(()=>{
        onChange((Number(v0)*Number(v1)/100*Number(v2)/100*Number(v3)+Number(v4)*Number(v5)/100*Number(v6)/100*Number(v7))/100+Number(v8)*Number(v9)/100*Number(v10)/100*Number(v11)+Number(v12)*Number(v13)/100*Number(v14)/100*Number(v15)+Number(v12)*Number(v13)/100*Number(v16)/100*Number(v17))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Investee  company</th>
                            <th>Revenue of investee company ($)</th>
                            <th>Reporting  company’s share of  equity (percent)</th>
                            <th>Investee company’s sector(s) of operation</th>
                            <th>Investee company’s revenue in sector (percent)</th>
                            <th>Scope 1 and scope 2 emission factor  of sector   (kg CO2e/$ revenue)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                            <td>Telecommunication</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                            <td>Pharmaceutical</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                            <td>Energy generation</td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e)=>{setV10(e.target.value)}}/></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e)=>{setV11(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>4</td>
                            <td rowSpan={2}><input type='text' value={v12} className='Input_form' onChange={(e)=>{setV12(e.target.value)}}/></td>
                            <td rowSpan={2}><input type='text' value={v13} className='Input_form' onChange={(e)=>{setV13(e.target.value)}}/></td>
                            <td>Food and beverage</td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e)=>{setV14(e.target.value)}}/></td>
                            <td><input type='text' value={v15} className='Input_form' onChange={(e)=>{setV15(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Apparel</td>
                            <td><input type='text' value={v16} className='Input_form' onChange={(e)=>{setV16(e.target.value)}}/></td>
                            <td><input type='text' value={v17} className='Input_form' onChange={(e)=>{setV17(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvestmentAverage