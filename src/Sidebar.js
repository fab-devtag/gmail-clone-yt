import React from 'react';
import './Sidebar.css';

import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
	return (
		<div className="sidebar">
			{}
			<Button startIcon={<AddIcon />}>Compose</Button>
		</div>
	);
}

export default Sidebar;
