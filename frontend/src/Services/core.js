const API_URL = "http://localhost:5071/api/expense";

const IAPArgs = {
    url: String,
    method: String,
    body: Object,
    headers: Object,
    queryParams: Object,
    baseDomain: String,
    parseJSON: Boolean
  };

async function service(args = IAPArgs) {
  const {
    url,
    method = "GET",
    body = {},
    headers = {},
    
    baseDomain,
    parseJSON = true,
    ...extraProps
  } = args;
  const props = {
    body,
    method,
    headers: {
      "Content-Type": "application/json",
      medium: "platform-web",
      ...headers,
    },
    ...extraProps,
  };
  if (method === "GET") {
    props.body = null;
  }
  if (method !== "GET") {
    props.body = JSON.stringify(body);
  }
  let fetchUrl = `${baseDomain || API_URL}${url}`;
  const data = await fetch(fetchUrl, props);
  // logSuccess(API_URL, JSON.stringify(props));
  if (data.status >= 400) {
    const error = await data.json();
    throw error;
  }
  // logSuccess(API_URL, JSON.stringify(data));
  return parseJSON ? await data.json() : data;
}
export default service;