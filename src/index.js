import { createForm } from "./scripts/form.js";
import { createMap } from "./scripts/mappe.js";

const form = createForm(document.querySelector('#app'));
  form.setLabels(["Luogo"]);
  form.onsubmit(console.log);
  form.render();

const map = createMap(document.getElementById("map"));
map.render();