import React from 'react';
import SearchView from './SearchView.jsx';
import sampleData from './QAdata/sampleData.js';
// check font awesome for search icon?

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      questionList: sampleData,
    };

    this.searchClick = this.searchClick.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  // search text function
  searchChange(e) {
    if (e.target.value.length >= 3) {
      this.setState({ searchText: e.target.value });
    }
    if (e.target.value.length < 3) {
      while (this.props.searchList.length) {
        this.props.searchList.pop();
      }
    }
    console.log(this.state.searchText);
  }

  // click the search button function
  searchClick(e) {
    e.preventDefault();
    // loop to empty the search array for the next search
    while (this.props.searchList.length) {
      this.props.searchList.pop();
    }
    const questionL = this.state.questionList.results;
    console.log('questionL ', questionL);
    for (let i = 0; i < questionL.length; i++) {
      if (questionL[i].question_body.includes(this.state.searchText)) {
        // this.state.searchList.push(questionL[i]);
        this.props.searchList.push(questionL[i]);
        // this.setState({ searchList: this.state.searchList });
      }
    }
    console.log('props.searchList ', this.props.searchList);
  }

  // render the questions that correspond to what was entered in the serach field
  render() {
    return (
      <div>
        {console.log('searchList ', this.props.searchList)}
        <form onSubmit={this.searchClick}>
          <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.searchChange} />
          <button type="submit">search</button>
        </form>
        {this.state.questionList.results.map((questions, index) =>
          <SearchView questions={questions} key={index} />)}
      </div>
    );
  }
}

export default Search;
// {console.log('questionList ', this.state.questionList.results)}
