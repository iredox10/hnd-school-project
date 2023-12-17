import React from 'react'
import { SideBar } from '../components/SideBar'
import { Main } from '../components/Main'

export const Home = () => {
  return (
    <div>

      <div className='flex'>
        <SideBar />
        <Main />
      </div>
    </div>
  );
}
