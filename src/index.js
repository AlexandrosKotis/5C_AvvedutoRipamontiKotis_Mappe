import { createForm } from "./scripts/form.js";
import { createMap } from "./scripts/mappe.js";
import { generateFetchComponent } from "./scripts/fetchCache.js";

const form = createForm(document.querySelector('#app'));
const map = createMap(document.getElementById("map"));
const fetchComp = generateFetchComponent();

form.setLabels(["Luogo"]);
form.render();

fetchComp.build("../../config.json").then(()=>{
    form.onsubmit((value) => {
        fetchComp.getData(value).then((data)=>{
            map.addPlace(value, data);
            map.render();
        }).catch(console.error);
    });
}).catch(console.error);
