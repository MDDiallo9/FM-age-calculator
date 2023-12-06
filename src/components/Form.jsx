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
    <form action="" className='flex flex-col items-center gap-6 ' onSubmit={(e) => handleInput(e)}>
        <div id="inputs" className='flex gap-3'>
            <label className='uppercase flex flex-col' htmlFor="day">day<input placeholder='DD' required className='border-2 w-16 h-8 p-2 font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" name='day'  /></label>
            <label className='uppercase flex flex-col' htmlFor="month">month<input placeholder='MM' required className='border-2 w-16 h-8 p-2 font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" name='month'  /></label>
            <label className='uppercase flex flex-col' htmlFor="year">year<input placeholder='YYYY' required className='border-2 w-16 h-8 p-2 font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" name='year'  /></label>
        </div>
        <label className='' htmlFor="submit"><input type="submit" id='submit' value="" hidden/><div className='cursor-pointer bg-purple-500 w-16 h-16 rounded-full flex justify-center items-center'><img src="./assets/images/icon-arrow.svg" alt="" /></div></label>
        <div>
        <p><span>{result.years > 0 ? result.years : "- -"}</span> years</p>
        <p><span>{result.months > 0 ? result.months : "- -"}</span> months</p>
        <p><span>{result.days > 0 ? result.days : "- -"}</span> days</p>
        </div>
    </form>
    
    </>
  )
}
{/* <img src="./assets/images/icon-arrow.svg" alt="" /> */}
export default Form