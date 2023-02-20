import React from 'react'

const CurrentStatusCard = (props) => {
  return (
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 10px', borderRadius: '10px', paddingTop: '15px', paddingBottom: '0px', marginTop: '2.5rem', marginBottom: '14px' }}>
       <div className="row">
          <div className="col">
            <h5 style={{ fontWeight: '600', marginTop: '0.6rem', marginLeft: '18rem' }}> Current Onboarding Status :</h5>
          </div>
          <div class="col-4" style={{marginRight: '14rem', width: '26rem'}}>
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