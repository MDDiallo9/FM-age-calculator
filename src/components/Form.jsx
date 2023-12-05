import React from 'react'

const Form = () => {
  return (
    <form action="" className='flex flex-col items-center gap-6'>
        <div id="inputs" className='flex gap-3'>
            <label className='uppercase flex flex-col' htmlFor="day">day<input className='border-2 w-16 h-8 p-2 font-bold' type="number" name='day'  /></label>
            <label className='uppercase flex flex-col' htmlFor="month">month<input className='border-2 w-16 h-8 p-2 font-bold' type="number" name='month'  /></label>
            <label className='uppercase flex flex-col' htmlFor="year">year<input className='border-2 w-16 h-8 p-2 font-bold' type="number" name='year'  /></label>
        </div>
        <label className='' htmlFor="submit"><input type="submit" id='submit' value="" hidden/><div className='cursor-pointer bg-purple-500 w-16 h-16 rounded-full flex justify-center items-center'><img src="./assets/images/icon-arrow.svg" alt="" /></div></label>
    </form>
  )
}
{/* <img src="./assets/images/icon-arrow.svg" alt="" /> */}
export default Form