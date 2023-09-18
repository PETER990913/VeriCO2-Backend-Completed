import React, {useState, useEffect} from 'react'
import '../../App.scss'
function UseDirect({onChange}) {
    const [v0, setV0]= useState(1000);
    const [v1, setV1]= useState(11500);
    const [v2, setV2]= useState(1.3);
    const [v3, setV3]= useState(0.5);
    const [v4, setV4]= useState(1100);
    const [v5, setV5]= useState(1900);
    const [v6, setV6]= useState(1.5);
    const [v7, setV7]= useState(0.5);
    const [v8, setV8]= useState(2000);
    const [v9, setV9]= useState(20000);
    const [v10, setV10]= useState(0.2);
    const [v11, setV11]= useState(0.5);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1)*Number(v2)*Number(v3)+Number(v4)*Number(v5)*Number(v6)*Number(v7)+Number(v8)*Number(v9)*Number(v10)*Number(v11))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9, v10, v11
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Total uses over lifetime</th>
                            <th>Number sold</th>
                            <th>Electricity  consumed per use(kWh)</th>
                            <th>Electricity emission factor(KgCO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td>Washing machine X100</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Washing machine X200</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Iron Y123</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e)=>{setV10(e.target.value)}}/></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e)=>{setV11(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UseDirect