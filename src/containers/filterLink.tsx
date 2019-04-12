import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/link'

// mapStateToProps es una función que retorna un objeto simple
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.reducerVisibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}

// Pasa mapStateToProps y mapDispatchToProps como props al componente Link
// El nuevo componente (FilterLink) se subscribirá Redux
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;