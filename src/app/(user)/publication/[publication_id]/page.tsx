import { PublicationResponse } from "@/app/api/publication/[publication_id]/route";
import { Publication } from "@/components/Publication";
import { Suspense } from "react";
import styles from './page.module.css';

interface QueryParams {
  params: {
    publication_id: string;
  };
}
export default async function Page({ params }: QueryParams) {
  const resp = await fetch(`/api/publication/${params.publication_id}`, {
    method: "GET",
  });

  console.log(resp);

  const publication = (await resp.json()) as PublicationResponse;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Publication data={publication} />
      </Suspense>
    </>
  );
}
