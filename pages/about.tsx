import type {NextPage} from 'next'
import styles from './../styles/About.module.css';

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>테스트 페이지입니다.</h1>
            <h2>Next JS 라우팅 체크</h2>
        </div>
    )
}

export default About
