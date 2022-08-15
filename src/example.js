import pkg from "../hfla-utils/utils/gdocs2md/src/source-gdocs2md.js";
import { Reporter } from "./Reporter.js";
const { sourceGDocs2MD } = pkg;

const reporter = new Reporter();
const pluginOptions = { folder: "1R2fYUh2EwbLot9Akm311Osxpl7WbvEvM" };

sourceGDocs2MD({ actions: { reporter } }, pluginOptions);
