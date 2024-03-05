import { Publication } from "@/components/Publication";
import type { Metadata } from "next";
import { Suspense } from "react";

type PublicationPayload = {
  name: string;
};
async function getPublication(
  publicationId: string
): Promise<PublicationPayload> {
  return {
    name: `Name for ${publicationId}`,
  };
}

async function getPublications(): Promise<PublicationPayload[]> {
  return [
    {
      name: `Placeholder`,
    },
    {
      name: `Placeholder`,
    },
  ];
}

interface QueryParams {
  params: {
    publication_id: string;
  };
}
export default async function Page({ params }: QueryParams) {
  const payload = await getPublication(params.publication_id);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Publication {...payload} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const res = await getPublications();

  return res.map((publication) => ({
    slug: publication.name,
  }));
}

export async function generateMetadata({
  params,
}: QueryParams): Promise<Metadata> {
  const publication = await getPublication(params.publication_id);

  return {
    title: `${publication.name} | Next.js`,
    description: `${publication.name} | Next.js`,
    openGraph: {
      title: `${publication.name} | Next.js`,
      description: `${publication.name} | Next.js`,
    },
  };
}
