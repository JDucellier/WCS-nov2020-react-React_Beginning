import { useQuery, gql } from '@apollo/client';
import React from 'react';
import './style.css';

// Call Query that's return 5 lauches with some filter
const FETCH_LAUNCHES = gql`
  query GetLauches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

//Create an interface to get a definition of each variables
interface LaunchesProps  {
  launch_date_utc: Date,
  launch_success : boolean,
  rocket : {
    rocket_name : string
  },
  links : {
    video_link : string
  },
  details : string
}

function LaunchesTable() {
  const { loading, error, data } = useQuery(FETCH_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(({ launch_date_utc, launch_success, rocket, links, details } : LaunchesProps) => (
    <div className="card"> 
      <h2 className="name">{ rocket.rocket_name }</h2>
      <div className="cardBody">
        <iframe className="video" title="Video" width="560" height="315" src={"https://www.youtube.com/embed/" + links.video_link?.substring(32, links.video_link?.length)} frameBorder="0" allowFullScreen></iframe>
        <div className="information">
          <h3>Launch date : </h3>
          <p className="date">{ launch_date_utc } </p>
          <h3 className="success"> {launch_success ? "This mission was a success":"This mission was a failure"} </h3>
          <h3>Details : </h3>
          <p className="details">{ details ? details : 'No details yet' }</p>
        </div>

      </div>

    </div>
  ));
}


export default LaunchesTable;