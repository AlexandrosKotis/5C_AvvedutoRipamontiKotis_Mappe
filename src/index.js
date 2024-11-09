import { createForm } from "./scripts/form.js";

const form = createForm(document.querySelector('#app'));
  form.setLabels(["Luogo"]);
  form.onsubmit(console.log);
  form.render();