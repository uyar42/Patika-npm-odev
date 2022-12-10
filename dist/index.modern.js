import React from 'react';

var styles = {"primary":"_3ljpl","default":"_3UK6o","dashed":"_27xYC","text":"_5bXm4","link":"_71S8l"};

var Button = function Button(props) {
  var types = [props.type];
  console.log(types);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "600px",
      marginTop: "60px"
    }
  }, types.map(function (typ, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: index,
      className: styles[typ]
    }, props.children);
  }));
};

export { Button };
//# sourceMappingURL=index.modern.js.map
