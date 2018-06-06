import * as fs from "fs";
import * as yaml from "js-yaml";
import {ConfigGatewayInterface} from "./ConfigGatewayInterface";
import {ConfigEntity} from "../Entity/ConfigEntity";

export class ConfigGateway implements ConfigGatewayInterface {
    public load(): ConfigEntity {
        let entity = new ConfigEntity();
        const filename = __dirname + '/../../config/config.yml';
        const config = yaml.load(fs.readFileSync(filename));
        entity.setDatabaseHost(config.database.host);
        return entity;
    }
}
