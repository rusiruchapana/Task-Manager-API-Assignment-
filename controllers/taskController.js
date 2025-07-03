const Task = require('../models/Task');

const createTask = async (req,res)=>{
    try {
        const {title,description,status} = req.body;
        if(!title || !description){
            return res.status(400).json({success:false,message:"Title and description are required"});
        }

        const task = await Task.create({
            title,
            description,
            status: status || 'pending'
        });
        return res.status(201).json({success:true, data: task});

    } catch (error) {
        return res.status(500).json({success:false, message:"Internal Server Error"});
    }
}

const getTasks = async (req,res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true,data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};


const getTaskById = async (req,res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};


const updateTask = async (req,res) => {
  try {
    const { title, description, status } = req.body;
    

    if (!title || !description) {
      return res.status(400).json({ success: false, error: 'Please provide title and description' });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};


const deleteTask = async (req,res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ success: false, error: 'Task not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};





module.exports = {createTask, getTasks, getTaskById, updateTask, deleteTask};

