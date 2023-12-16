// Get Task
export const getAllBySpecificUserTask = async(req,res)=>{
    req.send("get the user specific task")
}


// Create Task
export const createBySpecificUserTask = async(req,res)=>{
    // console.log(req)
    // console.log(req.user)
    res.json(req.user)


}


// Update Task
export const updateBySpecificUserTask = async(req,res)=>{
    req.send("get the user specific task")
}


// Delete task
export const deleteBySpecificUserTask = async(req,res)=>{
    req.send("get the user specific task")
}
