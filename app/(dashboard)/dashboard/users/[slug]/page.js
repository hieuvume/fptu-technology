'use client'
import userApi from "@/api/userApi"
import UserEditor from "@/components/users/UserEditor"
import { Report } from "notiflix"
import useSWR from "swr"

const UserEditPage = ({ params: { slug } }) => {
  const { data, isLoading } = useSWR(`/users/${slug}`, () => userApi.getById(slug))

  const onSubmit = (values) => {
    userApi.update({ id: data._id, ...values }).then(() => {
      Report.success("Successfully!", "User updated successfully", "OK")
    }).catch((error) => {
      Report.failure("Failed!", error.message, "OK")
    })
  }

  return (
    <div className="container mt-4">
      <h4>Edit User {slug}</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UserEditor user={data} onSubmit={onSubmit} />
      )}
    </div>
  )
}

export default UserEditPage