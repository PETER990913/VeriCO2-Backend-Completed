import React, {useState, useEffect} from 'react'
import '../../App.scss'
function Downstream({onChange}) {
    const [v0, setV0]= useState(9000);
    const [v1, setV1]= useState(5000);
    const [v2, setV2]= useState(10000);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1)/(Number(v1)+Number(v2)))
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
                            <th>Factory</th>
                            <th>Combined scope 1 and scope 2 emissions  (kg CO2e)</th>
                            <th>Floor space (m2)</th>
                        </tr>
                        <tr>
                            <td>Factory 1</td>
                            <td rowSpan={2}><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Factory 2</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Downstream