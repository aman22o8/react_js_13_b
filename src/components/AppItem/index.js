// Write your code here
import './index.css'

const AppItem = props => {
  const {eachappitems} = props
  const {appName, imageUrl} = eachappitems
  return (
    <li className="app_list_container app_container_acs">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="app_name">{appName}</p>
    </li>
  )
}

export default AppItem
