import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  
  connected() {
    console.log("connected")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    alert(data)
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function() {
    return this.perform('speak', {message: "できてます"});

  }
});

document.addEventListener('DOMContentLoaded', function(){
  let input = document.getElementById('chat-input')
  let button = document.getElementById('button')
  button.addEventListener('click', function(){
    let content = input.value
    // RoomChannel.speak(content)
    debugger
    input.value = ""
  })
})