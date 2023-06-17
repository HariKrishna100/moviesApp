/*********************************************************************************
 * WEB422 – Assignment 3
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Harikrishna Paresh Patel Student ID: 150739217 Date: 06/14/2023
 *
 *
 ********************************************************************************/

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Pagination from "react-bootstrap/Pagination";
import Accordion from "react-bootstrap/Accordion";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  let [page, setPage] = useState(1);
  let [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(
    `https://elated-capris-moth.cyclic.app//api/movies?page=${page}&perPage=10`
  );

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    page > 1 && setPage(--page);
  };

  const next = () => {
    setPage(++page);
  };

  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date" />
      <Accordion defaultActiveKey={0}>
        {pageData.map((movie) => (
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
              <strong>{movie.title}</strong>
              <pre />({movie.year}: Directed By {movie.directors.join(",")})
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <br />
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
