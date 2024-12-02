import * as React from "react";
import Layout from "../components/layout";
const IndexPage = () => {
    return (React.createElement(Layout, null,
        React.createElement("h4", { className: "font-bold text-4xl" }, "Website is under construction...")));
};
export default IndexPage;
export const Head = () => (React.createElement(React.Fragment, null,
    React.createElement("title", null, "Home Page"),
    React.createElement("html", { lang: "h-full bg-white" }),
    React.createElement("body", { className: "h-full" })));
