import {Component} from 'react'

class AppItem extends Component {
  render() {
    const {appList} = this.props
    const {appName, imageUrl} = appList
    return (
      <div>
        <img src={imageUrl} alt={appName} />
        <h1> {appName} </h1>
      </div>
    )
  }
}
export default AppItem
