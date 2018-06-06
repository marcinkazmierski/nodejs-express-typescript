import {ConfigEntity} from "../Entity/ConfigEntity";

export abstract class ConfigGatewayInterface {
    abstract load(): ConfigEntity;
}
