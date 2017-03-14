function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
    //return new state w
    return [...state, {
      user: action.author,
      text: action.comment
    }];

    case 'REMOVE_COMMENT':
    console.log("Removing a comment");
    // return without deleted comment
    return[
      //from the start to the one we want to delete
      ...state.slice(0, action.i),
      //after deleted one.
      ...state.slice(action.i + 10)

    ]
    default:
      return state;
  }
  return state;
}

function comments(state= [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
