import React, { Component, PropTypes} from 'react';
import { searchCommand} from '../../actions';
import { connect} from 'react-redux';
import cn from 'classnames';
import s from './SearchBar.scss'

/**
 * SearchBar
 */
@connect((store) => {
  return {
    searchQuery: store.searchQuery
  }
}, (dispatch) => {
  return {
    onSubmit: (e) => {
      dispatch(searchCommand(e.target.querySelector('input').value));
    }
  }
})
export class SearchBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let searchButton = cn(['btn','btn-primary',s.searchButton])
    return (
      <div className="input-group mt-3">
      <form className={s.searchForm} onSubmit= {e => {
        e.preventDefault();
        this.props.onSubmit(e);
      }}>
        <button type="submit" className={searchButton} >Go</button>
        <div className={s.searchInput}>
          <input type="text" className="form-control pull-left"
          style={{"width":"auto"}}
          placeholder="Search"
          aria-describedby="basic-addon2"/>
        </div>
      </form>
</div>
    );
  }
}

export default SearchBar;
