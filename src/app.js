require('./db/connection');
const yargs = require('yargs');
const { addShow,
    readAll,
    updateShow,
    updateTime,
    deleteShow,
    findByName,
    findByChannel,
    findByTime,
        }= require('./show/show.methods');

const app= () =>{
    if (process.argv[2]=== 'add'){
        addShow({name: yargs.argv.name, channel: yargs.argv.channel, time: yargs.argv.time})
    }else if(process.argv[2]=== 'read all'){
        readAll()
    }else if(process.argv[2]=== 'update'){
        updateShow({name: yargs.argv.name},{ channel: yargs.argv.channel})
    }else if(process.argv[2]=== 'update time'){
        updateTime({name: yargs.argv.name},{ time: yargs.argv.time})
    }else if(process.argv[2]=== 'delete'){
        deleteShow({name: yargs.argv.name})
    }else if(process.argv[2]=== 'find by name'){
        findByName({name: yargs.argv.name})
    }else if(process.argv[2]=== 'find by channel'){
        findByChannel({channel: yargs.argv.channel})
    }else if(process.argv[2]=== 'find by time'){
            findByTime({time: yargs.argv.time})
    }else{
        console.log("Hey focus! You have typed the wrong command")
    }
}

app();