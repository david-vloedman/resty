import React from "react";
import ReactJson from "react-json-view";


/**
 * JsonHeader class/component
 * @description uses the react-json-view component to render JSON headers
 */

class JsonHeader extends React.Component {
  render() {
    return (
      <ReactJson
        id="JsonHeader"
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={this.props.src}
      />
    );
  }
}



export default JsonHeader;
