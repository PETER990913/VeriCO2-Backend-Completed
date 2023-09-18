import React, {useState, useEffect} from 'react'
import '../../App.scss'
function ProcessingAverage({onChange}) {
    const [v0, setV0]= useState(1000);
    const [v1, setV1]= useState(1.5);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1))
    },[
        v0,v1
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Process</th>
                            <th>Mass of sold intermediate product (kg)</th>
                            <th>Emission factor of processing stages (kg CO2e/kg)</th>
                        </tr>
                        <tr>
                            <td>Candy mixing, cooking, molding,  cooling, wrapping, and packaging</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProcessingAverage