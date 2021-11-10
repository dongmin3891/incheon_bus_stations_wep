import React from 'react'

function StationButton() {

  const scrollMove = () => {
    document.getElementsByClassName('station_turning')[0].scrollIntoView();
  }
  const scrollMove2 = () => {
    document.getElementsByClassName('bus_station_main')[0].scrollIntoView();
  }

  return (
      <div className="station_button">
        <button className="scroll_button" onClick={scrollMove2}><span>작전역8번 출구 방면(집)</span></button>
        <button className="scroll_button2" onClick={scrollMove} ><span>학운2산업단지 방면(회사)</span></button>
      </div>
    
  )
}

export default StationButton;
