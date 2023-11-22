"use client";

import { htmlToMarkdown } from "@/app/admin/create/parser";
import Editor from "@/components/Editor";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CreatePostPage() {
  const [value, setValue] = useState("");

  function createNewPost(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const title = formElements.title.value;
    const description = formElements.description.value;
    const slug = formElements.slug.value;
    const featured = formElements.featured.checked;

    axios
      .post("/api/post", {
        content: htmlToMarkdown(value),
        title,
        description,
        slug,
        featured,
      })
      .then(({ data }) => console.log(data));
  }

  return (
    <form onSubmit={createNewPost}>
      <p>
        <input
          type="text"
          autoFocus
          name="title"
          required
          className="border-b border-b-white bg-transparent text-4xl outline-none"
          placeholder="Title"
        />
      </p>
      <p>
        <input
          type="text"
          name="description"
          required
          className="border-b border-b-white bg-transparent text-xl outline-none"
          placeholder="Description"
        />
      </p>
      <p>
        <input
          type="text"
          name="slug"
          required
          className="border-b border-b-white bg-transparent text-sm outline-none"
          placeholder="post-slug"
        />
      </p>
      <p>
        <label htmlFor="featured">Featured?</label>
        <input
          type="checkbox"
          id="featured"
          name="featured"
          className="border-b border-b-white bg-transparent text-sm outline-none"
        />
      </p>
      <Editor value={value} setValue={setValue} />
      <button className="rounded-md bg-white p-4 py-2 font-bold text-black">
        Save
      </button>
    </form>
  );
}
