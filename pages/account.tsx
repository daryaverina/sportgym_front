import { userStateContext } from "@/context/context-provider"

export default function Account() {
  const { currentUser } = userStateContext();
  console.log(currentUser)
  return (
      <>
        HELLO {currentUser.name}!<br/>
        YOUR PERSONAL ACCOUNT
      </> 
  )
}
