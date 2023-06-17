import React, { useState, useEffect } from "react"
import useSWR from 'swr';
import Pagination from 'react-bootstrap/Pagination'
import Accordion from 'react-bootstrap/Accordion';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  let [ page, setPage ] = useState(1);
  let [ pageData, setPageData ] = useState([]);

  const { data, error } = useSWR(`https://elated-capris-moth.cyclic.app//api/movies?page=${page}&perPage=10`);

  useEffect(() => {
  if (data) {
  setPageData(data);
  }
  }, [data]);

  const previous = () => {
    (page > 1) && setPage(--page);
  }

  const next = () => {
    setPage(++page);
  }

  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date" />
      <Accordion defaultActiveKey={0}>
        {
          pageData.map((movie, i) => ( 
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header><strong>{movie.title}</strong><pre/>({movie.year}: Directed By {movie.directors.join(",")})</Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie}/>
            </Accordion.Body>
          </Accordion.Item>
          ))
        }
      </Accordion>
      <br/>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  )
}