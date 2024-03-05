interface PublicationProps {
  name: string;
}

const Publication = (props: PublicationProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export { Publication };
