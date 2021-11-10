import React from 'react'
import BusStation from './BusStation'
import Header from './Header'
import StationTime from './StationTime'

function Home() {
  return (
    <>
      <Header/>
      <StationTime />
      <BusStation/>
    </>
  )
}

export default Home
