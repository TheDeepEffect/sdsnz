import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { contentfulLoader } from "../utils";
import styles from './../styles/InfoCard.module.css';

type InfoCardProps = {
    name: string,
    imgUrl: string,
    designation: string,
    linkedIn: string,
    content: string,
};
export default function InfoCard(props: InfoCardProps) {
    const { name, imgUrl, designation, linkedIn, content } = props;
    return (<div className={styles.infoCard}>
        <div className={styles.infoNameContainer}>
            <div className={styles.infoName}>
                {name}
            </div>
            <div className={styles.infoDesignation}>
                Founder &amp; Managing Director
                <a href={linkedIn} target="_blank">
                    <FontAwesomeIcon
                        className={styles.socialLogo}
                        icon={faLinkedin}
                    />
                </a>
            </div>
        </div>
        <div className={styles.infoContent}>
            <div className={styles.infoPic}>
                <Image
                    loader={contentfulLoader}
                    src={imgUrl}
                    height={223}
                    width={223}
                    objectFit='cover'
                />
            </div>
            <p>
                {content}
            </p>
        </div>
    </div>)
}