const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const server = http.createServer();
const io = socketIO(server);

io.use(cors());

io.on('connection', (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipient = recipients.filter((r) => r !== recipient);
      newRecipient.push(id);
       socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipient,  
        sender: id,
        text,
      });
    });
  });
});

server.listen(5000, () => {
  console.log('Socket.IO server is running on port 5000');
});
