// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="list-item">
      <img src={imgUrl} className="image" alt={name} />
      <p className="city-name">{name}</p>
    </li>
  )
}

export default DestinationItem
