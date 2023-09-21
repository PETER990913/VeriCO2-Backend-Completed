import React, {useState, useEffect} from 'react'
import '../../App.scss'
function InvestmentSpecific({onChange, dataset2}) {
    const [v0, setV0]= useState(120000);
    const [v1, setV1]= useState(40);
    const [v2, setV2]= useState(200000);
    const [v3, setV3]= useState(15);
    const [v4, setV4]= useState(1600000);
    const [v5, setV5]= useState(25);
    const [v6, setV6]= useState(60000);
    const [v7, setV7]= useState(25);
    const [v10, setV10]= useState('1');
    const [v11, setV11]= useState('2');
    const [v12, setV12]= useState('3');
    const [v13, setV13]= useState('4');
    const handleOnChange = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV10(e.target.value)
        const v0 = dataset2[keyVal] ? dataset2[keyVal][2] : 0
        if(v0) setV0(v0)
    }
    const handleOnChange1 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV11(e.target.value)
        const v2 = dataset2[keyVal] ? dataset2[keyVal][2] : 0
        if(v2) setV2(v2)
    }
    const handleOnChange2 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV12(e.target.value)
        const v4 = dataset2[keyVal] ? dataset2[keyVal][2] : 0
        if(v4) setV4(v4)
    }
    const handleOnChange3 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV13(e.target.value)
        const v6 = dataset2[keyVal] ? dataset2[keyVal][2] : 0
        if(v6) setV6(v6)
    }
    useEffect(()=>{
        onChange((Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7))/100)
    },[
        v0,v1,v2,v3,v4,v5,v6,v7
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Investment</th>
                            <th>Investment type</th>
                            <th>Scope 1 and scope 2 emissions of investee company in reporting year (tonnes CO2e)</th>
                            <th>Reporting company’s share of equity (percent)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={v10} className='Input_form' onChange={handleOnChange}/></td>
                            <td>Equity Investment in subsidiary</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v11} className='Input_form' onChange={handleOnChange1}/></td>
                            <td>Equity Investment in subsidiary</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v12} className='Input_form' onChange={handleOnChange2}/></td>
                            <td>Equity investment in joint venture</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v13} className='Input_form' onChange={handleOnChange3}/></td>
                            <td>Equity investment in joint venture</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvestmentSpecific