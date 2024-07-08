"use client";
import applicationApi from "@/api/applicationApi";
import { useRouter } from "next/navigation";
import { Report } from "notiflix";
import { useState } from "react";

const ApplicationEditor = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleApprove = () => {
    setLoading(true);
    applicationApi
      .approve(data._id)
      .then(() => {
        Report.success(
          "Sucessfully!!",
          "Approve application successfully",
          "OK",
          () => {
            router.push("/dashboard/applications");
          }
        );
      })
      .catch((error) => {
        Report.failure("Failed!!", error.message, "OK", () => {
          router.push("/dashboard/applications");
        });
      })
      .finally(() => setLoading(false));
  };

  const handleReject = () => {
    setLoading(true);
    applicationApi
      .reject(data._id)
      .then(() => {
        Report.success(
          "Sucessfully!!",
          "Reject application successfully",
          "OK",
          () => {
            router.push("/dashboard/applications");
          }
        );
      })
      .catch((error) => {
        Report.failure("Failed!!", error.message, "OK", () => {
          router.push("/dashboard/applications");
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="form-group">
        <label>Specialty</label>
        <input
          type="text"
          className="form-control"
          value={data.specialty}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Experience</label>
        <input
          type="text"
          className="form-control"
          value={data.experience}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Example</label>
        <input
          type="text"
          className="form-control"
          value={data.example}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          value={data.description}
          disabled
        ></textarea>
      </div>
      <div className="form-group">
        <label>Social links</label>
        <input
          type="text"
          className="form-control"
          value={data.social_links}
          disabled
        />
      </div>

      <div className="form-group">
        <button
          type="button"
          className="btn btn-sm btn-warning mr-2"
          style={{ background: "#0dde53" }}
          onClick={handleApprove}
          disabled={loading}
        >
          Approve
        </button>
        <button
          type="button"
          className="btn btn-sm btn-warning"
          onClick={handleReject}
          disabled={loading}
        >
          Reject
        </button>
      </div>
    </>
  );
};

export default ApplicationEditor;
