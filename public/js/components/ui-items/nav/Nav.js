import React from 'react';
import { Link } from 'react-router';
import ReactDom from 'react-dom';
import openNav from './Nav-open';

class Nav extends React.Component {

  constructor() {
    super()

    this.state = {
      isOpen: false,
      styles: {}
    }

    this.openNav = openNav;
  }

  componentWillMount() {
    document.body.addEventListener('contextmenu', this.openNav.bind(this));
    // document.body.addEventListener('mouseup', this.closeNav.bind(this))
  }

  componentDidMount() {
    // Animate Border
    this.links = document.querySelectorAll('#context-menu ul a');
    this.borderLeft = this.refs.borderLeft;

    for (let i = 0; i < this.links.length; i++) {
      this.links[i].addEventListener('click', function() {
        document.querySelector('#context-menu .before').style.top = this.offsetTop + 'px';
      });
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('contextmenu', this.openNav);
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].removeEventListener('click');
    }
    // document.body.removeEventListener('mouseup', this.closeNav.bind(this))
  }

  closeNav(e) {
    // if (e.target == e.target.closest('#root')) {
      this.setState({
        isOpen: false
      })
    // }
  }

  render() {
    return (
      <nav  className={this.state.isOpen ? 'show' : 'hide'}
            style={this.state.styles}
            ref="contextMenu"
            id="context-menu">

        <ul>
          <div className="before" ref="borderLeft"></div>
          <li><Link to="/" className="icon icon-home" activeClassName="active"><i className="link-text">Home</i></Link></li>
          <li><Link to="/users" className="icon icon-users" activeClassName="active"><i className="link-text">Users</i></Link></li>
          <li><Link to="/messages" className="icon icon-bubbles2" activeClassName="active"><i className="link-text">Messages</i></Link></li>
          <li><Link to="/settings" className="icon icon-cog" activeClassName="active"><i className="link-text">Settings</i></Link></li>
        </ul>

      </nav>
    )
  }

}

export default Nav;
