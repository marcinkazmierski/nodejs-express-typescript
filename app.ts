import * as express from "express";
import {Routes} from "./src/Route/Routers";
import {ConfigGatewayInterface} from "./src/Gateway/ConfigGatewayInterface";
import {Inject} from "typescript-ioc";
import ServiceProvider from "./src/ServiceProvider";

class App {

    public app: express.Application;
    public routes: Routes = new Routes();

    @Inject
    protected config: ConfigGatewayInterface;

    constructor() {
        ServiceProvider.configure();

        this.app = express();
        this.routes.routes(this.app);
        const entity = this.config.load();
        console.log(entity.getGatabaseHost());
    }
}

export default new App().app;
