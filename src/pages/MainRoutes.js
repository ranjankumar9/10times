import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateEventPage from './CreateEventPage'
import ListingPage from './ListingPage'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<CreateEventPage />} />
            <Route path='/event' element={<ListingPage />} />
        </Routes>
    </div>
  )
}

export default MainRoutes