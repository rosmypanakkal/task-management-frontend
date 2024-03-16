import React, { useEffect, useState } from 'react'
import { addTaskAPI } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom';

function Add() {

    // to get token from sessionstorage
    const[token,setToken]=useState("")
    const location=useNavigate()
    // to get token
    useEffect(()=>{
        if (sessionStorage.getItem(token)) {
            setToken(sessionStorage.getItem(token))
        }
    },[])
    const [show, setShow] = useState(false)
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true)

    // to hold the value
    const [taskDetails, setTaskDetails] = useState({
        taskno: "",
        name: "",
        description:"", 
        startDate:"",
        endDate:"",
        progress:"", 
         status: ""
    })
    console.log(taskDetails);

    const TaskAdd = async () => {
        const { taskno, name, status,description, startDate,endDate,progress  } = taskDetails
        if (!taskno || !name || !status ||!description ||!startDate ||!endDate ||!progress ) {
            alert("please fill the form")
        }
        else {
            // api call
            const reqBody = new FormData()
            reqBody.append("taskno", taskno)
            reqBody.append("name", name)
            reqBody.append("description",description)
            reqBody.append("startDate",startDate)
            reqBody.append("endDate",endDate)
            reqBody.append("progress",progress)
             reqBody.append("status", status)

             let reqHeader = {};
            if(token){
                const reqHeader = {
                    "Content-Type": 'application/json', //it indicates request contains a image file
                    "Authorization": `Bearer ${token}` //to send token to client to server side
                };
            }
            // actual api call
            const result = await addTaskAPI(reqBody, reqHeader)
            console.log(result);
            if (result.status == 200) {
                alert("task added successfully")
                location('/dashboard')
                console.log(result.data);

            }
            else {
                console.log(result.response.data);
            }
        }
    };

    return (
        <div>
            <div className="container m-5 p-3">
                <div className="row">
                    <div className="col-6 border-2 shadow">
                        <form >
                            <h2 className='text-center text-secondary m-2'>Add Task</h2>
                            <input type="text" value={taskDetails.taskno} onChange={e => setTaskDetails({ ...taskDetails, taskno: e.target.value })} placeholder='taskno' className='form-control mb-4' />
                            <input type="text" value={taskDetails.name} onChange={e => setTaskDetails({ ...taskDetails, name: e.target.value })} placeholder='Name of Task' className='form-control mb-4' />
                            <input type="text" value={taskDetails.description} onChange={e => setTaskDetails({ ...taskDetails, description: e.target.value })} placeholder='description' className='form-control mb-4' />
                            <input type="text" value={taskDetails.startDate} onChange={e => setTaskDetails({ ...taskDetails, startDate: e.target.value })} placeholder='Starting date' className='form-control mb-4' />
                            <input type="text" value={taskDetails.endDate} onChange={e => setTaskDetails({ ...taskDetails, endDate: e.target.value })} placeholder='ending date' className='form-control mb-4' />
                            <input type="text" value={taskDetails.progress} onChange={e => setTaskDetails({ ...taskDetails, progress: e.target.value })} placeholder='Progress of task' className='form-control mb-4' />
                            <div className="mb-4">
                                <input type="text" value={taskDetails.status} onChange={e => setTaskDetails({ ...taskDetails, status: e.target.value })} placeholder="Status" list="statusOptions" className="form-control" />
                                <datalist id="statusOptions">
                                    <option value="Pending" />
                                    <option value="In Progress" />
                                    <option value="Completed" />
                                </datalist>
                            </div>
                            <div className='text-center m-4'>
                                <button className='btn btn-secondary rounded-pill' onClick={TaskAdd}>Add</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6 text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUwljd7yKtodyQgYYcleVS3PROR3UWpKY5eqhnp8yvg&s" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add

