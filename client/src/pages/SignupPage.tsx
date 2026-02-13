import { Link } from "react-router-dom";
import { useAuthForm } from "../hooks/useAuthForm";

export const SignupPage = () => {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleUseAuth,
  } = useAuthForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUseAuth("signup");
  };
  return (
    <div>
      <h1>Signup</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          name="name"
          type="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
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
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">login</Link>
    </div>
  );
};
