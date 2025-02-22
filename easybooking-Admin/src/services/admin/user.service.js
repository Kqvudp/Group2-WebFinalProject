const mongoose=require('mongoose');
const usermodel=require('../../model/booking/user.model');

const adduser=async(body)=>{
    return await usermodel.create(body);
}
const getuser=async()=>{ 
   return await usermodel.find();
}
const getuserbyid=async(id)=>{
    return await usermodel.findById(id).exec();
}
const deteleuser=async(id)=>{
    return await usermodel.deleteOne({_id: new mongoose.Types.ObjectId(id)});
}
const updateuser=async(id,body)=>{
    return await usermodel.findByIdAndUpdate(
        {_id: new mongoose.Types.ObjectId(id)},
        {$set: body},
    );
}
const getStatusCounts = async () => {
    const items = await usermodel.find({});
    const statusCounts = {
      All: items.length,
      Active: items.filter((item) => item.status === 'active').length,
      Inactive: items.filter((item) => item.status === 'inactive').length,
    };
    return statusCounts;
  };
  module.exports={
        adduser,
        getuser,
        getuserbyid,
        deteleuser,
        updateuser,
        getStatusCounts,
  }