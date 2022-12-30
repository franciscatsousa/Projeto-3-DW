import EmblaCarousel from '../Carousel/js/EmblaCarousel';
import styles from './Card.module.scss';

export const Card = ({
	title,
	imgSrc,
	isCarousel,
	isProjectPage = false
}) => {
	return (
		<div className={styles.cardContainer}>
			{isProjectPage && <span className={styles.topTitle}>{title}</span>}
			{
				isCarousel
					? <EmblaCarousel imgArray={imgSrc} />
					: <img src={imgSrc} alt='project-cover' />
			}
			<span>{title}</span>
		</div>
	)
}
