import React from 'react'
import './currentStatusCard.css'

const CurrentStatusCard = (props) => {
  return (
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 10px', borderRadius: '10px', paddingTop: '15px', paddingBottom: '0px', marginTop: '2.5rem', marginBottom: '14px' }}>
       
       <div className="c">

          <div className="c1">
            {/* <h5 style={{ fontWeight: '600', marginTop: '0.6rem', marginLeft: '18rem' }}  */}
            <h5>
            Current Onboarding Status :
            </h5>
          </div>

          <div class="c2">
          {/* <div class="c2" style={{marginRight: '14rem', width: '26rem'}}> */}
              <div className="nameBig" >
                <div className="fullname"> Onboarding complete </div>
                <p  className="designation">Ready for day 1</p>
              </div>
          </div>
        
        </div>
    </div>
  )
}

export default CurrentStatusCard