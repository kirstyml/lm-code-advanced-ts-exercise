// ❗ this won't always be true!
//    we should add some ability to configure the client with the
//    correct baseUrl...
import { getConfig } from "../../../server/src/config/config";
const config = getConfig();
const devServer = `http://localhost:${config.port}`;
const prodServer = "someProductionServer";
export const baseUrl = config.isDev ? devServer: prodServer;
