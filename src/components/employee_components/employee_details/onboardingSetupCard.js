import React from 'react'

const ImageCard = (props) => {
  const { setup } = props
  return (
    <div class="col-4" style={{
      marginRight: '8rem',
      width: '14rem',
      height: '14rem',
      boxShadow: 'rgba(10, 10, 10, 0.1) 1px 1px 10px',
      borderRadius: '500px',
      alignContent: 'center'
    }}>
      <img src={setup.location} style={{width: '14rem', height: '14rem'}} alt="setup" />
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
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 10px', borderRadius: '10px', paddingTop: '1.2rem', paddingBottom: '1rem', marginTop: '2.5rem', marginBottom: '2rem' }}>
      <h3 style={{ textAlign: 'center', fontWeight: '600', marginBottom: '3rem' }}>Onboarding Setup and Devices</h3>
      <div className='row' style={{ marginLeft:'8rem', marginBottom: '3rem'}}>
        <div className='col'><ImageCard setup={setups[0]} /></div>
        <div className='col'><ImageCard setup={setups[1]} /></div>
        <div className='col'><ImageCard setup={setups[2]} /></div>
      </div>
      <div className='row' style={{ marginLeft:'8rem', marginBottom: '3rem', textAlign: 'center'}}>
        <div className='col'><ImageCard setup={setups[3]} /></div>
        <div className='col'><ImageCard setup={setups[4]} /></div>
        <div className='col'><ImageCard setup={setups[4]} /></div>
      </div>
    </div>
  )
}

export default OnboardingSetup