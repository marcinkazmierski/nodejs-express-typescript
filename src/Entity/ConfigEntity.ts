export class ConfigEntity {
    private databaseHost: string;

    getDatabaseHost(): string {
        return this.databaseHost;
    }

    setDatabaseHost(value: string) {
        this.databaseHost = value;
    }
}
