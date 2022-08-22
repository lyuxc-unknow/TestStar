onEvent('ftbquests.custom_reward', event => {
    let reward = event.getReward()
    let id = reward.quest.getCodeString()
    
    let oneMinute = (cmd) => {
        event.server.schedule(1 * MINUTE, event.server, callback => {
            callback.data.runCommandSilent(cmd)
            callback.data.tell("任务ID为" + id + "的任务已重置")
        })
    }

    let oneHour = (cmd) => {
        event.server.schedule(1 * HOUR, event.server, callback => {
            callback.data.runCommandSilent(cmd)
            callback.data.tell("任务ID为" + id + "的任务已重置")
        })
    }

    let anon = cmd => {
        event.server.schedule(5 * SECOND,event.server,callback => {
            callback.data.runCommandSilent(cmd)
            callback.data.tell("任务ID为" + id + "的任务已重置")
            //callback.data.tell(cmd)
        })
    }

    if(reward.hasTag('reset_minute')) {
        oneMinute('/ftbquests change_progress @p reset ' + id)
    }
    if(reward.hasTag('reset_hour')) {
        oneHour('/ftbquests change_progress @p reset ' + id)
    }
    if(reward.hasTag('reset')) {
        anon('/ftbquests change_progress @p reset ' + id)
    }
    //console.info(id)
})