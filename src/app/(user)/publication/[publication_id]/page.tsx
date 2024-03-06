
import { GetPublicationQueryParams, PublicationResponseSchema } from '@/app/api/publication/[publication_id]/route';
import { Publication } from "@/components/Publication";
import { Suspense } from "react";
import styles from './page.module.css';



async function Page({ params }: GetPublicationQueryParams) {

  const ENDPOINT = `${process.env.NEXT_API_BASE}/api/publication/${params.publication_id}`

  const resp = await fetch(ENDPOINT, {
    method: "GET",
  });
  const body = await resp.json()
  const publication = PublicationResponseSchema.parse(body)


  return (


    <main className={styles.main}>
      <div className={styles.center}>
        <Suspense fallback={<div>Loading...</div>}>
          <Publication data={publication} />
        </Suspense>
      </div>


    </main>


  );

}


export default Page;