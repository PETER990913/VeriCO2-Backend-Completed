import React, {useState, useEffect} from 'react'
import '../../App.scss'
function EmployeeDistance({onChange}) {
    const [v0, setV0]= useState(5);
    const [v1, setV1]= useState(10);
    const [v2, setV2]= useState(0.1);
    const [v3, setV3]= useState(0);
    const [v4, setV4]= useState(0.2);
    const [v5, setV5]= useState('N/A');
    const [v6, setV6]= useState(4);
    const [v7, setV7]= useState(10);
    const [v8, setV8]= useState(0.1);
    const [v9, setV9]= useState(1);
    const [v10, setV10]= useState(0.2);
    const [v11, setV11]= useState(15);
    const [v12, setV12]= useState(0);
    const [v13, setV13]= useState('N/A');
    const [v14, setV14]= useState(0.1);
    const [v15, setV15]= useState(5);
    const [v16, setV16]= useState(0.2);
    const [v17, setV17]= useState(20);
    useEffect(()=>{
        onChange((Number(v0)*2*Number(v1)*48+Number(v6)*2*Number(v7)*48)*Number(v2)+(Number(v9)*2*Number(v11)*48+Number(v15)*2*Number(v17)*48)*Number(v16))
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
                            <th>Employee</th>
                            <th> Rail commute (times per week)</th>
                            <th>One way distance by rail(km)</th>
                            <th>Rail emission factor</th>
                            <th>Car commute </th>
                            <th>Car emission factor</th>
                            <th>One way distance by car</th>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e)=>{setV10(e.target.value)}}/></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e)=>{setV11(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td><input type='text' value={v12} className='Input_form' onChange={(e)=>{setV12(e.target.value)}}/></td>
                            <td><input type='text' value={v13} className='Input_form' onChange={(e)=>{setV13(e.target.value)}}/></td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e)=>{setV14(e.target.value)}}/></td>
                            <td><input type='text' value={v15} className='Input_form' onChange={(e)=>{setV15(e.target.value)}}/></td>
                            <td><input type='text' value={v16} className='Input_form' onChange={(e)=>{setV16(e.target.value)}}/></td>
                            <td><input type='text' value={v17} className='Input_form' onChange={(e)=>{setV17(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeDistance