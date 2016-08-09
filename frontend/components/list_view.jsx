import React from 'react';
import SessionStore from '../stores/session_store';
import TodoForm from './todo_form';

const ListView = React.createClass({

	getInitialState () {
		return {
			isLoggedIn: SessionStore.isLoggedIn()
		};
	},

	componentDidMount () {
		this.sessionStoreToken = SessionStore.addListener(this._onChange);
	},

	_onChange () {
		this.setState({isLoggedIn: SessionStore.isLoggedIn()});
	},

	componentWillUnmount () {
		this.sessionStoreToken.remove();
	},


  render () {
    let todoList = () => {
			if (this.state.isLoggedIn) {
				return (
					<div>

						<TodoForm />
					</div>
				);
			} else {
				return (
					<h1>u w0t m8</h1>
				);
			}

		};


    return (
      <div className="list-view">
        {todoList()}
      </div>
    );
  }
});

export default ListView;