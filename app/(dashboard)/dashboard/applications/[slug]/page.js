'use client'
import applicationApi from "@/api/applicationApi"
import ApplicationEditor from "@/components/application/ApplicationEditor"
import useSWR from "swr"

const ApplicationEditPage = ({ params: { slug } }) => {
  const { data, isLoading } = useSWR(`/application/${slug}`, () => applicationApi.getById(slug))

  return (
    <div className="container mt-4">
      <h4>View Application {slug}</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ApplicationEditor data={data}/>
      )}
    </div>
  )
}

export default ApplicationEditPage