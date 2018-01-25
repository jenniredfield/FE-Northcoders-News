
const LOCAL_URL = "https://localhost:3000/api/";
// https://northcoders-news-api.herokuapp.com/api/
const URL = "https://nc-news-backend.herokuapp.com/api/";

export const fetchArticlesTwo = (path, topic) => {

    const url = topic
        ? `${URL}${path}/${topic}/articles`
        : `${URL}${path}`;



    return fetch(url, { method: 'GET' })
        .then(res => {

         return res.json()})
        .then(articles => {
  
            let articlesSorted = articles.sort(function (a, b) {
                return b.votes - a.votes;
            })

            return articlesSorted
        });
};

export const changeVote = (path, id, value) => {

    return fetch(`${URL}${path}/${id}?vote=${value}`, {
        method: 'PUT'
    }).then(res => {
        console.log(res)
        return res.json();
    }).then(resJSON => {
        console.log(resJSON)
        return resJSON;
    })
    .catch(console.error)

}

export const fetchComments = (id) => {


    return fetch(`${URL}articles/${id}/comments`, { method: 'GET' })
        .then(res =>  {
           return res.json()
        }).then(res => {
        
            return res;
        })

}

export const fetchArticlesById = (id) => {

    return fetch(`${URL}articles/${id}`)
        .then((resBuffer) => resBuffer.json())
        .then((res) => {
            console.log(res)
            return res
        })
        .catch(console.log);

}

export const postComment = (data, id) => {

    return fetch(`${URL}articles/${id}/comments`,
    {   method: 'POST', 
        body: JSON.stringify(data),
        headers: new Headers({
        'Content-Type': 'application/json'
        })
    }).then(res => {
 
        return res;
        

    })
}

export const deleteComment = (id) => {
    console.log('api')
   return  fetch(`${URL}comments/${id}/`, { method: 'DELETE' })
   .then(res => {
       console.log('delete commnet api')
       return res;
   });
}