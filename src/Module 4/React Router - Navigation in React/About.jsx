import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Outlet />
    </div>
  );
}

export default About;