import { useEffect } from 'react';


/**
 * Adds an external script to the dom from a url.
 *
 * @param {string} scriptUrl The url of script to add to dom.

 * @return {null} Does not return anything.
 */
export const useExternalScript = (scriptUrl: string) => {
  useEffect(() => {
    console.log('external script');

    const script = document.createElement('script');

    script.src = scriptUrl;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      console.log('remove external script');
      document.body.removeChild(script);
    };
  });
};

//////////////////////////

export const useLocalLogicFunctionScript = (widgetTargetId: string, lat: number, lng: number) => {
  useEffect(() => {
    console.log('function script');
    // console.log('widgetTargetId, lat, lng', widgetTargetId, lat, lng);
    const func = document.createElement('script');

    func.innerHTML = `
      function initLocallogic () {
        console.log('widgetTargetId, lat, lng', '${widgetTargetId}', ${lat}, ${lng});
        var widget = new locallogic.LocalContent('${widgetTargetId}', {
          lat: ${lat},
          lng: ${lng},
          locale: 'en',
          designId: 'll-2019',
        });
      };
    `

    document.body.appendChild(func);

    return () => {
      console.log('remove function');
      document.body.removeChild(func);
    };
  }, [lat, lng]);
};
