import React from "react"
import avatar from '../../assets/avatar.jpg'


const EmployeeItem = (props) => {
  const { employee } = props;
  return (
    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 10px', borderRadius: '10px', paddingTop: '15px', paddingBottom: '0px', marginTop: '10px', marginBottom: '14px' }}>
      <div className="row">
        <div className="col">
          <div className="pp">
            <div className="profilePic">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="name">
              <div className="fullname">{employee.name}</div>
              <p className="designation">{employee.role}</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div className="pp">
            <div className="name">
              <div className="fullname">Onboarding complete</div>
              <p className="designation">Ready for day 1</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="date">4th dec 2021</div>
        </div>
        <div class="col">
          <div className="team">Engineering</div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeItem
