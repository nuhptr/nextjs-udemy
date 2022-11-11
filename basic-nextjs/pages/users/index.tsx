import { useRouter } from "next/router";

import Layout from "../../components/Layout/Layout";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const dataUsers = props.dataUsers;
  const router = useRouter();

  console.log(dataUsers);

  return (
    <Layout pageTittle="Users">
      <div>
        {dataUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            style={{ padding: 20, borderBottom: "1px solid #ccc" }}
          >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}
