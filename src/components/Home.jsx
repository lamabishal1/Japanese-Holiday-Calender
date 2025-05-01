import React, {useState, useEffect} from 'react'
import axios from 'axios';
import HolidayItem from './HolidayItem'
import { months } from '../utils/months'

const Home = () => {

    const [holidays,setHolidays] = useState([]);
    const [filteredMonth,setFilteredMonth] = useState("");
    const [year, setYear] = useState("2025");

    const fetchHolidays = async () => {
        try {
          const res = await axios.get('https://calendarific.com/api/v2/holidays', {
            params: {
              country: 'JP',
              year: '2025',
              api_key: import.meta.env.VITE_HOLIDAY_API_KEY,
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
    <div className='p-4'>
        <h1>Japanese Holiday Calender</h1>

        <div className='mb-6'>
        <label className='mr-2'>
            Filter by Month:
        </label>
        <select 
        value={filteredMonth} 
        onChange={(e) => setFilteredMonth(e.target.value)}
        className='p-2 border border-gray-300 rounded'>

                <option value="">All Months</option>
                {months.map((month, index) =>(
                    <option key={index} value={index}>
                        {month}
                    </option>
                ))}

        </select>
        </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            filteredHolidays.map((holiday, index) => (
                <HolidayItem key={index} holiday={holiday} />
            ))}
        </div>
        </div>
  );
};

export default Home