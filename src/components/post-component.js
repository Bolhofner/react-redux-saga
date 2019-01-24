class PostComponent extends React.Component {
    onSomeButtonClicked() {
      const { postId, dispatch } = this.props
      dispatch({type: 'GET_POST', payload: {postId}})
    }
  }