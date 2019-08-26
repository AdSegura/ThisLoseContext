var http = require('http');
var express = require('express');
const os = require("os");

export class Server {
    /**
     * The http server.
     *
     * @type {any}
     */
    public express: any;

    /** express httpServer */
    protected server: any;

    /** id representing server instance */
    protected server_id: any;

    /**
     * Create a new server instance.
     */
    constructor(private options: any) {
        this.server_id = this.generateServerId();
    }

    /**
     * Start the Socket.io server.
     *
     * @return {void}
     */
    init(): Promise<any> {
        console.log(`INIT: Server_ID: ${this.server_id}, PORT: ${this.options.port}`);
        console.log('-----------------------------------------');
        return new Promise((resolve, reject) => {
            debugger;
            this.serverProtocol().then(instance => {
                debugger;
                console.log(`ServerProtocol: Server_ID: ${this.server_id}; PORT: ${this.options.port}`);
                resolve();
            }, error => reject(error));
        });
    }

    /**
     * Select the http protocol to run on.
     *
     * @return {Promise<any>}
     */
    serverProtocol(): Promise<any> {
        return this.httpServer()
    }

    /**
     * Express socket.io server.
     */
    httpServer(): Promise<any> {
        return new Promise((resolve, reject) => {

            this.express = express();
            this.express.use((req, res, next) => {
                for (var header in this.options.headers) {
                    res.setHeader(header, this.options.headers[header]);
                }
                next();
            });

            const httpServer = http.createServer(this.express);

            function cb() {
                debugger;
                console.log(`Callback: Server_ID: ${this.server_id}, PORT: ${this.options.port}`)
                return resolve.call(this, this)
            }

            this.server = httpServer.listen(this.options.port, this.options.host, () =>  cb.call(this));
        })
    }

    /**
     * Generate Server Id
     *
     * @return string hostname_port
     */
    generateServerId(): string {
        const hostname = os.hostname();
        const port = this.options.port;

        return `${hostname}_${port}`
    }

}
