const apiUrl = "http://13.58.161.60";
const Axios = require("axios");

module.exports = {
  getProductInfo: productId => {
    return Axios.get(`${apiUrl}/products/${productId}`);
  },

  getStyles: productId => {
    return Axios.get(`${apiUrl}/products/${productId}/styles`);
  },

  getRelated: productId => {
    return Axios.get(`${apiUrl}/products/${productId}/related`);
  },

  getQA: productId => {
    return Axios.get(`${apiUrl}/qa/${productId}`);
  },

  getReviews: productId => {
    return Axios.get(`${apiUrl}/reviews/${productId}/list?count=4`);
  },

  getMeta: productId => {
    return Axios.get(`${apiUrl}/reviews/${productId}/meta`);
  },
  putReport: reviewId => {
    return Axios.put(`${apiUrl}/reviews/report/${reviewId}`);
  },
  getSortedReviews: (productId, sort, page) => {
    return Axios.get(
      `${apiUrl}/reviews/${productId}/list?count=4&sort=${sort}&page=${page}`
    );
  },
  putHelpful: reviewId => {
    return Axios.put(`${apiUrl}/reviews/helpful/${reviewId}`);
  },
  postReview: (productId, rating, summary, body, recommend, name, email, photos, characteristics) => {
    return Axios.post(`${apiUrl}/reviews/${productId}`, {
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    });
  },
  postAnswer: (questionId, body, name, email, photos) => {
    return Axios.post(`${apiUrl}/qa/${questionId}/answers`, {
      body: body,
      name: name,
      email: email,
      photos: photos
    });
  },
  putAnswerReport: answerId => {
    return Axios.put(`${apiUrl}/qa/answer/${answerId}/report`);
  },
  putAnswerHelpful: answerId => {
    return Axios.put(`${apiUrl}/qa/answer/${answerId}/helpful`);
  },
  putQuestionHelpful: questionId => {
    return Axios.put(`${apiUrl}/qa/question/${questionId}/helpful`);
  },
  postQuestion: (productId, body, name, email) => {
    return Axios.post(`${apiUrl}/qa/${productId}`, {
      body: body,
      name: name,
      email: email
    });
  }, 
  clickTracker: (element, widget) => {
    Axios.post(`${apiUrl}/interactions`, {
      element: element,
      widget: widget,
      time: Date.now().toString()
    });
  },
  postToCart: (productId, sessionId) => {
    return Axios.post(`${apiUrl}/cart`, {
      user_session: parseInt(sessionId),
      product_id: parseInt(productId)
    });
  }
};
