import {Container} from "typescript-ioc";
import {ConfigGateway} from "./Gateway/ConfigGateway";
import {ConfigGatewayInterface} from "./Gateway/ConfigGatewayInterface";

export default class ServiceProvider {
    static configure() {
        Container.bind(ConfigGatewayInterface).to(ConfigGateway);
    }
}
