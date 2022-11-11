import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <div>
      <p>Not Found Page</p>
    </div>
  );
}
