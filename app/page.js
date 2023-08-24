import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Hello CladeFire!</h1>
      <Link href={"/sign-in"}>
        <Button>Sign in</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button>Sign up</Button>
      </Link>
    </>
  );
}
