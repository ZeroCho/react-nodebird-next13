"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";
import React from "react";

function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default Hydrate;
