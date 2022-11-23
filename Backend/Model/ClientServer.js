
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} utilisateur est connecté!`);
    socket.on('disconnect', () => {
      console.log('🔥: utilisateur vient de se deconnecter');

    });
});

module.exports.socketIO = socketIO 