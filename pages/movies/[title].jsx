import { useRouter } from "next/router";
import useSWR from "swr";
import MovieDetails from "@/components/MovieDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Movie() {
  const router = useRouter();
  const { title } = router.query;
  const { data } = useSWR(
    `https://elated-capris-moth.cyclic.app/api/movies?page=1&perPage=10&title=${title}`
  );

  if (!data) {
    return null;
  }
  if (data.length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      {data.map((movie) => (
        <div key={movie._id}>
          <PageHeader text={movie.title} />
          <MovieDetails movie={movie} />
        </div>
      ))}
    </div>
  );
}
