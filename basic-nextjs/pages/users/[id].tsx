import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  users: User;
}

export default function UserDetails(props: UserDetailProps) {
  const router = useRouter();
  // const { id } = router.query;
  const users = props.users;

  return (
    <Layout pageTittle="User Detail">
      <p>{users.name}</p>
      <p>{users.email}</p>
      <p>{users.phone}</p>
      <p>{users.website}</p>
    </Layout>
  );
}

export async function getStaticPaths(context: any) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
