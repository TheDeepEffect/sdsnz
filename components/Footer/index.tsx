import { faInstagram, faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import { contentfulLoader } from '../../utils'

export default function Footer() {
    return <footer className={styles.footer}>
        <div className="logo">
            <Image
                loader={contentfulLoader}
                src={'/images/logoFooter.png'}
                height={486}
                width={486}
            />
        </div>
        <div className={styles.company}>
            <div>
                <h2>Company</h2>
                <ul className={styles.companyLinks}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h2>Quick Links</h2>
                <ul className={styles.companyLinks}>
                    <li>Terms and Conditions</li>
                    <li>FAQs</li>
                </ul>
            </div>
        </div>
        <div className={styles.connect}>
            <h2>Connect with Us</h2>
            <ul className={styles.socialIcons}>
                <li>
                    <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin} />
                </li>
            </ul>
        </div>

    </footer>
}