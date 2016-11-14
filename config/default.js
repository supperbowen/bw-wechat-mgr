module.exports = {
    app: {
        name: 'bw-wechat-mgr',
        version: '2.1.0'
    },
    server: {
        port: 8080
    },
    worker: process.env.NODE_WORKER_NAME,
    rabbitMq: {
        host: "127.0.0.1",
        port: 5672,
        options: {durable: true},
        queue: process.env.NODE_QUEUE_NAME,
        user: "myuser",
        password: "mypass"
    }
};