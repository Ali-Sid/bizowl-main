import { useParams } from 'react-router-dom';
import SpecificBlogs from "./SpecificBlogs";
import SpecificBlog2 from "./SpecificBlog2";
import SpecificBlog3 from './SpecificBlog3';

const BlogToDisplay = () => {
  const { type, id } = useParams();

  if (type === 'pr' && id === 'best-press-release-distribution-services') {
    return <SpecificBlog3 />;
  } else if(type === 'pr') {
    return <SpecificBlog2 />
  } 
  else {
    return <SpecificBlogs />;
  }
};

export default BlogToDisplay;