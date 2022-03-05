import React from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					src="https://cellphones.com.vn/sforum/wp-content/uploads/2020/10/newgmaillogo.0.jpg"
					alt=""
				/>
			</div>
			<div className="header__middle">
				<SearchIcon />
				<input type="text" placeholder="Search mail" />
				<ArrowDropDownIcon className="header__inputCaret" />
			</div>
			<div className="header__right">
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>

				<Avatar />
			</div>
		</div>
	);
}

export default Header;
