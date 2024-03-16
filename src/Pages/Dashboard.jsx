import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function Dashboard() {
  const existingUser=JSON.parse(sessionStorage.getItem("existingUser"))
    return (
        <div>
            <div className="container m-4">
                <h1 className='text-center text-secondary mb-4'>
                    Task Management System
                </h1>
                <p className='justify-content-center'>Task management is the process of overseeing a task through its lifecycle. It involves planning, testing, tracking, and reporting. Task management can help individuals achieve goals or enable groups of individuals to collaborate and share knowledge for the accomplishment of collective goals.
                    Tasks are also differentiated by complexity, from low to high.[1]

                    Effective task management requires overseeing all aspects of a task, including its status, priority, time, human and financial resource assignments, recurrence, dependencies, notifications, etc.
                    These can be lumped together broadly as the fundamental activities of task management.

                    Task management may be a component of project management and process management, serving as the foundation for efficient workflow within an organization. Project managers adhering to task-oriented management have a detailed and up-to-date project schedule and are usually good at directing team members and moving the project forward.</p>
            </div>
            <br />
            <br />
            <div>
              <h2 className='m-5'>hi <span className='text-primary'>{existingUser.username}</span> Please Added your task....</h2>
            </div>

            <Link to={'/add'}><a style={{ float: 'right' }} className='btn btn-primary' href="">Add</a></Link>
            
            <div className="container">
            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Task</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>1</p> 
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>
            <div className='d-flex justify-content-evenly'>
          <i class="fa-solid fa-pen text-success"></i>
          <i class="fa-solid fa-eye text-info"></i>
          <i class="fa-solid fa-trash text-danger"></i>
          </div>
          </td>
        </tr>
      
      
      </MDBTableBody>
    </MDBTable>
            </div>
        </div>
    )
}

export default Dashboard