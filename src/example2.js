import * as fs from "fs";
import * as path from "path";
import pkg from "lodash";
const { merge: _merge } = pkg;
import { fetchDocuments } from "../hfla-utils/utils/getGdocsTokenAndFetch/src/google-docs.js";
import {
  convertGDoc2ElementsObj,
  convertElements2MD,
  formatHeading2MarkdownSection,
} from "../hfla-utils/utils/gdocs2md/src/convert.js";
// import { getGatsbyFrontMatter } from "../hfla-utils/utils/gdocs2md/src/gdocs2md-gatsby.js";
import { DEFAULT_OPTIONS } from "./constants.js";
const pluginOptions = { folder: "1R2fYUh2EwbLot9Akm311Osxpl7WbvEvM" };
const options = _merge({}, DEFAULT_OPTIONS, pluginOptions);

const googleDocuments = await fetchDocuments(options);

googleDocuments.forEach(async (loopGoogleDocument) => {
  const googleDocument = await convertGDoc2ElementsObj({
    ...loopGoogleDocument,
  });
  const markdownBody = await convertElements2MD(googleDocument.elements);
  // const frontMatter = getGatsbyFrontMatter(googleDocument);
  const frontMatter = "";
  let markdown = `${frontMatter}${markdownBody}`;
  markdown = formatHeading2MarkdownSection(markdown);
  const { properties } = googleDocument;
  fs.writeFileSync(
    path.join(
      options.target,
      `${properties.path ? properties.path : "index"}-gdocs.md`
    ),
    markdown
  );
});
