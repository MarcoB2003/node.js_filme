import './index.scss';

export default function Login() {
    return (
        <div className="admin-login-container">
            <div className="admin-login-box">
                <h2>Login-Admin</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="login">Login: </label>
                        <input type="text" id="login" name="login" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha: </label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    );
}
