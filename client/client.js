const connection = new WebSocket("ws://localhost:8080");
const sendButton = document.getElementById('send');

connection.onopen = (event) => {
    console.log("WebSocket is open.");
};

connection.onclose = (event) => {
    console.log("WebSocket is closed.");
};

connection.onerror = (event) => {
    console.log("WebSocket error: ", event);
};

// Append message to the DOM
connection.onmessage = (event) => {
    const chat = document.getElementById('chat');
    chat.innerHTML +=  `<p>${event.data}</p>`;
};

sendButton.addEventListener("click", () => {
    const name = document.getElementById('name');
    const message = document.getElementById('message');
    const data = `${name.value}: ${message.value}`;

    // Send message to the server
    // Ensure that the name and message is present
    if (message.value && name.value) {
        connection.send(data);

        // Clear fields
        message.value = '';
    }

});