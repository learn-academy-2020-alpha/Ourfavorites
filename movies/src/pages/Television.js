import React, {Component} from "react"

class Television extends Component{
  render(){
    const { id } = this.props.match.params
    const television = this.props.television.find((television) => television.id === parseInt(id))
    return(
      <React.Fragment>
        <div>
          <h3>{ television.name }</h3>
          <p>{ television.description }</p>
        </div>
      </React.Fragment>
    )
  }
}
export default Television
