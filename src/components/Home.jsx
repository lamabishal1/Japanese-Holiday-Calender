import React, {useState, useEffect} from 'react'
import axios from 'axios';
import HolidayItem from './HolidayItem'
import { months } from '../utils/months'

const Home = () => {

    const [holidays,setHolidays] = useState([]);
    const [filteredMonth,setFilteredMonth] = useState("");
    const [year] = useState("2025");

    const fetchHolidays = async () => {
        try {
          const res = await axios.get('https://calendarific.com/api/v2/holidays', {
            params: {
              country: 'JP',
              year: '2025',
              api_key: import.meta.env.VITE_HOLIDAY_API_KEY,
              language: 'ja',
            },
          });
          setHolidays(res.data.response.holidays);
        } catch (error) {
          console.error("Error fetching holidays:", error);
        }
      };
    useEffect(()=>{
        fetchHolidays();
    },[year]);
    
    const filteredHolidays = holidays.filter((holiday) => {
        if (filteredMonth === "") return true;
        const monthIndex = new Date(holiday.date.iso).getMonth();
        return monthIndex === parseInt(filteredMonth);

    });


    return (
      <div className='flex flex-col justify-center items-center min-h-screen bg-[#E8F7FF]'>
  
        <div className=' w-full max-w-2xl border border-[#3ba1ef] p-6 rounded-3xl mt-6'>
    
          
          <div className='flex flex-col justify-center items-center mb-6 border border-[#bad8f5] p-6 rounded-3xl bg-[#D1EBFF]'>
            <h1 className='mb-4 font-bold text-xl'>Japanese Holiday Calendar</h1>
            <label className='mr-2'>Filter by Month:</label>
            <select 
              value={filteredMonth} 
              onChange={(e) => setFilteredMonth(e.target.value)}
              className='p-2 border border-[#aacff3] rounded text-center'
            >
              <option value="">All Months</option>
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
          </div>
    
       
          <div className='flex flex-col justify-center items-center gap-4'>
            {filteredHolidays.map((holiday, index) => (
              <HolidayItem key={index} holiday={holiday} />
            ))}
          </div>
    
        </div>
      </div>
    );
  }
export default Home