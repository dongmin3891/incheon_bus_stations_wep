import React from 'react'
import { useSelector } from 'react-redux';
function StationTime() {


  const time = useSelector(state => state.homeInfoReducer)
  console.log("time",time.time);
  return (
    <div className="station_time">
      <div className="going_home">떙떙역 첫번 째 버스 0분 후 도착 0정거장 전</div>
      <div className="going_home">떙떙역 두번 째 버스 0분 후 도착 0정거장 전</div>
      <div className="going_company">마전역 첫번 째 버스 {time.time.oneTime}분 후 도착 {time.time.oneStation}정거장 전</div>
      <div className="going_company">마전역 두번 째 버스 {time.time.twoTime}분 후 도착 {time.time.twoStation}정거장 전</div>
    </div>
  )
}

export default StationTime
