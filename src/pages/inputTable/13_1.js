import React, {useState, useEffect} from 'react'
import '../../App.scss'
function FranchisesSpecific({onChange, dataset}) {
    const [v0, setV0]= useState(100000);
    const [v1, setV1]= useState(20000);
    const [v2, setV2]= useState(25000);
    const [v3, setV3]= useState(10000);
    const [v4, setV4]= useState(30000);
    const [v5, setV5]= useState(10000);
    const [v6, setV6]= useState(90000);
    const [v7, setV7]= useState(30000);
    const [v8, setV8]= useState(30000);
    const [v9, setV9]= useState(10000);

    useEffect(() => {
        console.log('dataset', dataset)
        if(dataset.length){
            setV0(dataset[1][0][1])
            setV1(dataset[1][0][2])
            setV2(dataset[1][1][1])
            setV3(dataset[1][1][2])
            setV4(dataset[1][2][1])
            setV5(dataset[1][2][2])
            setV6(dataset[1][3][1])
            setV7(dataset[1][3][2])
            setV8(dataset[1][4][1])
            setV9(dataset[1][4][2])
        }
    }, [dataset])

    useEffect(()=>{
        onChange(Number(v0)+Number(v1)+Number(v2)+Number(v3)+Number(v4)+Number(v5)+Number(v6)+Number(v7)+Number(v8)+Number(v9))
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
                            <th> Scope 1 emissions (kg CO2e)</th>
                            <th>Scope 2 emissions (kg CO2e)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FranchisesSpecific