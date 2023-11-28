"use client";

import { React, useEffect, useState } from "react";

export default function GetRoute() {
  const [time, setTime] = useState(0);
  const fromWaypoint = [-23.552960,-46.686490]; // latutude, longitude - "Rua Simpatia, 400";
  const toWaypoint = [-23.547910,-46.685830]; // latitude, longitude - "Rua Heitor Penteado, 774";

  let url = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(",")}|${toWaypoint.join(",")}&mode=drive&details=instruction_details&apiKey=${process.env.GEO_API_KEY}`;

  fetch(url)
  .then(res => res.json())
  .then(result => {
      console.log(result);
      setTime(Math.floor(result.features[0].properties.time / 60));
  }, error => console.log(err));

  return (
    <span>
      {time} minutos
    </span>
  );

}