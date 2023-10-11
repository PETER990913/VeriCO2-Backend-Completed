import React, {useState, useEffect} from 'react'
import '../../App.scss'
function DownstreamTransportation({onChange}) {
    const [v0, setV0]= useState(4);
    const [v1, setV1]= useState(1000);
    const [v2, setV2]= useState(0.2);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1)*Number(v2)*1000)
    },[
        v0,v1,v2
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchaser</th>
                            <th>Mass of goods sold (tonnes)</th>
                            <th>Total downstream distance transported (km)</th>
                            <th>Transport mode or vehicle type</th>
                            <th>Emission factor (kg CO2e/tonne-km)</th>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                            <td>Truck  (rigid, 3.5-7.5t)</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DownstreamTransportation