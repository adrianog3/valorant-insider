import { useRef } from "react";
import { WebView } from "react-native-webview";

const webViewJs = /* javascript */ `
  document.addEventListener("message", function (event) {
    // handle message from React Native application code
  });
`;

export function Login() {
  const webViewRef = useRef<WebView>(null);

  return (
    <WebView
      style={{ marginTop: 55 }}
      ref={webViewRef}
      source={{ uri: "https://account.riotgames.com/" }}
      injectedJavaScript={webViewJs}
      originWhitelist={["*"]}
      onMessage={(event) => console.log(event.nativeEvent.data)}
    />
  );
}
