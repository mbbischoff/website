export const findAndRunScriptTags = (element) => {
  const scriptTags = element.querySelectorAll("script");

  scriptTags.forEach((scriptTag) => {
    const originalUrl = scriptTag.src;

    parseResponseAndEval(fetch(originalUrl)).catch(() => {
      // https://github.com/Rob--W/cors-anywhere
      const reverseProxyUrl = `https://cors-anywhere.herokuapp.com/${scriptTag.src}`;

      parseResponseAndEval(fetch(reverseProxyUrl));
    })
  });
}

const parseResponseAndEval = (request) => {
  return request.then(response => response.text()).then(js => eval(js))
}