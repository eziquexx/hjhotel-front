import { useState , useEffect } from "react";

function ReservationCalendar()
{
    const nowDate = toDate(Date.now(), { timeZone: 'Asia/Seoul' });

    const [selectedYearAndMonth, setSelectedYearAndMonth] =
    useState({
        year: nowDate.getFullYear(),
        month: nowDate.getMonth(),
    });

    const [selectedTimestamp, setSelectedTimestamp] = useState(nowDate.setHours(0, 0, 0, 0));


    function onClickSelectDay(timestamp){
        setSelectedTimestamp(timestamp);
    }

    function onClickPrevButtton(){

    }

    function onClickNextButtton(){

    }

    //util
    function getTimestampArrForCalendar(year,month){
        const startDayOfDate = toDate(new Date(year,month,1),{timeZone : 'Asia/Seoul'});
        const lastDayOfDate = setDate(setMonth(startDayOfDate, startDayOfDate.getMonth()+1),0);

        startDayOfDate.getDay();
        lastDayOfDate.getDay();
        
    }

    useEffect(()=>{
        const selectedDate = toDate(selectedTimestamp , {timeZone : 'Asia/Seoul'});
        if(selectedDate.getMonth() != selectedYearAndMonth.month){
            setSelectedYearAndMonth({
                year : selectedDate.getFullYear(),
                month : selectedDate.getMonth()
            })
        }
    }) , [selectedTimestamp];

    return (
        <div>

        </div>
    );
}

export default ReservationCalendar;