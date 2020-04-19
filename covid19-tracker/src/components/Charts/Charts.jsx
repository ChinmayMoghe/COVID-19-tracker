import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import styles from './Charts.module.css';
import {Line,Bar} from 'react-chartjs-2';


const Charts = ({data:{confirmed,recovered,deaths},country})=>{
    /*useState is used for maintaining state inside functional components*/
    /*Array destructuring is used so as to assign state and setState function*/
    const [dailyData,setDailyData] = useState([]);

    useEffect(()=>{
        const fetchedDailyData = async ()=>{
            setDailyData(await fetchDailyData());
        };
        fetchedDailyData();
    },[]);
    const barChart = (
        confirmed?(
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}
            >
            </Bar>
        ):null
    );
    const lineChart =(
        dailyData.length?
        (<Line
        data = {{
            labels:dailyData.map(({date})=>date),
            datasets:[
            {
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'rgba(255,0,0)',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
            }]
        }}
        >

        </Line>):null
    );
    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    )
};

export default Charts;