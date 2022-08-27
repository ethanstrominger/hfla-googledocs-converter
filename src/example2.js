import * as fs from "fs";
import * as path from "path";
import pkg from "lodash";
const { merge: _merge } = pkg;
import { fetchDocuments } from "../hfla-utils/utils/getGdocsTokenAndFetch/src/google-docs.js";
import {
  convertGDoc2ElementsObj,
  convertElements2MD,
  formatHeading2MarkdownSection,
  addHeading2MarkdownAnchor,
} from "../hfla-utils/utils/gdocs2md/src/convert.js";
// TODO: provide example script that uses this?
// import { getFrontMatterFromGdoc } from "../hfla-utils/utils/gdocs2md/src/utils.js";
import { jekyllifyFrontMatter } from "../hfla-utils/utils/gdocs2md/src/utils.js";
import { DEFAULT_OPTIONS } from "./constants.js";
const pluginOptions = { folder: "1R2fYUh2EwbLot9Akm311Osxpl7WbvEvM" };
const options = _merge({}, DEFAULT_OPTIONS, pluginOptions);

const googleDocuments = await fetchDocuments(options);

googleDocuments.forEach(async (loopGoogleDocument) => {
  const googleDocument = await convertGDoc2ElementsObj({
    ...loopGoogleDocument,
  });
  let markdown = await convertElements2MD(googleDocument.elements);
  // const frontMatter = getFrontMatterFromGdoc(googleDocument);
  // markdown = getFrontMatterFromGdoc(googleDocument, markdown);
  markdown = jekyllifyFrontMatter(googleDocument, markdown);
  markdown = formatHeading2MarkdownSection(markdown);
  markdown = addHeading2MarkdownAnchor(markdown);
  const { properties } = googleDocument;
  const file = path.join(
    options.target,
    `${properties.path ? properties.path : "index"}-gdocs.md`
  );
  const dir = path.dirname(file);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(
      options.target,
      `${properties.path ? properties.path : "index"}-gdocs.md`
    ),
    markdown
  );
});
