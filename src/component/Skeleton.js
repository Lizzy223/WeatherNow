import React from 'react';
import styles from './skeleton.module.css';

const Skeleton = () => {
    return (
        <div className={styles.card}>
            <div className={`${styles.skeleton} ${styles.skeletonAvatar}`}></div>
            <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>
            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        </div>
    );
};

export default Skeleton;
