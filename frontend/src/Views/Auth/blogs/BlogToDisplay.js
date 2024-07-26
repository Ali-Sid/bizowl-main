import NotFound from "../NotFound";
import SpecificBlog2 from "./SpecificBlog2";
import SpecificBlogs from "./SpecificBlogs";

const blogComponents = {
  1: SpecificBlogs,
  2: SpecificBlog2,
  // Add more blog IDs and components as needed
};

const BlogToDisplay = ({ blogId }) => {
  const BlogComponent = blogComponents[blogId];
  if (!BlogComponent) {
    return <NotFound />;
  }
  return <BlogComponent />;
};

export default BlogToDisplay;
