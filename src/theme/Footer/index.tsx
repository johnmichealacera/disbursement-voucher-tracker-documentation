import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const isBisaya = i18n.currentLocale === 'ceb';
  
  // Get the copyright text and split it to insert logo
  const currentYear = new Date().getFullYear();
  const copyrightText = isBisaya 
    ? `Copyright © ${currentYear} Municipal Government. Gihimo sa Docusaurus og`
    : `Copyright © ${currentYear} Municipal Government. Built with Docusaurus and`;
  
  return (
    <>
      <div className={styles.hideOriginalCopyright}>
        <Footer {...props} />
      </div>
      <div className={styles.copyrightWithLogo}>
        <div className="container">
          <div className={styles.copyrightContent}>
            <span className={styles.copyrightText}>
              {copyrightText}
            </span>
            <Link
              href="https://www.localwebventures.net/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              title="LocalWebVentures"
            >
              <img
                src="/LocalWebVentures-logo.png"
                alt="LocalWebVentures"
                className={styles.logo}
                title="LocalWebVentures"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const textFallback = target.nextElementSibling as HTMLElement;
                  if (textFallback) {
                    textFallback.classList.remove(styles.hidden);
                  }
                }}
              />
              <span className={`${styles.logoTextFallback} ${styles.hidden}`}>
                LocalWebVentures
              </span>
            </Link>
            <span className={styles.copyrightText}>.</span>
          </div>
        </div>
      </div>
    </>
  );
}

