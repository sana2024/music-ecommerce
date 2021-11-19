import React from "react";
import {useGetCategoriesQuery} from "../services/productApi"
import SearchBar from "../components/search"; 
 
export default function Home() {
  return <>
  <h1>Search for Artist, Album and music</h1>
  <SearchBar />
  </>
};
