import TiltCard from "@/components/EventCard/EventCard"
import React from "react"

const EventPage = () => {
  return (
    <div className="flex flex-col sm:flex sm:flex-row justify-center items-center gap-10 h-[100%] sm:h-screen sm:w-screen cardCont">
      <TiltCard
        imgSrc="/event/Among.png"
        time="02:00 PM-05:00 PM"
        date="16 MARCH"
        link="/reactworkshop"
      />
      <TiltCard
        imgSrc="/event/Among.png"
        time="11:00 AM-02:00 PM"
        date="21 MARCH"
        link=""
      />
      <TiltCard
        imgSrc="/event/codeCrusade.png"
        time="11:00 AM-02:00 PM"
        date="22 MARCH"
        link=""
      />
    </div>
  )
}

export default EventPage
