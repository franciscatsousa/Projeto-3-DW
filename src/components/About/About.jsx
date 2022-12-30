import { Card } from '../Card'
import styles from './About.module.scss';

export const About = ({
	title,
	info,
	imgSrc,
	isCarousel = false,
	isProjectPage = false,
}) => {

	const renderInfo = () => {
		const { title, ...details } = info
		if (details.what) delete details.what
		return Object
			.entries(details)
			.slice(0, -1)
			.map(
				entry => <div className={styles.aboutElement}>
					<p>{entry[0]}</p>
					<p>{entry[1]}</p>
				</div>
			)
	}

	return (
		<div className={styles.aboutContainer}>
			<div className={styles.contentGrid}>
				<span>{title}</span>
				{renderInfo()}
			</div>
			<Card title={info.title} imgSrc={imgSrc} isCarousel={isCarousel} isProjectPage />
			<div>
				{
					title !== 'about me'
						? <>
							<p>what</p>
							<p>{info.what}</p>
						</>
						: <>
							<p>if by any reason you want to know more</p>
							<p>{info.bio}</p>
						</>
				}

			</div>
		</div>
	)
}
