import {Server} from './server';
import {options} from "./default-options";

/**
 * Echo server class.
 */
export class EchoServer {

    /** Default server options. */
    public defaultOptions: any;

    /** Configurable server options */
    private options: any;

    /** Socket.io server instance. */
    private server: Server;

    /** Create a new instance. */
    constructor(protected config?: any) {}

    /**
     * Start the Echo Server.
     *
     * @return promise
     */
    run = (config) => {
        this.defaultOptions  = options;

        if(config) {
            this.options = Object.assign(this.defaultOptions, config);
        } else {
            this.options = this.defaultOptions;
        }

        this.server = new Server(this.options);

        return new Promise((resolve, reject) => {
            this.server.init().then(() => {
                this.init().then(() => {
                    resolve(this);
                }, error => console.error(error));
            }, error => console.error(error));
        });
    }

    init(): Promise<any> {
        return new Promise((resolve, reject) => {
           resolve()
        });
    }

}
