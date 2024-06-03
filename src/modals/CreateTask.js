import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [index, setIndex] = useState(0);

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

    const handleSave = (e) => {
        e.preventDefault();
        let taskObj = {
            Name: taskName,
            Category: category,
            Description: description,
            Index: index
        };
        save(taskObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Create Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    New Task Create
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
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTaskPopup;
