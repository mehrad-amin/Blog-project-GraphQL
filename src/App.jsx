import { Route, Routes } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Layout from "./components/Layouts/Layout";
import Home from "./home/Home";
import BlogPage from "./components/Blogs/BlogPage";
import AuthorPage from "./components/authors/AuthorPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
