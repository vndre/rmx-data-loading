import { useLoaderData } from "remix"

export const loader = async () => {
  // this request always takes 5 secs to resolve
  const res = await fetch('https://saduifgioa.free.beeceptor.com')
  return res.json()
}

export default function Index() {
  const data = useLoaderData()
  console.log("🚀 ~ file: index.server.jsx ~ line 11 ~ Index ~ data", data)
  
  return (
    <div>
      <h1>transition</h1>
    </div>
  )
}
