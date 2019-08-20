import axios from "axios";

export const setPosts = posts => ({
  type: "SET_POSTS",
  posts
});

export const startSetPosts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://bloggy-api.herokuapp.com/posts`
      );

      dispatch(setPosts(response.data));
    } catch (e) {
      throw new Error("Could not retrieve posts...");
    }
  };
};

export const addPost = post => ({
  type: "ADD_POST",
  post
});

export const startAddPost = post => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `https://bloggy-api.herokuapp.com/posts`,
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: post
      });

      dispatch(addPost(response.data.post));
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  };
};

export const editPost = updates => ({
  type: "EDIT_POST",
  updates
});

export const startEditPost = (post, id) => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `https://bloggy-api.herokuapp.com/posts/${id}`,
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        data: post
      });

      dispatch(editPost(response.data.post));
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  };
};

export const deletePost = id => ({
  type: "DELETE_POST",
  id
});

export const startDeletePost = id => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `https://bloggy-api.herokuapp.com/posts/${id}/`,
        method: "del",
        headers: {
          "Content-Type": "application/json"
        }
      });

      dispatch(deletePost(id));
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  };
};

export const addComment = (id, comment) => ({
  type: "ADD_COMMENT",
  id,
  comment
});

export const startAddComment = (id, comment) => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `https://bloggy-api.herokuapp.com/comments`,
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          comment
        }
      });

      dispatch(addComment(id, response.data));
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  };
};
