const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h2", { id: "childNew1" }, "I'm h2,child 1,New1"),
    React.createElement("h3", { id: "childNew2" }, "Im h2,child 1,New2"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h2", { id: "childNew1" }, "I'm h2,child 2,New1"),
    React.createElement("h3", { id: "childNew2" }, "Im h2,child 2,New2"),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#mUJS"));
root.render(parent);
