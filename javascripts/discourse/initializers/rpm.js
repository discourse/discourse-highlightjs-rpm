import { withPluginApi } from "discourse/lib/plugin-api";
import rpm from "../lib/rpm-highlightjs";

export default {
  name: "highlightjs-rpm",
  initialize() {
    withPluginApi((api) => {
      api.registerHighlightJSLanguage("rpm-specfile", rpm);
    });
  },
};
