import pkg from "../hfla-utils/utils/gdocs2md/src/gdrive2md.js";
import { Reporter } from "./Reporter.js";
const { gdrive2md } = pkg;

const reporter = new Reporter();
const pluginOptions = { folder: "1R2fYUh2EwbLot9Akm311Osxpl7WbvEvM" };

gdrive2md({ actions: { reporter } }, pluginOptions);
