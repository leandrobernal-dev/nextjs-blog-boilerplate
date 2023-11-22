import { TOOLBAR_OPTIONS, formats, modules } from "@/app/admin/create/options";
import { htmlToMarkdown } from "@/app/admin/create/parser";
import { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";

import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
Quill.register("modules/emoji", Emoji);

export default function Editor({ value, setValue }) {
  return (
    <div className="mb-8 flex py-8">
      <ReactQuill
        modules={{
          toolbar: {
            container: TOOLBAR_OPTIONS,
          },
        }}
        formats={formats}
        placeholder="write your content ...."
        value={value}
        onChange={setValue}
        className="min-h-[400px] w-full"
      />
    </div>
  );
}
