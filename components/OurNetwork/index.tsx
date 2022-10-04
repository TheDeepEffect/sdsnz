import { OurNetworkProps } from "../../utils/types";
import styles from './../../styles/OurNetwork.module.css';

export default function OurNetwork(props: OurNetworkProps) {
    const { locations } = props;
    return <div className={styles.network}>
        <div className={styles.networkHeader}>
            <h3>Our Network</h3>
        </div>
        <div className={styles.networkContent}>
            <p>
                {locations}
            </p>
        </div>
    </div>
}