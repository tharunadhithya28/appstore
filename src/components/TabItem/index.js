import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabItem} = this.props
    const {displayText} = tabItem
    return (
      <div>
        <h1> {displayText} </h1>
      </div>
    )
  }
}

export default TabItem
