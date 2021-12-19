import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hello, World!</h1>
      <Link to="/posts">Posts</Link>
    </div>
  );
}
