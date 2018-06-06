export class ConfigEntity {
    private databaseHost: string;


    getGatabaseHost(): string {
        return this.databaseHost;
    }

    setDatabaseHost(value: string) {
        this.databaseHost = value;
    }
}
