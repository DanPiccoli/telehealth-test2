//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class JournalPrompts extends React.Component {
	render() {
		return(
			<div className="App">


				<h1>Please Select one of the Prompts Below</h1>

			<div>
				<div>
				<Link to={'./JournalForm'}>
					<button variant="raised">Prompt One</button>
					<script>
						var WhichPrompt = "PromptOne";
						sessionStorage.setItem("WhichPrompt","PromptOne");
					</script>
				</Link>
				</div>
				
				<div>
				<Link to={'./JournalForm'}>
					<button variant="raised">Prompt Two</button>
					<script>
						var WhichPrompt = "PromptTwo";
						sessionStorage.setItem("WhichPrompt","PromptTwo");
					</script>
				</Link>
				</div>
			</div>
			</div>
			
		);
	}
}

export default JournalPrompts;
