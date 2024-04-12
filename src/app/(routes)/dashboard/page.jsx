"use client";


import Loading from "@/components/Loading";
import { useAllUserCourse } from "@/hooks/course_hook";
function Dashboard() {
  const { data, isLoading, isError } = useAllUserCourse();

  if (isLoading) {
    return <Loading />;
  }
  return <div>
  wef434g
  </div>;
}

export default Dashboard;
