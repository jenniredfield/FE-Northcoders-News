const URL = 'https://be-nc-news-jen-feb.herokuapp.com/api/';

export const fetchArticlesTwo = (path, topic) => {

  const url = topic
    ? `${URL}${path}/${topic}/articles`
    : `${URL}${path}`;

  return fetch(url, { method: 'GET' })
    .then(res => {

      return res.json();})
    .then(articles => {
            
      articles = articles.articles;
            
      let articlesSorted = articles.sort(function (a, b) {
        return b.votes - a.votes;
      });

      return articlesSorted;
    }).catch(console.error);
};

export const fetchTopics = () => {

  return fetch(`${URL}topics`)
    .then((resBuffer) => resBuffer.json())
    .then((res) => {

      let topics = res.topics;
      return topics;

    })
    .catch(console.error);
};

export const changeVote = (path, id, value) => {

  return fetch(`${URL}${path}/${id}?vote=${value}`, {
    method: 'PUT'
  }).then(res => {
      
    return res.json();
  }).then(res => {
   
    return res;
  })
    .catch(console.error);

};

export const fetchComments = (id) => {

  return fetch(`${URL}articles/${id}/comments`, { method: 'GET' })
    .then(res =>  {
      return res.json();
    }).then(res => {
      let comments = res.comments;
      return comments;
    });

};

export const fetchArticlesById = (id) => {

  return fetch(`${URL}articles/${id}`)
    .then((resBuffer) => resBuffer.json())
    .then((res) => {
      let article = res.article;
      return article;
    })
    .catch(console.log);

};

export const postComment = (data, id) => {

  return fetch(`${URL}articles/${id}/comments`,
    {   method: 'POST', 
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
 
    return res;

  });
};

export const deleteComment = (id) => {

  return  fetch(`${URL}comments/${id}/`, { method: 'DELETE' })
    .then(res => {
       
      return res;
    });
};

export const fetchUser = (user) => {

  return fetch(`${URL}users/${user}/`)
    .then(resBuffer => {
      return resBuffer.json();
    }).then(res => {
 
      return res;
    });

};