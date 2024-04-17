import React from 'react'
import Accordian from '../accordian'

const Offers = () => {
  return (
    <div className="border border-t-0 border-primary-text/50 bg-[#F6F2FC] p-5 rounded-b-md space-y-4">
        <Accordian title="Incoming Transfers" listed={true} />
        <Accordian title="Received offers" recieved={true} />
        <Accordian title="Listed items" listed={true} />
    </div>
  )
}

export default Offers