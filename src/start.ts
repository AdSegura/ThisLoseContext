import {EchoServer} from './echo-server';

export class Starter {

   static run = (options: any) => {
        const server = new EchoServer();
        return server.run(options);
    }
}



