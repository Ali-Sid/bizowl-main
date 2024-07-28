import { useParams } from 'react-router-dom';
import SpecificBlogs from "./SpecificBlogs";
import SpecificBlog2 from "./SpecificBlog2";

const BlogToDisplay = () => {
  const { type } = useParams();

  if (type === 'pr') {
    return <SpecificBlog2 />;
  } else {
    return <SpecificBlogs />;
  }
};

export default BlogToDisplay;