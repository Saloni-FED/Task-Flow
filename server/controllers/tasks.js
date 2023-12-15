export const getAllBySpecificUserTask = async(req,res)=>{
    req.send("get the user specific task")
}
export const createBySpecificUserTask = async(req,res)=>{
    console.log(req)
    console.log(req.user)
    req.send("create the user specific task")


}
export const updateBySpecificUserTask = async(req,res)=>{
    req.send("get the user specific task")
}
export const deleteBySpecificUserTask = async(req,res)=>{
    req.send("get the user specific task")
}
