import fs from "fs";
import Link from 'next/link';

const getPostMetadata = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    // eslint-disable-next-line react/jsx-key
    <div>
      <Link href={`/posts/home/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return <div>{postPreviews}</div>
};

export default HomePage;

