'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e (
        'div'
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'

        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
        '/div'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);
