import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../constants";
import { useUserQuery } from "../query/useUserQuery";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useUserQuery();

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  };

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (isError) {
    return (
      <div>
        <h1>Profile</h1>
        <p>Could not load your user.</p>
        <p>{error instanceof Error ? error.message : "Unknown error"}</p>
        <button onClick={() => refetch()}>Retry</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user?.name}</p>
      <p>Email: {user?.email}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing..." : "Refresh user"}
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
