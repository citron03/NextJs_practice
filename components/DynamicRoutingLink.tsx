import React from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css'

interface DynamicRoutingLinkProps {
    page: number;
}

const DynamicRoutingLink: React.FC<DynamicRoutingLinkProps> = ({ page }) => {
    const rink = `/dynamic/${page}`
  return (
    <div className={styles.dynamicLink}>
          <Link href={ rink } as={ rink }>
              <a>동적 라우팅 { page }번</a>
        </Link>
    </div>
  );
};

export default DynamicRoutingLink;