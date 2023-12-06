import React, { useState } from 'react'
import { intervalToDuration } from "date-fns";

const Form = () => {
  const [result,setResult] = useState(0)
  const handleInput = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    let data = [...formData.values()]
    let dates = intervalToDuration({
      start: new Date(data[2], data[1]-1, data[0]),
      end: Date.now(),
    });
    setResult({years: dates.years,months : dates.months ,days : dates.days})
    console.log(result.years)
  }
  return (
    <>
    <form action="" className='flex flex-col items-center gap-6 bg-white h-[400px] w-full p-6 rounded-3xl rounded-br-[30%] lg:w-1/3 lg:w-[530px] ' onSubmit={(e) => handleInput(e)}>
        <div id="inputs" className='flex gap-3 w-full lg:w-full'>
            <label className='uppercase flex flex-col text-slate-400 text-sm' htmlFor="day">day<input placeholder='DD' required className='text-black border-2 w-full h-8 p-2 font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none lg:w-28' type="number" name='day'  /></label>
            <label className='uppercase flex flex-col text-slate-400 text-sm' htmlFor="month">month<input placeholder='MM' required className='text-black border-2 w-full h-8 p-2 font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none lg:w-28' type="number" name='month'  /></label>
            <label className='uppercase flex flex-col text-slate-400 text-sm' htmlFor="year">year<input placeholder='YYYY' required className='text-black border-2 w-full h-8 p-2 font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none lg:w-28' type="number" name='year'  /></label>
        </div>
        <div className='relative w-full my-7'><label className='absolute -top-8 left-1/2 -translate-x-1/2 lg:left-[95%]' htmlFor="submit"><input type="submit" id='submit' value="" hidden/><div className='cursor-pointer bg-black hover:bg-purple-600 w-16 h-16 rounded-full flex justify-center items-center'><img src="./assets/images/icon-arrow.svg" alt="" /></div></label><hr></hr></div>
        <div className='w-full lg:w-full '>
        <p className='text-5xl font-black lg:text-6xl'><span className='text-purple-600'>{result.years > 0 ? result.years : "- -"}</span> years</p>
        <p className='text-5xl font-black lg:text-6xl'><span className='text-purple-600'>{result.months > 0 ? result.months : "- -"}</span> months</p>
        <p className='text-5xl font-black lg:text-6xl'><span className='text-purple-600'>{result.days > 0 ? result.days : "- -"}</span> days</p>
        </div>
    </form>
    
    </>
  )
}
{/* <img src="./assets/images/icon-arrow.svg" alt="" /> */}
export default Form