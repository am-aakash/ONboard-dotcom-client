import React from 'react'
import './employeeDetails.css'
import CurrentStatusCard from './currentStatusCard'
import StatusHistoryCard from './statusHistoryCard'
import OnboardingSetup from './onboardingSetupCard'

const EmployeeDetails = (props) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: '5rem',
      }}
    >
      <div className="rowR">
        <div className="profilePicBig">
          <img src={require('../../../assets/avatar.jpg')} alt="avatar" />
        </div>

      <div className='d'>
        <div className="d1" style={{marginTop: '3.2rem' }}>
          <h2 style={{ fontWeight: '600' }}>Test Employee Name</h2>
          <h5 style={{ fontWeight: '500', marginTop: '0.6rem', marginLeft: '0.2rem' }}>Software Developent Engineer-2</h5>
          <h6 style={{ color: 'rgb(84, 123, 230)', fontWeight: '600', marginTop: '0.6rem', marginLeft: '0.2rem' }}>Company Name | Engineering</h6>
          <h6 style={{ color: 'rgb(124, 124, 124)', fontWeight: '600', marginTop: '0.6rem', marginLeft: '0.2rem' }}> Date of Joining : 14 Apr 2023 </h6>
        </div>

        <div className="d2">
          <div className="abc">
            <h6 style={{ color: 'rgb(84, 84, 84)', fontWeight: '500', fontSize: 'small' }}> +91-7803436675</h6>
            <h6 style={{ color: 'rgb(84, 84, 84)', fontWeight: '500', fontSize: 'small' }}> testemployee@email.com </h6>
            <h6 style={{ color: 'rgb(84, 84, 84)', fontWeight: '500', fontSize: 'small' }}> Employee Id: 254367767 </h6>
          </div>
        </div>

      </div>
      </div>

      <CurrentStatusCard />
      <StatusHistoryCard />
      <OnboardingSetup />
    </div>
  )
}

export default EmployeeDetails