import type { GetStaticProps, NextPage } from 'next';

interface IProps {
  post: {
    id: number;
  };
}

const Post: NextPage<IProps> = ({ post }) => {
  return (
    <div>
      <p>{post.id}</p>
    </div>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: { post: { id: params?.id } },
  };
};

export default Post;