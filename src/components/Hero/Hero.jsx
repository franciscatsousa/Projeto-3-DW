import styles from './Hero.module.scss';
import { heroImage } from '../../assets'

export const Hero = () => {
	return (
		<section className={styles.heroContainer}>
			<span>how did you even end up here</span>
			<img
				src={heroImage}
				alt='hero-image'
			/>
			<span>but ok that's me</span>
			<span>and "FTS" just stands for my whole name</span>
		</section>
	)
}
