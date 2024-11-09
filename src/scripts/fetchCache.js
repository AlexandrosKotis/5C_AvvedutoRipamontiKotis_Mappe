import { parseConfiguration } from "./jsonParser.js";

export function generateFetchComponent() {
    let config;

    return {
        build: (pathConfig) => {
            return new Promise((resolve, reject) => {
                parseConfiguration(pathConfig).parse()
                    .then((c) => {
                        config = c;
                        resolve("ok");
                    })
                    .catch(reject);
            });
        },
        getData: () => {
            return new Promise((resolve, reject) => {
                fetch(`https://us1.locationiq.com/v1/search?key=${config.tokenLocationIq}&q=%TOKEN&q=%VALUE&format=json`)
                    .then(response => response.json())
                    .then((r) => {
                        const lat = r[0].lat;
                        const lon = r[0].lon;
                        console.log(lat, lon);  
                        resolve([lat, lon]); 
                    })
                    .catch((error) => {
                        console.error(error);
                        reject(error);  
                    });
            });
        }
    };
}
