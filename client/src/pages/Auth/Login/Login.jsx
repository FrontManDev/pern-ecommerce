import styles from './Login.module.css';
export default function Login() {
    return (
        <div className={styles.LoginPage}>
            <form className={styles.LoginForm}>
                <h1 className={styles.FormTitle}>Login</h1>
                <div className={styles.InputForm}>
                    <label htmlFor="">Email</label>
                    <input type="email" required />
                </div>
                <div className={styles.InputForm}>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <div className={styles.InputForm}>
                    <button>Login</button>
                    <p>don't have account?create</p>
                </div>
            </form>
        </div>
    )
}