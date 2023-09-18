import React, {useState, useEffect} from 'react'
import '../../App.scss'
function UpstreamAsset({onChange}) {
    const [v0, setV0]= useState(200);
    const [v1, setV1]= useState(2000);
    const [v2, setV2]= useState(0.75);
    const [v3, setV3]= useState(1500);
    const [v4, setV4]= useState(0.2);
    const [v5, setV5]= useState(200);
    const [v6, setV6]= useState(2000);
    const [v7, setV7]= useState(0.75);
    const [v8, setV8]= useState(3000);
    const [v9, setV9]= useState(0.7);
    const [v10, setV10]= useState(200);
    const [v11, setV11]= useState(2000);
    const [v12, setV12]= useState(0.75);
    const [v13, setV13]= useState(5);
    const [v14, setV14]= useState(1500);
    useEffect(()=>{
        onChange(Number(v0)/(Number(v1)*Number(v2))*Number(v3)*Number(v4)+Number(v5)/(Number(v6)*Number(v7))*Number(v8)*Number(v9)+Number(v10)/(Number(v11)*Number(v12))*Number(v13)*Number(v14))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Assets</th>
                            <th>reporting company’s area (m2)</th>
                            <th>building’s total area (m2)</th>
                            <th>building’s occupancy rate</th>
                            <th>Total use(kWh)</th>
                            <th>Emission factor(kg CO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td>Natural gas</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Electricity</td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Fugitive emissions</td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e)=>{setV10(e.target.value)}}/></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e)=>{setV11(e.target.value)}}/></td>
                            <td><input type='text' value={v12} className='Input_form' onChange={(e)=>{setV12(e.target.value)}}/></td>
                            <td><input type='text' value={v13} className='Input_form' onChange={(e)=>{setV13(e.target.value)}}/></td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e)=>{setV14(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamAsset