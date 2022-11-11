import Layout from "../components/Layout/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlogs: Post[];
}

export default function Blog(props: BlogProps) {
  const dataBlog = props.dataBlogs;
  console.log(dataBlog);

  return (
    <Layout pageTittle="Blog">
      <div>
        {dataBlog &&
          dataBlog.map((blog) => (
            <div
              key={blog.id}
              style={{ padding: 20, borderBottom: "1px solid #ccc" }}
            >
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlogs = await res.json();

  return {
    props: {
      dataBlogs,
    },
  };
}
