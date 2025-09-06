import { useState } from 'react';
import styles from './SignIn.module.css';
import axios from 'axios';
export default function SignIn() {
    const [SignInData, SetSigninData] = useState({ username: '', email: '', password: '', conffirm_password: '' });
    const [Loading, SetLoading] = useState(false);
    const [Error, SetError] = useState(null);
    async function SignIn(e) {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:5000/api/auth/Signup',
                {
                    username: SignInData.username,
                    email: SignInData.email,
                    password: SignInData.password,
                    conffirm_password: SignInData.conffirm_password
                }
            );
            console.log(response.data.message, response.data.token);
        } catch (error) {
            SetError(error);
            console.log(error);
        }
    }
    return (
        <div className={styles.SignInPage}>
            <form className={styles.SignInForm} onSubmit={SignIn}>
                <h1 className={styles.FormTitle}>SignIn</h1>
                <div className={styles.InputForm}>
                    <label htmlFor="">Usename</label>
                    <input
                        type="text"
                        required
                        onChange={(e) =>
                            SetSigninData((prev) => ({ ...prev, username: e.target.value }))
                        }
                    />
                </div>
                <div className={styles.InputForm}>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        required
                        onChange={(e) =>
                            SetSigninData((prev) => ({ ...prev, email: e.target.value }))
                        }
                    />
                </div>
                <div className={styles.InputForm}>
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        required
                        onChange={(e) =>
                            SetSigninData((prev) => ({ ...prev, password: e.target.value }))
                        }
                    />
                </div>
                <div className={styles.InputForm}>
                    <label htmlFor="">Confirm_Password</label>
                    <input
                        type="password"
                        required
                        onChange={(e) =>
                            SetSigninData((prev) => ({ ...prev, conffirm_password: e.target.value }))
                        }
                    />
                </div>
                <div className={styles.InputForm}>
                    <button>Login</button>
                    <p>you have account?Login</p>
                </div>
            </form>
        </div>
    )
}