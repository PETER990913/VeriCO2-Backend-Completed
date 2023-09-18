import React, {useState, useEffect} from 'react'
import '../../App.scss'
function PurchasedAverage({onChange}) {
    const [v0, setV0]= useState(400);
    const [v1, setV1]= useState(20);
    const [v2, setV2]= useState(200);
    const [v3, setV3]= useState(10);
    const [v4, setV4]= useState(500);
    const [v5, setV5]= useState(40);
    const [v6, setV6]= useState(100);
    const [v7, setV7]= useState(70);
    const [v8, setV8]= useState(1500);
    const [v9, setV9]= useState(3);
    const [v10, setV10]= useState(300);
    const [v11, setV11]= useState(3);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7)+Number(v8)*Number(v9)+Number(v10)*Number(v11))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9, v10, v11
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchased semi-processed components</th>
                            <th>Mass (kg)</th>
                            <th>Emission factor (kg CO2e/kg)</th>
                        </tr>
                        <tr>
                            <td>Hard drive</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}} /></td>
                        </tr>
                        <tr>
                            <td>Integrated circuits</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}} /></td>
                        </tr>
                        <tr>
                            <td>Liquid Crystal Display (LCD)</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}} /></td>
                        </tr>
                        <tr>
                            <td>Semiconductors</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}} /></td>
                        </tr>
                        <tr>
                            <td>Battery</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}} /></td>
                        </tr>
                        <tr>
                            <td>Keyboard</td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e)=>{setV10(e.target.value)}} /></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e)=>{setV11(e.target.value)}} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedAverage