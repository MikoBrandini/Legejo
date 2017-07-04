import React from 'react';
import ReactDOM from 'react-dom';



class WikiContainer extends React.Component{

 componentDidMount(){
function createMarkup() {
  return {__html: this.props.wikiStuff};
  }
  render(){

}


    console.log(typeof this.props.wikiStuff.data)

    return <div>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  }

}

export default WikiContainer
