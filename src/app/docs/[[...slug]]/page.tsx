import { NextPage } from "next";

interface Props {
  params: {
    slug: string[];
  };
}

const Docs: NextPage<Props> = ({ params }) => {
  if (params.slug?.length === 2) {
    return (
      <div>
        <h1>
          viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      </div>
    );
  } else if(params.slug?.length === 1){
    return(
      <div>
        <h1>
          viewing docs for feature {params.slug[0]} 
        </h1>
      </div>
    )
  }
  return (
    <div>
      <h1>docs home page view</h1>
    </div>
  );
};

export default Docs;
