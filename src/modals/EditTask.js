import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [index, setIndex] = useState('');

    const getAsciiSum = (s) => {
        let sum = 0;
        for (let i = 0; i < s.length; i++) {
            sum += s.charCodeAt(i);
        }
        return sum;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "category") {
            setCategory(value);
            setIndex(getAsciiSum(value));
        } else {
            setDescription(value);
        }
    };

    useEffect(() => {
        setTaskName(taskObj.Name);
        setCategory(taskObj.Category);
        setDescription(taskObj.Description);
        setIndex(taskObj.Index);
    }, [taskObj]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {
            Name: taskName,
            Category: category,
            Description: description,
            Index: index
        };
        updateTask(tempObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Update Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Todo List Data Update
                </DialogContentText>
                <TextField
                    label="Task Name"
                    variant="outlined"
                    fullWidth
                    value={taskName}
                    onChange={handleChange}
                    name="taskName"
                    margin="dense"
                />
                <TextField
                    label="Category"
                    variant="outlined"
                    fullWidth
                    value={category}
                    onChange={handleChange}
                    name="category"
                    margin="dense"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={handleChange}
                    name="description"
                    margin="dense"
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleUpdate}>Update</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTaskPopup;
