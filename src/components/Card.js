import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import { Checkbox, FormControlLabel } from '@mui/material';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [completed, setCompleted] = useState(taskObj.completed || false);

    const colors = [
        {
            name: "학업",
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            name: "휴식",
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            name: "업무",
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            name: "코딩",
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            name: "기타",
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = (event) => {
        const { checked } = event.target;
        setCompleted(checked);
        const updatedTask = { ...taskObj, completed: checked };
        updateListArray(updatedTask, index);
    };

    const colorIndex = colors.findIndex(color => color.name === taskObj.Category) !== -1 ? colors.findIndex(color => color.name === taskObj.Category) : 0;

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ backgroundColor: colors[colorIndex].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors[colorIndex].secondaryColor, borderRadius: "10px" }}>{taskObj.Name}</span>
                <span className="card-header" style={{ backgroundColor: colors[colorIndex].secondaryColor, borderRadius: "10px" }}>{taskObj.Category}</span>
                <p className="mt-3">{taskObj.Description}</p>
                <FormControlLabel
                    control={<Checkbox checked={completed} onChange={handleCheckboxChange} name="complete" />}
                    label="Complete"
                />
                <div style={{ position: "absolute", top: "160px", left: "160px" }}>
                    <button style={{ color: colors[colorIndex].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}>Update</button>
                    <button style={{ color: colors[colorIndex].primaryColor, cursor: "pointer" }} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;