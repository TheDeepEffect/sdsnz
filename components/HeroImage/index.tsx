import Image, { ImageProps } from 'next/image'
import { contentfulLoader } from '../../utils';
import styles from './../../styles/HeroImage.module.css';

export default function HeroImage(props: ImageProps) {
    return <div className={styles.heroImage}>
        <Image
            loader={contentfulLoader}
            {...props}
        />
    </div>
}