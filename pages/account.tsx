import { userStateContext } from "@/context/context-provider"
import { useRouter } from 'next/router';

export default function Account() {
  const router = useRouter();
  const { currentUser } = userStateContext();
  if (currentUser == undefined) {
    router.push('/');
  }
  return (
    
      <>
      {currentUser && (
        <>HELLO {currentUser.name}!<br/>
        YOUR PERSONAL ACCOUNT
        </>
      )}
      </> 
  )
}
