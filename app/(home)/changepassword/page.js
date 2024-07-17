'use client';
import ChangePassword from "@/components/users/ChangePassword";
import { Report } from "notiflix";
import { useRouter } from "next/navigation";
import authApi from "@/api/authApi";

const ChangepasswordComponent = () => {
  const router = useRouter();

  const onSubmit = (formData) => {
    authApi.changePassword({
      currentPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    })
    .then(() => {
      Report.success("Thành công!", "Đã đổi mật khẩu thành công", "OK", () => {
        router.push('/profile');
      });
    })
    .catch((error) => {
      Report.failure("Thất bại!", error.response?.data?.message || "Có lỗi xảy ra.", "OK");
    });
  };

  return <ChangePassword onSubmit={onSubmit} />;
};

export default ChangepasswordComponent;
