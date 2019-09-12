/**
 * @description 发布订阅对象
 */
const Pubsub = (function(){
    let topics = {}
    function publish(topic,data){
        if(topics[topic]){
            for(let fn of topics[topic]){
                fn(data)
            }
        }else{
            topics[topic] = []
        }
    }
    function subscribe(topic,callback){
        if(!topics[topic]){
            topics[topic] = []
        }
        topics[topic].push(callback)
    }
    function clearAllSub(){
        for(let key in topics){
            topics[key] = []
        }
    }
    return {
        publish,
        subscribe,
        clearAllSub
    }
})()

export default Pubsub
