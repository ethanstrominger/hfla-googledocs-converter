// import * as fs from "fs";
// import * as path from "path";
// import pkg from "lodash";
// const { merge: _merge } = pkg;
// import { fetchDocuments } from "../hfla-utils/utils/getGdocsTokenAndFetch/src/google-docs.js";
// import {
//   convertGDoc2ElementsObj,
//   convertElements2MD,
// } from "../hfla-utils/utils/gdocs2md/src/convert.js";
// TODO: provide example script that uses this?
// import { getFrontMatterFromGdoc } from "../hfla-utils/utils/gdocs2md/src/utils.js";
// import { jekyllifyFrontMatter } from "../hfla-utils/utils/gdocs2md/src/utils.js";
// import { DEFAULT_OPTIONS } from "./constants.js";
import { jekyllifyDocs } from "../hfla-utils/utils/gdocs2md/src/jekyllUtils.js";
// const pkg = require("lodash");
// import { merge as _merge } from "lodash";

const pluginOptions = { folder: "1R2fYUh2EwbLot9Akm311Osxpl7WbvEvM" };

jekyllifyDocs(pluginOptions);

const fake = async () => {};

export default fake;
