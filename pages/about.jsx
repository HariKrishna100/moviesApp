import React from 'react';
import Link from 'next/link';
import Card from "react-bootstrap/Card";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps() {
    return new Promise((resolve, reject) => {
        // Call an external API endpoint to get posts
        fetch("https://elated-capris-moth.cyclic.app//api/movies/573a139af29313caabcf0859")
            .then(res => res.json())
            .then(data => {
                resolve({ props: { staticPost: data } })
            })
            .catch(err => {
                reject(err);
            })
    })
}

export default function About({ staticPost }) {
    return (
        <>
            <PageHeader text="About the Developer: Harikrishna" />
            <Card>
                <Card.Body>
                    
                        I am Harikrishna persuing Computer programming course at Seneca College and I am an entry-level Software
                        engineer with a strong background in computer science and a passion for creating innovative and efficient
                        software. I have experience in a wide range of programming languages including C++, Java, Python, and JavaScript. My
                        education and coursework in Data structures, Algorithm design, software engineering, and database systems have
                        prepared me to tackle any challenge.
                    
                    
                        I am open to connecting with other professionals in the field, so feel free to reach out if you would
                        like to connect or discuss potential opportunities.

                        It's difficult to choose a favourite, but  

                    <Link href="/movies/Dark City" legacyBehavior>
                        <a>&quot;Dark City&quot;</a>
                    </Link>{' '}
                    (released in 1998) is one that i always enjoy watching.<br /><br />
                </Card.Body>
                <MovieDetails movie={ staticPost } />
            </Card>
        </>
    )
}