export default class DatabaseConfig{
    private static url:string = "mongodb://localhost/database-name";

    /** getUrl */
    public static getUrl(): string {
        return this.url;
    }
}
module.exports = DatabaseConfig;