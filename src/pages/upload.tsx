import React, {FC} from "react";
import Head from "next/head";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import UploadComponent from "@/components/Upload/Upload";

const Upload: FC = () => {
  return <>
    <Head>
      <title>Upload - PetsPaw</title>
    </Head>
    <LayoutPage>
      <UploadComponent/>
    </LayoutPage>
  </>
}

export default Upload;