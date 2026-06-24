import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LuanVuMinhNguyetPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-screen">
        <Image
          src="/work/luan-vu-minh-nguyet/cover.webp"
          alt="Luân Vũ Minh Nguyệt"
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
                Luân Vũ
                <br />
                Minh Nguyệt
              </h1>
            </div>

            <div className="flex flex-col justify-end">

              <p className="text-2xl leading-relaxed text-gray-700">
                A premium Mid-Autumn Festival gift box inspired by
                the cyclical movement of the moon and traditional
                Vietnamese folk dances, blending heritage with
                contemporary visual storytelling.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-10 border-t border-gray-200 mt-24 pt-10">

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Client
              </p>

              <p className="font-medium">
                Luân Vũ Minh Nguyệt
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Year
              </p>

              <p className="font-medium">
                2026
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
                Packaging / Illustration / Visual Identity
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
            Bộ hộp quà Trung Thu cao cấp lấy cảm hứng từ sự vận động
            tuần hoàn của vầng trăng và những vũ điệu dân gian truyền thống,
            kết hợp ngôn ngữ minh họa hiện đại với tinh thần văn hóa Á Đông.
          </p>

        </div>
      </section>

      {/* IMAGE 01 */}
      <section className="pb-10 px-8">
        <Image
          src="/work/luan-vu-minh-nguyet/01.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* IMAGE 02 */}
      <section className="pb-32 px-8">
        <Image
          src="/work/luan-vu-minh-nguyet/02.webp"
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
            Khai thác chủ đề Trung Thu theo một góc nhìn mới,
            vừa truyền tải tinh thần chuyển động của các vũ điệu dân gian,
            vừa duy trì sự sang trọng cần thiết cho một sản phẩm quà tặng cao cấp.
          </p>

        </div>
      </section>

      {/* IMAGE 03 */}
      <section className="pb-10 px-8">
        <Image
          src="/work/luan-vu-minh-nguyet/03.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* IMAGE 04 */}
      <section className="pb-32 px-8">
        <Image
          src="/work/luan-vu-minh-nguyet/04.webp"
          alt=""
          width={1800}
          height={1200}
          className="w-full rounded-3xl"
        />
      </section>

      {/* APPROACH */}
      <section className="py-32 px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            Approach
          </h2>

          <p className="text-2xl leading-relaxed text-gray-700">
            Kết hợp kỹ thuật minh họa layered paper-cut,
            chuyển sắc ánh trăng và các chuyển động nhịp nhàng
            của múa lân, múa quạt cung đình nhằm tạo nên một trải nghiệm
            thị giác giàu chiều sâu và cảm xúc.
          </p>

        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-32 px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            Outcome
          </h2>

          <p className="text-2xl leading-relaxed text-gray-700">
            Một bộ quà tặng Trung Thu cao cấp mang tính sưu tầm,
            nơi bao bì không chỉ bảo vệ sản phẩm mà còn trở thành
            một tác phẩm nghệ thuật kể chuyện và tạo dấu ấn thương hiệu mạnh mẽ.
          </p>

        </div>
      </section>

        {/* BACK TO PORTFOLIO */}
        <section className="bg-black text-white py-32 px-8">

        <Link
            href="/work"
            className="block group"
        >
            <div className="max-w-7xl mx-auto">

            <p className="uppercase tracking-[0.25em] text-sm text-gray-400 mb-6">
                Back To Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-bold transition duration-300 group-hover:text-red-500">
                View All Projects →
            </h2>

            </div>
        </Link>

        </section>

      <Footer />

    </main>
  );
}