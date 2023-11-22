import { SITE } from "@/config/config";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About | " + SITE.title,
  };
}

export default function AboutPage() {
  return (
    <article>
      <h1 className="pb-8 text-2xl">About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        repellat ipsam veritatis omnis sapiente porro nihil labore eaque
        molestiae recusandae natus esse ipsum, iusto, minus nisi nulla
        laudantium vel reprehenderit? Corporis iure animi, earum molestiae
        placeat, perferendis dolore quis nulla magnam in doloremque. Vero
        commodi vel voluptatem voluptas dolor nam architecto veritatis ipsum
        nobis nihil tenetur, eos iusto aliquam laborum quisquam enim a corporis?
        Amet architecto veritatis distinctio! Neque cum dignissimos itaque vero
        a officia, veniam hic quibusdam magnam voluptatibus quam reprehenderit
        nemo aliquam esse, amet necessitatibus. Nemo maxime placeat dolores,
        sequi, laboriosam sit repellat rerum perspiciatis fugiat, numquam quos?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti omnis
        tenetur pariatur? Nemo quaerat est dolores saepe, exercitationem, itaque
        necessitatibus id ad quas suscipit, nihil voluptas quia ex? Provident
        facilis distinctio quis!
      </p>
    </article>
  );
}
