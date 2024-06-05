import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            name : "학업",
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            name : "휴식",
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            name : "업무",
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const colorIndex = colors.findIndex(color => color.name === taskObj.Category);

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[colorIndex].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[colorIndex].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <span class = "card-header" style={{"background-color": colors[colorIndex].secondaryColor, "border-radius": "10px"}}>{taskObj.Category}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "top":"160px", "left":"160px"}}>
                    <button style={{"color" : colors[colorIndex].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}>update</button>
                    <button style = {{"color" : colors[colorIndex].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}>Delete</button>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;