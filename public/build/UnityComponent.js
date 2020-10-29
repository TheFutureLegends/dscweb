import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
 

const unityContext = new UnityContext({
  loaderUrl: "/Build/BuildUnity.loader.js",
  dataUrl: "/Build/BuildUnity.data.br",
  frameworkUrl: "/Build/BuildUnity.framework.js.br",
  codeUrl: "/Build/BuildUnity.wasm.br",
});

class Game extends React.Component {
    render() {
      return [

        <h1 key={"1"}>Hello </h1>,
        <Unity key={"2"} unityContext={unityContext} />

      ]
    }
  }

export default Game;