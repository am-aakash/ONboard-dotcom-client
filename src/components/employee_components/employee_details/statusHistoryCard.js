import React from 'react'
import './statusHistoryCard.css'

const HistoryDateStatusCard = (props) => {
    const { history } = props
    return (
        <div className="HS">

            <div className="HS1">
                <h5> {history.date} </h5>
            </div>

            <div class="HS2">
                <div className="nameBig" >
                    <div className="fullname"> {history.status} </div>
                    <p className="designation"> {history.subHeading} </p>
                </div>

            </div>
            
        </div>
    )
}

const StatusHistoryCard = () => {
    const history = [
        {
            id: "205",
            employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
            date: "14 Apr 2023",
            status: "Onboarding complete",
            subHeading: "Ready for day 1"
        },
        {
            id: "204",
            employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
            date: "11 Apr 2023",
            status: "Onboarding in process",
            subHeading: "Deploying the onboarding kits"
        },
        {
            id: "203",
            employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
            date: "1 Apr 2023",
            status: "Documents verified",
            subHeading: "All the Documents verified"
        },
        {
            id: "202",
            employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
            date: "20 Mar 2023",
            status: "Documents collected",
            subHeading: "All the Documents submitted by employee"
        },
        {
            id: "201",
            employee_id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
            date: "10 Mar 2023",
            status: "Employee Added to database",
            subHeading: "New Employee"
        }
    ]
    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 10px', borderRadius: '10px', paddingTop: '1.2rem', paddingBottom: '2rem', marginTop: '2.5rem', marginBottom: '2rem' }}>
            <h3 style={{ textAlign: 'center', fontWeight: '600', marginBottom: '1rem' }}>Status History</h3>
            {history.map((historyElement) => {
                return <HistoryDateStatusCard history={historyElement} />
            })}
        </div>
    )
}

export default StatusHistoryCard