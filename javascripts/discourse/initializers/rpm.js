import { withPluginApi } from "discourse/lib/plugin-api";
import rpm from "../lib/rpm-highlightjs";

export default {
  name: "highlightjs-rpm",
  initialize(container) {
    withPluginApi("1.4.0", (api) => {
      api.registerHighlightJSLanguage("rpm-specfile", rpm);
    });
  },
};
