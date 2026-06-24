import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function NguyetDaDongDuongPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-screen">
        <Image
          src="/work/nguyet-da-dong-duong/cover.webp"
          alt="Nguyệt Dạ Đông Dương"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-10 left-10 z-10">
          <Link
            href="/work"
            className="text-white text-sm tracking-widest uppercase hover:opacity-70 transition"
          >
            ← Back to Work
          </Link>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>
              <p className="text-red-600 uppercase tracking-[0.25em] text-sm mb-6">
                Packaging Design
              </p>

              <h1 className="text-6xl lg:text-8xl font-bold leading-none">
                Nguyệt Dạ
                <br />
                Đông Dương
              </h1>
            </div>

            <div className="flex flex-col justify-end">

              <p className="text-2xl leading-relaxed text-gray-700">
                A premium Mid-Autumn Festival gift box inspired by
                Indochine aesthetics, blending traditional craftsmanship,
                cultural storytelling and contemporary luxury packaging.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-10 border-t border-gray-200 mt-24 pt-10">

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Client
              </p>

              <p className="font-medium">
                Nguyệt Dạ Đông Dương
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Year
              </p>

              <p className="font-medium">
                2025
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Category
              </p>

              <p className="font-medium">
                Packaging Design
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Services
              </p>

              <p className="font-medium">
                Packaging Design / Illustration
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="pb-32 px-8">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            Overview
          </h2>

          <p className="text-2xl leading-relaxed text-gray-700">
            Bộ hộp quà Trung Thu lấy cảm hứng từ mỹ thuật Đông Dương,
            kết hợp giữa tinh thần thủ công truyền thống, nghệ thuật minh họa
            và cấu trúc bao bì cao cấp nhằm tạo nên trải nghiệm quà tặng sang trọng.
          </p>

        </div>
      </section>

      {/* IMAGE 01 */}
      <section className="pb-10 px-8">
        <Image
          src="/work/nguyet-da-dong-duong/01.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* IMAGE 02 */}
      <section className="pb-32 px-8">
        <Image
          src="/work/nguyet-da-dong-duong/02.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* CHALLENGE */}
      <section className="py-32 px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            Challenge
          </h2>

          <p className="text-2xl leading-relaxed text-gray-700">
            Tạo ra một sản phẩm mang đậm bản sắc văn hóa Việt Nam
            nhưng vẫn phù hợp với thẩm mỹ đương đại và kỳ vọng của
            phân khúc quà tặng cao cấp.
          </p>

        </div>
      </section>

      {/* IMAGE 03 */}
      <section className="pb-10 px-8">
        <Image
          src="/work/nguyet-da-dong-duong/03.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* IMAGE 04 */}
      <section className="pb-32 px-8">
        <Image
          src="/work/nguyet-da-dong-duong/04.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* OUTCOME */}
      <section className="py-32 px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            Outcome
          </h2>

          <p className="text-2xl leading-relaxed text-gray-700">
            Một giải pháp bao bì Trung Thu cao cấp mang đậm tinh thần Đông Dương,
            kết hợp nghệ thuật minh họa thủ công và trải nghiệm mở hộp sang trọng,
            giúp sản phẩm nổi bật trong thị trường quà tặng mùa lễ hội.
          </p>

        </div>
      </section>

      {/* NEXT PROJECT */}
        <section className="bg-black text-white py-32 px-8">

        <Link
            href="/work/luan-vu-minh-nguyet"
            className="block group"
        >
            <div className="max-w-7xl mx-auto">

            <p className="uppercase tracking-[0.25em] text-sm text-gray-400 mb-6">
                Next Project
            </p>

            <h2 className="text-5xl md:text-7xl font-bold transition duration-300 group-hover:text-red-500">
                Luân Vũ Minh Nguyệt →
            </h2>

            </div>
        </Link>

        </section>

      <Footer />

    </main>
  );
}