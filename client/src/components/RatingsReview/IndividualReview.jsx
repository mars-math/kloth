/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-else-return */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReviewImages from './ReviewImages.jsx';
import Stars from './ratingexampledata/stars.js';
import API_KEY from '../../../../config/config.js';

const {
  almostStar, quarterStar, halfStar, fullStar, emptyStar,
} = Stars;

export default function IndividualReview(props) {
  const {render} = props;
  const [helpfulNum, setHelpfulNum] = useState(render.helpfulNum);
  const [buttonPressed, setButtonPressed] = useState(true);
  const [toggleBody, setToggleBody] = useState(false);

  axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
  axios.defaults.headers.common.Authorization = API_KEY;

  // -----MESS WITH STATE FUNCTIONS-------------
  function incrementHelpfulness() {
    axios.put(`/reviews/${render.review_id}/helpful`)
      .then(() => setHelpfulNum((prevNum) => prevNum + 1))
      .catch((err) => console.log(err));
  }

  function bodyToggle() {
    setToggleBody(!toggleBody);
  }

  useEffect(() => {
    setHelpfulNum(render.helpfulness);
  }, [render]);
  // ------OTHER FUNCTIONS--------------
  function whichStar(rating, index) {
    if (rating >= index + 1) {
      return fullStar;
    } else {
      if (rating === (index + 0.5) || (rating > index + 0.33 && rating < index + 0.66)) {
        return halfStar;
      }
      if (rating <= index + 0.33 && rating > index) {
        return quarterStar;
      }
      if (rating >= index + 0.66) {
        return almostStar;
      }
      return emptyStar;
    }
  }

  function tooBig(body) {
    if (body.length > 250) {
      const shortened = `${body.slice(0, 250)}...`;
      return toggleBody ? <>
        <div style={{inlineSize: '400px', overflowWrap: 'break-word'}}>{body}</div>
       <button onClick={bodyToggle}>Show Less</button>
                          </>
        : <>
      <div style={{inlineSize: '400px', overflowWrap: 'break-word'}}>{shortened}</div>
      <button onClick={bodyToggle}>Show More</button>
          </>;
    } else {
      return <div style={{inlineSize: '400px', overflowWrap: 'break-word'}}>{body}</div>;
    }
  }

  function photosExist(photos) {
    if (photos.length !== 0) {
      return photos.map((photo, index) => <ReviewImages photo={photo.url} key={`photos${index}`} />);
    } else {
      return <></>;
    }
  }

  return (
      <div className="individual-review">
      {/* --------------STARS---------------- */}
      <div>
      {[...Array(5)].map(
        // eslint-disable-next-line react/no-array-index-key
        (star, index) => <span key={`star${index}`}>{whichStar(render.rating, index)}</span>,
      )}
      </div>
      {/* --------------RECOMMENDED?---------------- */}
      {render.recommend ? <div>Recommended</div> : <></>}
      {/* --------------DATE---------------- */}
      <div>{new Date(render.date).toLocaleString().split(',')[0]}</div>
      {/* --------------NAME---------------- */}
      <div>{render.reviewer_name}</div>
      {/* --------------summary---------------- */}
      <h2>{render.summary}</h2>
      {/* --------------REVIEW BODY---------------- */}
      {tooBig(render.body)}
      {/* --------------IS THERE SELLER RESPONSE?---------------- */}
      {render.response ? (
        <>
          <h4>Response From the Seller: </h4>
          <div>{render.response}</div>
        </>
      ) : <></>}
      {/* --------------ARE THERE PHOTOS?---------------- */}
      {photosExist(render.photos)}
      {/* --------------HELPFUL COUNTER---------------- */}
        <div>
          <span>
          helpful?
          {' '}
          {helpfulNum}
          </span>
        {buttonPressed && (
          <button
            type="button"
            onClick={() => {
              incrementHelpfulness();
              setButtonPressed(!buttonPressed);
            }}
          >
          +
          </button>
        )}
        </div>
      </div>
  );
}
