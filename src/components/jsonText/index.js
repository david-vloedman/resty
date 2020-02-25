import React, { useContext } from "react";


/**
 * JsonText class/component
 * @description text area with crucial behaviour being passed down via props
 */



class JsonText extends React.Component {
  render() {
    return (
      <textarea
        placeholder="Raw JSON Body"
        name="requestBody"
        onChange={this.props.onChange}
        
        disabled={          
          this.props.disabled
        }
      />
    );
  }
}


export default JsonText;
