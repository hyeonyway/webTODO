import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "category") {
            setCategory(value);
        } else {
            setDescription(value);
        }
    };

    useEffect(() => {
        setTaskName(taskObj.Name);
        setCategory(taskObj.Category);
        setDescription(taskObj.Description);
    }, [taskObj]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {
            Name: taskName,
            Category: category,
            Description: description,
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
                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        label="Category"
                        value={category}
                        onChange={handleChange}
                        name="category"
                    >
                        <MenuItem value="학업">학업</MenuItem>
                        <MenuItem value="휴식">휴식</MenuItem>
                        <MenuItem value="업무">업무</MenuItem>
                    </Select>
                </FormControl>
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