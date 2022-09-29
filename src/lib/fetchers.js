import {fetchWithXMLHttpRequest} from './fetchWithXML'


export const xmlFetcher = fetchWithXMLHttpRequest;

export const fetchFetcher = (...args) =>
  fetch(...args).then((res) => res.json());


  