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
      document.body.removeChild(script);
    };
  }, [scriptUrl]);
};

//////////////////////////

export const useLocalLogicFunctionScript = (widgetTargetId: string, lat: number, lng: number) => {
  // console.log('blehhhg');
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
      console.log('func remove');
      document.body.removeChild(func);
    };
  }, [lat, lng]);
};
