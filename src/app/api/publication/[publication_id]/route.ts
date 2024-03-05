import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

type PublicationResponse = {
  name: string
}

type QueryParams = {
  params: {
    publication_id: string
  }
}
export async function GET(
  req: NextApiRequest,
  // res: NextApiResponse<MyData>,
  { params }: QueryParams
) {


  return new NextResponse<PublicationResponse>(JSON.stringify({ name: params.publication_id }), {
    status: 200,
  });
}

export type { PublicationResponse }

