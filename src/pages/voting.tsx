import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import VotingBlock from "@/components/VotingBlock/VotingBlock";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import Head from "next/head";
import { FC } from "react";

const Voting: FC = () => {
  return (
    <>
      <Head>
        <title>Voting - PetsPaw</title>
      </Head>
      <LayoutPage>
        <LayoutPageContent>
          <VotingBlock />
        </LayoutPageContent>
      </LayoutPage>
    </>
  );
};

export default withAuthorizedRoute(Voting);
