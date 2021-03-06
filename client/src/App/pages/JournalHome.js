//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class JournalHome extends Component {
    render() {
        return (
            <div className="App">
                <h1>Journal Home</h1>

                {/* Link to List.js */}
                <Link to={'./JournalPrompts'}>
                    <button variant="raised">Create New Entry</button>
                </Link>
				
				{/* Link to List.js */}
                <Link to={'./JournalPast'}>
                    <button variant="raised">Read Old Entries</button>
                </Link>
				
				
            </div>
        );
    }
}
export default JournalHome;
