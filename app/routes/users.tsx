import { LoaderArgs } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { client } from "~/db/client.server"
import { users } from "~/db/schema"

export const loader = async ({ context }: LoaderArgs) => {
  const allUsers = await client(context.DB).select().from(users).all()

  return {
    users: allUsers
  }
}

const Users = () => {
  const { users } = useLoaderData() as unknown as ReturnType<typeof loader> extends Promise<infer T> ? T : never

  return (
    <>
      <div>user count: {users.length}</div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}({user.email})</li>)}
      </ul>
    </>
  )
}

export default Users
