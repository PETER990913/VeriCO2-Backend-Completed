import React, {useState, useEffect} from 'react'
import '../../App.scss'
function FranchisesAverage({onChange}) {
    const [v0, setV0]= useState(100);
    const [v1, setV1]= useState(30000);
    const [v2, setV2]= useState(150);
    const [v3, setV3]= useState(30000);
    const [v4, setV4]= useState(400);
    const [v5, setV5]= useState(10000);
    const [v6, setV6]= useState(700);
    const [v7, setV7]= useState(10000);
    const [v8, setV8]= useState(500);
    const [v9, setV9]= useState(10000);

    useEffect(()=>{
        onChange(Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7)+Number(v8)*Number(v9))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Franchisee</th>
                            <th>Type</th>
                            <th>Shop area (m2) </th>
                            <th>Emission factor (kg CO2e/m2/year)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Food outlet</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Food outlet</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Clothing outlet</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Clothing outlet</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Clothing outlet</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FranchisesAverage