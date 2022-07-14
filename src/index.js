// // import jQuery from "jquery";
// // import "./index.css";
// // console.log(jQuery);
// // import _ from "lodash";
// import "./style.css";
// import Icon from "./01.png";
// import Data from "./data.xml";
// import Notes from "./data.csv";
// import toml from "./data.toml";
// import yaml from "./data.yaml";
// import json from "./data.json5";
// import printMe from "./print.js";

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`
// async function getComponent() {
//   const element = document.createElement("div");
//   const { default: _ } = await import("lodash");
//   const res = await import("lodash");
//   console.log(res, "res");
//   console.log(_, "----");
//   // const btn = document.createElement("button");

//   //lodash 在当前 script 中使用 import 引入
//   // element.innerHTML = _.join(["Hello", "webpack"], " ")
//   // return import("lodash")
//   //   .then(({ default: _ }) => {
//   //     const element = document.createElement("div");
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   //   return element;
//   // })
//   // .catch((error) => "An error happen");
//   // element.classList.add("hello");
//   // btn.innerHTML = "muuuyi";
//   // btn.onclick = printMe;
//   // element.appendChild(btn);

//   // 将图像添加到我们已经存在的 div 中。
//   // const myIcon = new Image();
//   // myIcon.src = Icon;

//   // element.appendChild(myIcon);
//   // console.log(Data);
//   // console.log(Notes);

//   return element;
// }

// // document.body.appendChild(component());
// getComponent().then((component) => {
//   document.body.appendChild(component);
// });

// lan jia zai
import _ from "lodash";
function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  const br = document.createElement("br");
  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = (e) =>
    import(/* webpackChunkName: "print" */ "./print").then((module) => {
      const print = module.default;
      print();
    });

  return element;
}
document.body.appendChild(component());
