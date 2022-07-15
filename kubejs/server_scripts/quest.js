onEvent('ftbquests.custom_reward', event => {
    let reward = event.getReward()
    let id = reward.quest.getCodeString()
    
    let oneMinute = (cmd) => {
        event.server.schedule(1 * MINUTE, event.server, callback => {
            callback.data.runCommandSilent(cmd)
            callback.data.tell("任务ID为" + id + '的任务已重置')
        })
    }

    let oneHour = (cmd) => {
        event.server.schedule(1 * HOUR, event.server, callback => {
            callback.data.runCommandSilent(cmd)
            callback.data.tell("任务ID为" + id + '的任务已重置')
        })
    }

    if(reward.hasTag('reset_minute')) {
        oneMinute('/ftbquests change_progress ' + event.player.name + ' reset ' + id)
    }
    if(reward.hasTag('reset_hour')) {
        oneHour('/ftbquests change_progress ' + event.player.name + ' reset ' + id);
    }
    //console.info(id)
})