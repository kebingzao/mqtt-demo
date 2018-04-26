var mqtt = require('mqtt');
// var client  = mqtt.connect('mqtt://test.mosquitto.org');
var client  = mqtt.connect('ws://47.96.150.214:1889/mqtt');

client.on('connect', function () {
    console.log("connected");
    client.subscribe('presence');
    setTimeout(function(){
        client.publish('presence', 'Hello mqtt')
    },10)
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(topic);
    console.log(message.toString());
    client.end()
});

console.log("start");