// Write your code here
import './index.css'

const TabItem = props => {
  const {tabitemslist, selecting, isActive} = props
  const {displayText, tabId} = tabitemslist
  const myfavtab = () => {
    selecting(tabId)
  }
  const activeTab = isActive ? 'active_button_tab' : ''
  return (
    <li className="list_container">
      <button
        onClick={myfavtab}
        className={`button_for_tab ${activeTab}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
