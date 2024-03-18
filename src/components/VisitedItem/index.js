import './index.css'

const VisitedItem = props => {
  const {visitedDetails, removeVisitedCountry} = props
  const {id, name, imageUrl} = visitedDetails
  const onRemoveVisitedCountry = () => {
    removeVisitedCountry(id)
  }
  return (
    <li className="visited-item">
      <img className="visited-image" src={imageUrl} alt="thumbnail" />
      <div className="visited-container">
        <p className="visited-name">{name}</p>
        <button
          className="visited-button"
          type="button"
          onClick={onRemoveVisitedCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedItem
