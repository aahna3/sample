const rootAddress = window.location.protocol + '//' + window.location.host + '/';

export default async function get(URI) {
  
        const response = await fetch(`${URI}`);
    if(response.status === 401) {
        console.log("error");
    //   reduxStore.dispatch(signOutUser())
    }
    const result = {
      status: response.status,
      body: await response.json(),
    };
    return (result);
  }