const Show = require('./show.model');
const mongoose = require('mongoose');


exports.addShow = async (showObj) => {
    try{
        const result = new Show(showObj);
        await result.save();
        mongoose.disconnect();
        console.log(`${result} successfully added to DB`);
    }catch(error){
        console.log(error);
    }
};

exports.readAll = async () => {
    try{
        const result = await Show.find({});
        mongoose.disconnect();
        console.log('You have searched for all shows: ',result);
    }catch(error){
        console.log(error);
    }
};

exports.updateShow = async (showObj, newChannel) => {
    try{
        const result = await  Show.findOneAndUpdate({name: showObj.name},{channel: newChannel.channel});
        mongoose.disconnect();
        console.log(`You have successfully updated show from ${result} to channel :  ${newChannel.channel}`);
        
    }catch(error){
        console.log(error);
    }
};
exports.updateTime = async (showObj, newTime) => {
    try{
        const result = await  Show.findOneAndUpdate({name: showObj.name},{time: newTime.time});
        mongoose.disconnect();
        console.log(`You have successfully updated  ${result} time to :  ${newTime.time}`);
        
    }catch(error){
        console.log(error);
    }
};

exports.deleteShow = async (showObj) => {
    try{
        const result = await  Show.deleteOne(showObj);
        mongoose.disconnect();
        console.log(result,'Show has been deleted.');
    }catch(error){
        console.log(error);
    }
};

exports.findByName = async (showObj) => {
    try{
        const result = await Show.find({name: showObj.name});
        mongoose.disconnect();
        console.log('You have search for : ',result);
    }catch(error){
        console.log(error);
    }
};

exports.findByChannel = async (showObj) => {
    try{
        const result = await Show.find({channel: showObj.channel});
        mongoose.disconnect();
        console.log('You have search for : ',result);
    }catch(error){
        console.log(error);
    }
};
exports.findByTime = async (showObj) => {
    try{
        const result = await Show.find({time: showObj.time});
        mongoose.disconnect();
        console.log('You have search for : ',result);
    }catch(error){
        console.log(error);
    }
};
