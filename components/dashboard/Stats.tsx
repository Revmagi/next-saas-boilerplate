import React from 'react'
import StatCard, { StatTypes } from './StatCard'



const Stats = () => {

  return (

  <>
  <StatCard
   title="Total Revenue"
   value="$45,000"
   type={StatTypes.REVENUE}
   />
  <StatCard
   title="Total Users"
   value="527"
   type={StatTypes.USERS}
   />
  <StatCard
   title="Total Subscribers"
   value="122"
   type={StatTypes.SUBSCRIBERS}
   />

  </>
  )
}

export default Stats