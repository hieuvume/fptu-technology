'use client'
import userApi from "@/api/userApi";
import UserEditor from "@/components/users/UserEditor";
import { useRouter } from "next/navigation";
import { Report } from "notiflix";

const CreateUserPage = () => {
  const router = useRouter()
  const onSubmit = (values) => {
    userApi.create(values).then(() => {
      Report.success("Successfully!", "Create user successfully", "OK", () => {
        router.push("/dashboard/users")
      })
    }).catch((error) => {
      Report.failure("Failed!", error.message, "OK")
    })
  }

  return (
    <div className="container mt-4">
      <h4>Create User</h4>
      <UserEditor user={undefined} onSubmit={onSubmit} />
    </div>
  );
}

export default CreateUserPage