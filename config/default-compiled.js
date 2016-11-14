'use strict';

module.exports = {
    app: {
        name: 'bw-wechat-mgr',
        version: '2.1.0'
    },
    server: {
        port: process.env.PORT || 8081
    },
    worker: process.env.NODE_WORKER_NAME,
    rabbitMq: {
        host: "127.0.0.1",
        port: 5672,
        options: { durable: true },
        queue: process.env.NODE_QUEUE_NAME,
        user: "myuser",
        password: "mypass"
    }
};

//# sourceMappingURL=default-compiled.js.map