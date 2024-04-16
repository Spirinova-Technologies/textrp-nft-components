import React from 'react'
import Accordian from '../accordian'

const Offers = () => {
  return (
    <div className="border border-t-0 border-primary-text/50 bg-[#F6F2FC] p-5 rounded-b-md space-y-4">
        <Accordian title="Incoming Transfers" />
        <Accordian title="Received offers" />
        <Accordian title="Listed items" />
    </div>
  )
}

export default Offers