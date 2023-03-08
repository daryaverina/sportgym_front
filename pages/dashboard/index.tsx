import { userStateContext } from "@/context/context-provider";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

export default function Dashboard() {
  // const { currentUser } = userStateContext();
  // console.log(currentUser)
  // const router = useRouter()
  // useEffect(() => {
  //   if (currentUser && currentUser.account_type != 'm') {
  //     router.push('/')
  //   }
  // }, [currentUser])

  return (
    <>
      users -
      <Link
        href="/dashboard/users"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        list of users
      </Link>
      <br/>
      clubs -
      <Link
        href="/dashboard/clubs"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        list of clubs
      </Link>
    </>
  );
}
