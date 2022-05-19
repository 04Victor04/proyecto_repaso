import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Gatos: [],
    };
  }
  async componentDidMount() {
    fetch('https://cataas.com/api/cats?tags=cute')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          Gatos: data.cute,
        })
      );
  }
  render(){
    return (
      <div>
          <h2>
           img
          </h2>
          {/*{data.map(cutes => {
            return (
                
            );
          })}*/}
      </div>
    );
  }
}
  
  export default Home;