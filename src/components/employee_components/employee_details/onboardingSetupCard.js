import React from 'react'
import './onboardingSetupCard.css'
const ImageCard = (props) => {
  const { setup } = props
  return (
    <div class="col-4 lap-img" style={{
    }}>
      <img src={setup.location} alt="setup" />
    </div>
  );
}

const OnboardingSetup = () => {
  const setups = [
    {
      id: '1',
      employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
      name: 'laptop',
      location: require('../../../assets/kit/laptop.png'),
      status: 'processing'
    },
    {
      id: '2',
      employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
      name: 'router',
      location: require('../../../assets/kit/router.png'),
      status: 'processing'
    },
    {
      id: '3',
      employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
      name: 'chair',
      location: require('../../../assets/kit/chair.png'),
      status: 'processing'
    },
    {
      id: '4',
      employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
      name: 'bag',
      location: require('../../../assets/kit/bag.png'),
      status: 'processing'
    },
    {
      id: '5',
      employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
      name: 't-shirt',
      location: require('../../../assets/kit/t-shirt.png'),
      status: 'processing'
    },
  ]
  return (

    <div className="container">
        <h3 style={{ textAlign: 'center', fontWeight: '600', marginBottom: '3rem' }}>Onboarding Setup and Devices</h3>
 
    <div className="box-container" >
    
      <div className="box">
      <div className='col'><ImageCard setup={setups[0]} /></div>
      </div>

      <div className="box">
      <div className='col'><ImageCard setup={setups[1]} /></div>
      </div>

      <div className="box">
      <div className='col'><ImageCard setup={setups[2]} /></div>
      </div>

      <div className="box">
      <div className='col'><ImageCard setup={setups[3]} /></div>
      </div>

      <div className="box">
      <div className='col'><ImageCard setup={setups[4]} /></div>
      </div>

      <div className="box">
      <div className='col'><ImageCard setup={setups[4]} /></div>
      </div>
      </div>
    </div>

  )
}

export default OnboardingSetup