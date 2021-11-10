import React from 'react'
import StationButton from './StationButton';

function Header() {

 
  return (
    <>
      <div className="header">
        <select>
          <option value="추가예정">추가예정</option>
        </select>
        <h1 className="title">인천 경기 버스</h1>
      </div>
      <div>
        <StationButton />
      </div>
    </>
  )
}

export default Header;
