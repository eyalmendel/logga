import { Logger } from './Logger';
import { BaseConfig } from "./config/BaseConfig";


export default class Logga {
    
    private static defaultConfig: BaseConfig = new BaseConfig();

    private constructor() {
        throw new Error("This class is a Singleton!");
    }

    public static createLogger = (json: any): Logger => {
        if(Logga.isEmpty(json)) {
            return new Logger(Logga.defaultConfig);
        }
        const config = new BaseConfig(json);
        return new Logger(config);
    }

    /**
     * Set a custom default configuration
     */
    public static configure = (json: any): void => {
        Logga.defaultConfig = new BaseConfig(json);
    }

    private static isEmpty = (object: any) => {
        return object === undefined ||
            Object.keys(object).length === 0;
    }
}