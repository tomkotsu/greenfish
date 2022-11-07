import { useRouter } from "next/router";

const Fishname = ({ fish }: any) => {
  const fishInfo = fish[0]
  const router = useRouter();
  const { fishname } = router.query;

  return (
    <div>
      <h1>{fishInfo["Species Name"]}</h1>
      <h2>{fishInfo["Scientific Name"]}</h2>
      <img src={fishInfo["Species Illustration Photo"]["src"]}/>
      <div dangerouslySetInnerHTML={{__html: fishInfo["Biology"]}}></div>
      <div dangerouslySetInnerHTML={{__html: fishInfo["Habitat"]}}></div>
      <p>{fishInfo["Habitat Impacts"]}</p>
      <p>{fishInfo["Population"]}</p>
      <p>{fishInfo["Fishing Rate"]}</p>
      <p>{fishInfo["Bycatch"]}</p>
      <div dangerouslySetInnerHTML={{__html: fishInfo["Harvest"]}}></div>

    </div>
  );
};

export async function getStaticProps({ params }: any) {
  const url = "https://www.fishwatch.gov/api/species/" + params.fishname;
  const req = await fetch(url);
  const dataList = await req.json();
  return {
    props: { fish: dataList },
  };
}

export async function getStaticPaths() {
  const req = await fetch(`https://www.fishwatch.gov/api/species`);
  const data = await req.json();
  const paths = data.map((fishy: any) => {
    return { params: { fishname: fishy["Path"].slice(10) } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Fishname;
