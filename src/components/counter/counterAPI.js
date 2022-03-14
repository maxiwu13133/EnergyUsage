// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function getUser(username, password) {
  return (

                  // QUERY USER DATA
                  /**
                   * @params username, password
                   * Return a user's data.
                   * @returns - components of Profile Page.
                   */
                   async () => {
                    let response = await fetch(
                      `http://mincasa.khademsam.com/API/v1/login/${username}/${password}`
                    );
                    let textResponse = await response.text();
                    try {
                      return JSON.parse(textResponse);
                      // let userSproutsResponse = await fetch(`http://localhost:3001/sprouts/${user.userId}`)
}catch {
  throw Error("Incorrect username or password.");
}})}
