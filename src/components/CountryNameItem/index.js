import './index.css'

const CountryNameItem = props => {
  const {countryDetails, markVisited} = props
  const {id, name, isVisited} = countryDetails
  const onClickMarkVisited = () => {
    markVisited(id)
  }
  return (
    <li className="country-name-list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          type="button"
          className="not-visited"
          onClick={onClickMarkVisited}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryNameItem
