import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
}
