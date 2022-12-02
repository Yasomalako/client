import React    from "react";
import template from "./products.test.js";

class products extends React.Component {
  render() {
    return template.call(this);
  }
}

export default products;
