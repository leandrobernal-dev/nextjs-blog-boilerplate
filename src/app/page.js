import Link from "next/link";

import { SOCIALS } from "@/config/config";

import Posts from "@/components/Posts";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 py-2">
        <h1 className="text-4xl font-bold">Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eveniet
          libero fuga dolores, deserunt optio modi, exercitationem veniam
          ducimus voluptas reprehenderit quod fugit laborum reiciendis? Eius
          consequatur impedit dicta facilis molestias, maxime at, eligendi
          deleniti temporibus dolore veritatis, nostrum recusandae dignissimos
          similique eos minima perferendis eveniet. Dolor, distinctio nulla
          expedita eligendi aut, atque similique sint sit beatae, praesentium
          corporis voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sint.
        </p>

        <div>
          {SOCIALS.length > 0 ? (
            <p>
              <span>Social Links:</span>
              <span className="flex gap-2 hover:text-orange-500">
                {SOCIALS.map((link) => {
                  return (
                    <Link target="_blank" key={link.href} href={link.href}>
                      {link.icon}
                    </Link>
                  );
                })}
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
      </section>

      <hr className="my-8 " />

      <section className="py-2">
        <h2 className="pb-6 text-3xl">Featured</h2>
        <Posts category={"featured"} />
      </section>

      <hr className="my-8 " />

      <section className="py-2">
        <h2 className="pb-6 text-3xl">Recent Posts</h2>
        <Posts category={"recent"} />
      </section>
    </>
  );
}
