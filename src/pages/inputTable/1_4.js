import React, {useState, useEffect} from 'react'
import '../../App.scss'
function  PurchasedSpend({onChange}) {
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
    const [v12, setV12]= useState(5000);
    const [v13, setV13]= useState(0.3);
    const [v14, setV14]= useState(3000);
    const [v15, setV15]= useState(0.3);
    const [v16, setV16]= useState(4000);
    const [v17, setV17]= useState(0.3);
    const [v18, setV18]= useState(6000);
    const [v19, setV19]= useState(0.5);
    const [v20, setV20]= useState(1500);
    const [v21, setV21]= useState(0.2);
    const [v22, setV22]= useState(5000);
    const [v23, setV23]= useState(0.2);
    const [v24, setV24]= useState(5000);
    const [v25, setV25]= useState(0.3);
    const [v26, setV26]= useState(1000);
    const [v27, setV27]= useState(0.3);
    const [v28, setV28]= useState(5000);
    const [v29, setV29]= useState(0.4);

    useEffect(()=>{
        onChange(Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7)+Number(v8)*Number(v9)+Number(v10)*Number(v11)+Number(v12)*Number(v13)+Number(v14)*Number(v15)+Number(v16)*Number(v17)+Number(v18)*Number(v19)+Number(v20)*Number(v21)+Number(v22)*Number(v23)+Number(v24)*Number(v25)+Number(v26)*Number(v27)+Number(v28)*Number(v29))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22, v23,v24,v25,v26,v27,v28,v29
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
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Integrated circuits</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Liquid Crystal Display (LCD)</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Semiconductors</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Battery</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Keyboard</td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e)=>{setV10(e.target.value)}}/></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e)=>{setV11(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <th>Purchased raw materials</th>
                            <th> Value ($)</th>
                            <th>Emission factor (kg CO2e/$)</th>
                        </tr>
                        <tr>
                            <td>Plastic (PS)</td>
                            <td><input type='text' value={v12} className='Input_form' onChange={(e)=>{setV12(e.target.value)}}/></td>
                            <td><input type='text' value={v13} className='Input_form' onChange={(e)=>{setV13(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Plastic (ABS)</td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e)=>{setV14(e.target.value)}}/></td>
                            <td><input type='text' value={v15} className='Input_form' onChange={(e)=>{setV15(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>PET (film)</td>
                            <td><input type='text' value={v16} className='Input_form' onChange={(e)=>{setV16(e.target.value)}}/></td>
                            <td><input type='text' value={v17} className='Input_form' onChange={(e)=>{setV17(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Aluminum</td>
                            <td><input type='text' value={v18} className='Input_form' onChange={(e)=>{setV18(e.target.value)}}/></td>
                            <td><input type='text' value={v19} className='Input_form' onChange={(e)=>{setV19(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Steel</td>
                            <td><input type='text' value={v20} className='Input_form' onChange={(e)=>{setV20(e.target.value)}}/></td>
                            <td><input type='text' value={v21} className='Input_form' onChange={(e)=>{setV21(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Cyclohexane</td>
                            <td><input type='text' value={v22} className='Input_form' onChange={(e)=>{setV22(e.target.value)}}/></td>
                            <td><input type='text' value={v23} className='Input_form' onChange={(e)=>{setV23(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Epoxy resin</td>
                            <td><input type='text' value={v24} className='Input_form' onChange={(e)=>{setV24(e.target.value)}}/></td>
                            <td><input type='text' value={v25} className='Input_form' onChange={(e)=>{setV25(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Copper</td>
                            <td><input type='text' value={v26} className='Input_form' onChange={(e)=>{setV26(e.target.value)}}/></td>
                            <td><input type='text' value={v27} className='Input_form' onChange={(e)=>{setV27(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Glass</td>
                            <td><input type='text' value={v28} className='Input_form' onChange={(e)=>{setV28(e.target.value)}}/></td>
                            <td><input type='text' value={v29} className='Input_form' onChange={(e)=>{setV29(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedSpend