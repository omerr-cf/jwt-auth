import { useAuthForm } from "../hooks/useAuthForm";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { email, password, setEmail, setPassword, handleUseAuth } =
    useAuthForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUseAuth("login");
  };
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <p>Dont have an account yet?</p>
      <Link to="/signup">sign up</Link>
    </div>
  );
};
