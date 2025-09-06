import { useState } from 'react';
import styles from './SignIn.module.css';
import axios from 'axios';
export default function SignIn() {
    const [SignInData, SetSigninData] = useState({ firstName: '', lastName: '', email: '', password: '', address: '', role: '', image: '' });
    const [Loading, SetLoading] = useState(false);
    const [Error, SetError] = useState(null);
    async function Login(e) {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:5000/api/auth/signin',
                {
                    username: SignInData.username,
                    email: SignInData.email,
                    password: SignInData.password,
                }
            );
            console.log(response.data.message, response.data.token);
        } catch (error) {
            SetError(error);
            console.log(error);
        }
    }
    return (
        <div className={styles.LoginPage}>
            <form className={styles.LoginForm} onSubmit={Login}>
                <h1 className={styles.FormTitle}>Login</h1>
                <div className={styles.InputForm}>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        required
                        onChange={(e) =>
                            SetLoginData((prev) => ({ ...prev, Email: e.target.value }))
                        }
                    />
                </div>
                <div className={styles.InputForm}>
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        required
                        onChange={(e) =>
                            SetLoginData((prev) => ({ ...prev, Password: e.target.value }))
                        }
                    />
                </div>
                <div className={styles.InputForm}>
                    <button>Login</button>
                    <p>don't have account?create</p>
                </div>
            </form>
        </div>
    )
}