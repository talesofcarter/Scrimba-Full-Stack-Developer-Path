import Image from "next/image";
import { Sparkles, Users, DollarSign } from "lucide-react";

function AboutPage() {
  const features = [
    {
      icon: Sparkles,
      title: "100K+ Models",
      description:
        "Access our vast library of community-created 3D models, from practical tools to artistic creations.",
    },
    {
      icon: Users,
      title: "Active Community",
      description:
        "Join thousands of makers who share tips, provide feedback, and collaborate on projects.",
    },
    {
      icon: DollarSign,
      title: "Free to Use",
      description:
        "Most models are free to download, with optional premium features for power users.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="container max-w-6xl px-4 py-16 mx-auto md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="mb-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Our Story
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Empowering Makers Worldwide
            </h1>
            <p className="mb-4 text-lg text-gray-700 leading-relaxed">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>

          <div className="relative h-[300px] sm:h-[400px] w-full order-1 md:order-2 rounded-lg shadow-xl overflow-hidden border border-gray-100">
            <Image
              src="/about-image.webp"
              alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <hr className="my-10 border-gray-200" />

      <section
        className="py-12 bg-white sm:py-16"
        aria-labelledby="key-features"
      >
        <div className="container px-4 mx-auto max-w-7xl">
          <h2
            id="key-features"
            className="mb-12 text-3xl font-extrabold text-center text-gray-900"
          >
            Why Join PrintForge?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={index}
                className="p-8 transition duration-300 transform bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-300"
              >
                <feature.icon className="w-8 h-8 mb-4 text-gray-600" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-10 border-gray-200" />

      <section className="container max-w-3xl px-4 py-16 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
          Our Vision
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what&rsquo;s
            possible.
          </p>
          <p>
            Whether you&rsquo;re a hobbyist looking for your next weekend
            project, an educator seeking teaching materials, or a professional
            designer wanting to share your creations, PrintForge provides the
            tools and community to support your journey.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
