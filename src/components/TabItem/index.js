import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  onChangeTab = tabId => {
    const {tabBasedResults} = this.props
    tabBasedResults(tabId)
  }

  render() {
    const {tabList, tabBasedResults, key} = this.props
    const {tabId, displayText} = tabList
    return (
      <li className="tabNames">
        <button className="button" onClick={this.onChangeTab}>
          {' '}
          {displayText}{' '}
        </button>
      </li>
    )
  }
}

export default TabItem
