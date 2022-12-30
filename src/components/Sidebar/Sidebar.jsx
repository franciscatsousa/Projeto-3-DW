import { Link as RouterLink } from 'react-router-dom';

import { Link } from '../Link';

import styles from './Sidebar.module.scss';

export const Sidebar = ({ refs }) => {
	return (
		<div className={styles.sidebarContainer}>
			<RouterLink to='/'>
				<span>FTS</span>
			</RouterLink>
			<p>2022</p>
			<ul>
				<RouterLink to='/'>
					<Link linkText='HOME' onLinkClick={() => refs[0].current.scrollIntoView()} />
				</RouterLink>
				<RouterLink to='/'>
					<Link linkText='WORK' onLinkClick={() => refs[1].current.scrollIntoView()} />
				</RouterLink>
				<RouterLink to='/'>
					<Link linkText='ABOUT' onLinkClick={() => refs[2].current.scrollIntoView()} />
				</RouterLink>
			</ul>
		</div>
	)
}
