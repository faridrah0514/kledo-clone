
import React from "react";
import DefaultLayout from "../components/default_layout/DefaultLayout";
import { useRouter, usePathname } from "next/navigation";

function page() {
  return (
    <DefaultLayout>
      <div> Hai </div>
    </DefaultLayout>
  );
}

export default page;
