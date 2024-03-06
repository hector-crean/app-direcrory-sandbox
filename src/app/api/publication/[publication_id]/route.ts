import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';


export async function GET(
  req: NextRequest,
 {params}: GetPublicationQueryParams
): Promise<NextResponse<PublicationResponse>> {

    const publicationResponse: PublicationResponse = PublicationResponseSchema.parse({
      name: params.publication_id,
    });

    return NextResponse.json(publicationResponse)
  
}

/// types / schemas
const PublicationResponseSchema = z.object({
  name: z.string(),
});

type PublicationResponse = z.infer<typeof PublicationResponseSchema>;


const GetPublicationQueryParamsSchema = z.object({
  params: z.object({
    publication_id: z.string(),
  }),
});


type GetPublicationQueryParams = z.infer<typeof GetPublicationQueryParamsSchema>;

export { GetPublicationQueryParamsSchema, PublicationResponseSchema };
export type { GetPublicationQueryParams, PublicationResponse };

