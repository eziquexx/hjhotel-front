import 'bootstrap/dist/css/bootstrap.min.css';
import { setDate, setMonth, toDate } from "date-fns";
import { useState , useEffect } from "react";
import ButtonEx from '../../../common/ButtonEx';

function ReservationCalendar()
{
    const nowDate = toDate(Date.now(), { timeZone: 'Asia/Seoul' });
    const dayArr = ['일','월','화','수','목','금','토'];

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
        const prevMonth = selectedYearAndMonth;

        setSelectedYearAndMonth({
            year : prevMonth.month-1 > 0 ? prevMonth.year : prevMonth.year-1,
            month : prevMonth.month-1 > 0 ? prevMonth.month-1 : 12
        });
    }

    function onClickNextButtton(){
        const nextMonth = selectedYearAndMonth;

        setSelectedYearAndMonth({
            year : nextMonth.month+1 <= 12 ? nextMonth.year : nextMonth.year+1,
            month : nextMonth.month+1 <= 12 ? nextMonth.month+1 : 1
        });
    }

    //util
    function getTimestampArrForCalendar(year,month){
        const startDayOfDate = toDate(new Date(year,month,1),{timeZone : 'Asia/Seoul'});
        const lastDayOfDate = setDate(setMonth(startDayOfDate, startDayOfDate.getMonth()+1),0);

        const timeStampArrForCurrentMonth = Array.from(
            { length: lastDayOfDate.getDate() },
            (_, index) => startDayOfDate.valueOf() + 24 * 60 * 60 * 1000 * index
        );

        const beforeBlankArrForCurrentMonth = Array.from(
            {length: startDayOfDate.getDay()},
            () => null
        );

        const nextBlankArrForCurrentMonth = Array.from(
            {length: 6-lastDayOfDate.getDay()},
            ()=> null
        );

        const ArrForCalendar = beforeBlankArrForCurrentMonth
        .concat(timeStampArrForCurrentMonth, nextBlankArrForCurrentMonth);

        return ArrForCalendar;
    }

    
    useEffect(()=>{
        const selectedDate = toDate(selectedTimestamp , {timeZone : 'Asia/Seoul'});
        if(selectedDate.getMonth() !== selectedYearAndMonth.month){
            setSelectedYearAndMonth({
                year : selectedDate.getFullYear(),
                month : selectedDate.getMonth()
            });
        }
    },[selectedTimestamp]);
    

    return (
        <div className={'container text-container'}>
            <div>
                <ButtonEx id='prev' className='' action={onClickPrevButtton}>{'<'}</ButtonEx>
                <h2>{`${selectedYearAndMonth.month}월`}</h2>
                <ButtonEx id='next' className='' action={onClickNextButtton}>{'>'}</ButtonEx>
            </div>
            <div className={'row row-cols-7'}>
                {dayArr.map((day,index)=>(
                        <div className='col' key={index}>
                            <p>{day}</p>
                        </div>
                    ))
                }
                {/*onClick={(timestamp)=>onClickSelectDay(timestamp)}*/}
                {getTimestampArrForCalendar(selectedYearAndMonth.year,selectedYearAndMonth.month)
                    .map((timestamp,index)=>(
                        <div className="col bg-primary-subtle border border-secondary" key={index}>
                            {timestamp ? (
                                <>
                                    {/* 24.11.14 한택 [테스트코드]: 데이터가 맞게 들어갔는지 테스트하기 위한 코드입니다.  */}
                                    <p>{toDate(timestamp, { timeZone: 'Asia/Seoul' }).getDay()}</p>
                                    <p>{toDate(timestamp, { timeZone: 'Asia/Seoul' }).getDate()}</p>
                                </>
                            ) : null}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ReservationCalendar;