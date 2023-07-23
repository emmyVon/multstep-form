import React from 'react'
import Step from './Step'

const Steps = () => {
  return (
    <div>
        <ol>
            <li>
                <Step count={1} step= {"step1"} content={"Your Info"} />
            </li>               
            <li>
                <Step count={2} step= {"step2"} content={"SELECT PLAN"} />
            </li>               
            <li>
                <Step count={3} step= {"step3"} content={"ADD-ON"} />
            </li>               
            <li>
                <Step count={4} step= {"step4"} content={"SUMMARY"} />
            </li>               
        </ol>
    </div>
  )
}

export default Steps