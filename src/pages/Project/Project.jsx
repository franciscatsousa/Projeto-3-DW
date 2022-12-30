import { About } from '../../components/About';
import { Sidebar } from '../../components/Sidebar';

import styles from './Project.module.scss';

export const Project = ({ info, imgSrc }) => {
	return (
		<div className={styles.projectWrapper}>
			<Sidebar />
			<div className={styles.aboutWrapper}>
				<About
					title='projects'
					info={info}
					imgSrc={imgSrc}
					isCarousel={imgSrc.length > 1}
					isProjectPage
				/>
			</div>
		</div>
	)
}
