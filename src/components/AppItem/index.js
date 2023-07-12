import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appList} = this.props
    const {appName, imageUrl} = appList
    return (
      <div className="appStyle">
        <img className="appImage" src={imageUrl} alt={appName} />
        <h1 className="appName"> {appName} </h1>
      </div>
    )
  }
}
export default AppItem
