import React from 'react';
import { Button } from 'react-bootstrap';
class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.onClickButton = props.onClickButton;
    this.text = props.text;
  }

  render() {
    return (
      <Button
        variant="info"
        type="button"
        size="lg"
        onClick={() => this.onClickButton()}
      >
        {this.text}
      </Button>
    );
  }
}

export default Boton;