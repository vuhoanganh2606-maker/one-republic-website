import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function NguyetLamGiaPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-screen">
        <Image
          src="/work/nguyet-lam-gia/cover.webp"
          alt="Nguyệt Lâm Gia"
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
                Nguyệt
                <br />
                Lâm Gia
              </h1>
            </div>

            <div className="flex flex-col justify-end">

              <p className="text-2xl leading-relaxed text-gray-700">
                A premium Mid-Autumn Festival gift box inspired by
                the traditional Vietnamese Hát Bội theatre,
                reimagined through a contemporary design language.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-10 border-t border-gray-200 mt-24 pt-10">

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Client
              </p>

              <p className="font-medium">
                Nguyệt Lâm Gia
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
                Branding / Packaging / Illustration
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
            Bộ hộp quà Trung Thu cao cấp lấy cảm hứng từ nghệ thuật
            sân khấu Hát Bội Việt Nam, tái hiện vẻ đẹp văn hóa dân tộc
            bằng ngôn ngữ thiết kế hiện đại và giàu tính sưu tầm.
          </p>

        </div>
      </section>

      {/* IMAGE 01 */}
      <section className="pb-10 px-8">
        <Image
          src="/work/nguyet-lam-gia/01.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* IMAGE 02 */}
      <section className="pb-32 px-8">
        <Image
          src="/work/nguyet-lam-gia/02.webp"
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
            Làm mới một chủ đề giàu tính truyền thống như Hát Bội,
            đồng thời tạo nên một sản phẩm quà tặng cao cấp phù hợp
            với khách hàng hiện đại mà vẫn giữ nguyên chiều sâu văn hóa.
          </p>

        </div>
      </section>

      {/* IMAGE 03 */}
      <section className="pb-10 px-8">
        <Image
          src="/work/nguyet-lam-gia/03.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* IMAGE 04 */}
      <section className="pb-32 px-8">
        <Image
          src="/work/nguyet-lam-gia/04.webp"
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
            Tạo nên một bộ quà tặng Trung Thu độc bản mang đậm bản sắc
            Việt Nam, kết hợp giá trị văn hóa truyền thống với trải nghiệm
            thương hiệu cao cấp và hiện đại.
          </p>

        </div>
      </section>

      {/* IMAGE 05 */}
      <section className="px-8 pb-32">
        <Image
          src="/work/nguyet-lam-gia/05.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

{/* NEXT PROJECT */}
<section className="bg-black text-white py-32 px-8">

  <Link
    href="/work/nguyet-da-dong-duong"
    className="block group"
  >
    <div className="max-w-7xl mx-auto">

      <p className="uppercase tracking-[0.25em] text-sm text-gray-400 mb-6">
        Next Project
      </p>

      <h2 className="text-5xl md:text-7xl font-bold transition duration-300 group-hover:text-red-500">
        Nguyệt Dạ Đông Dương →
      </h2>

    </div>
  </Link>

</section>
      <Footer /> 
    </main>
  );
}