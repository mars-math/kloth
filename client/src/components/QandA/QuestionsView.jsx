/* eslint-disable no-else-return */
import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js';
import AnswersView from './AnswersView.jsx';
import AddAnswer from './AddAnswer.jsx';

class QuestionsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreAnswers: false,
      sortedAnswers: [],
      clickedHelpful: true,
      showAddA: false,
    };

    this.showAnswers = this.showAnswers.bind(this);
    this.loadAnswersClick = this.loadAnswersClick.bind(this);
    this.loadTextChange = this.loadTextChange.bind(this);
    this.clickHelpful = this.clickHelpful.bind(this);
    this.helpfulCounterDisplay = this.helpfulCounterDisplay.bind(this);
    this.clickAddAnswer = this.clickAddAnswer.bind(this);
    this.showAddAnswer = this.showAddAnswer.bind(this);
  }

  // render 4 answers till more are clicked
  showAnswers(answerList) {
    this.state.sortedAnswers = [];
    for (const k in answerList) {
      if (answerList[k].answerer_name === 'Seller') {
        this.state.sortedAnswers.unshift({ k: answerList[k] });
      } else {
        this.state.sortedAnswers.push(({ k: answerList[k] }));
      }
    }
    if (this.state.sortedAnswers.length > 2 && this.state.moreAnswers === false) {
      return (
        <>
          {this.state.sortedAnswers.slice(0, 2).map((sortedAns, index) => <AnswersView answer={sortedAns.k} key={index} />)}
        </>
      );
    } else if ((this.state.sortedAnswers.length > 0 && this.state.moreAnswers === true)
      || (this.state.sortedAnswers.length > 0 && this.state.moreAnswers === false)) {
      return (
        <>
          {this.state.sortedAnswers.map((sortedAns, index) => <AnswersView answer={sortedAns.k} key={index} />)}
        </>
      );
    } else {
      return <></>;
    }
  }

  // used for rendering more answers
  loadAnswersClick() {
    this.setState({ moreAnswers: !this.state.moreAnswers });
  }

  // change the text for rendering more answers
  loadTextChange() {
    if (Object.keys(this.props.answers).length > 2) {
      if (this.state.moreAnswers) {
        return <>Collapse answers</>;
      } else {
        return <>See more answers</>;
      }
    } else {
      return <></>;
    }
  }

  // incirments the helpful counter for questions
  clickHelpful(e) {
    const qID = this.props.questions.question_id;
    if (this.state.clickedHelpful) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${qID}/helpful`, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((results) => {
          console.log('results ', results);
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ clickedHelpful: !this.state.clickedHelpful });
    }
  }

  // displays the updated helpful count
  helpfulCounterDisplay() {
    if (this.state.clickedHelpful) {
      return (<>{ this.props.questions.question_helpfulness }</>);
    } else {
      return (<>{ this.props.questions.question_helpfulness + 1}</>);
    }
  }

  // sets the sate to help with add answer pop out
  clickAddAnswer() {
    this.setState({ showAddA: !this.state.showAddA });
  }

  // renders the add answer pop out
  showAddAnswer() {
    if (this.state.showAddA) {
      return (
        <AddAnswer
          showAddA={this.state.showAddA}
          closeAddAnswer={this.clickAddAnswer}
          questionID={this.props.questions.question_id}
          questionBody={this.props.questions.question_body}
          getItemInfo={this.props.getItemInfo}
          productName={this.props.productName}
        />
      );
    }
    return <></>;
  }

  render() {
    return (
      <div>
        <div className="question-list">
           <b>Q:&emsp;{this.props.questions.question_body}</b>
          <span className="questions-helpful">
            Helpful?<span className="clickable" onClick={this.clickHelpful}>&ensp;<u>Yes</u>&nbsp;</span>
            ({this.helpfulCounterDisplay()})
            <span data-testid="add-answer" onClick={this.clickAddAnswer}>&emsp;|&emsp;<u className="clickable">Add Answer</u></span>
            <span data-testid="answer-popout">{this.showAddAnswer()}</span>
          </span>
        </div>
        <div>
          {Object.keys(this.props.answers).length ? <span className="A-tag">A:</span> : <br />}
          <ul data-testid="Answers" className="answer-list">{this.showAnswers(this.props.answers)}</ul>
          <div data-testid="More-Answers" className="load-answers" onClick={this.loadAnswersClick}>
            <b>{this.loadTextChange()}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsView;
// style={{ maxHeight: '601px', overflow: 'auto', width: '45%' }}

{/* <span className="A-tag">A:</span> */}
// {console.log('answers as this.props.answers ', this.props.answers)}
// {/* {console.log('this.props.questions ', this.props.questions)} */}
// {console.log('answers as this.props.answers ', this.props.answers)}

// {this.props.answerId.map((id, index) =>
//   <AnswersView answer={this.props.questions.answers[id]} key={index} moreAnswers={this.state.moreAnswers}/>
// )}
