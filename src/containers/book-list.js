import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map( (book) => {
			return (
				<li 
				onClick={ () => this.props.selectBook(book)}
				key={book.title} 
				className="list-group-item">
				{book.title}
				</li>
			);
		});
	}



	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			);
	}


}


function mapStateToProps(state) {

	//Whatever is returned will show up as props inside of BookList

	return {
		books : state.books
	};

}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps( dispatch ) {
	//Wheneever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch );
	//inside of our container we can call this.props.selectBook
}

//Promote BookList from a component to a container - it needs to know about 
// this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);  




/*only the most direct parent component should be a smart component or container. 
initially you might think this component would be the app but this is not the case.
if we made app a smart component it would rerender the entire application needlessly. 
(my interpretation of redux)


*/