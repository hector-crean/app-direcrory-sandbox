import { PublicationResponse } from "@/app/api/publication/[publication_id]/route";

interface PublicationProps {
  data: PublicationResponse;
}

const Publication = ({ data }: PublicationProps) => {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export { Publication };
