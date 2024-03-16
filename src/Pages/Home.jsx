import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
        <h1 className='m-3 text-center'>Task Management App</h1>
        <div className="row m-2">
            <div className="col-6 p-2 text-justify mt-4 text-center justify-content-center">
            
                <p>Task management for project teams is one of the core functions in project management
                     and involves a typical work breakdown structure that divides your project into manageable tasks. 
                     Managing such tasks on priority, while keeping up with the cost and schedule criteria,
                     and ensuring team collaboration forms the basis of task management.</p>
            </div>
            <div className="col-6 text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASKCV8Th2IMCq95uaZCGdeIC4Q94z-sBGDeTCjnhRQUkNLPt3Hj-onukP7lT82HeuVvk&usqp=CAU" alt="" />
            </div>
        </div>
        <div className='text-center m-4 p-2'>
            <Link to={'/login'}>
            <MDBBtn className='bg-secondary rounded-pill'>Get Started</MDBBtn>
            </Link>
        
        </div>
    </div>
  )
}

export default Home