export default function AboutPage() {
  return (
    <main>

      {/* ส่วนหัว */}
      <section className="bg-gradient-to-b from-cyan-200 to-amber-100 py-20 text-center">
        <h1 className="text-5xl font-bold text-cyan-800 mb-6">
          🌴 เกี่ยวกับ Beach Cafe
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Beach Cafe เป็นร้านเครื่องดื่มที่ได้รับแรงบันดาลใจจากบรรยากาศของชายหาด
          เราต้องการให้ทุกคนรู้สึกผ่อนคลายเหมือนกำลังพักผ่อนอยู่ริมทะเล
          พร้อมเครื่องดื่มเย็นสดชื่นในทุกแก้ว
        </p>
      </section>

      {/* เรื่องราวร้าน */}
      <section className="py-16 px-10 text-center">
        <h2 className="text-3xl font-bold text-cyan-700 mb-6">
          เรื่องราวของเรา 🏖️
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600">
          ร้านของเราเริ่มต้นจากความตั้งใจที่จะสร้างเครื่องดื่มที่ให้ความสดชื่น
          เหมือนอยู่บนเกาะเขตร้อน ทุกเมนูได้รับแรงบันดาลใจจากทะเล
          แสงแดด และบรรยากาศการพักผ่อนริมชายหาด
        </p>
      </section>

      {/* จุดเด่น */}
      <section className="bg-amber-100 py-16">
        <div className="grid md:grid-cols-3 gap-10 text-center px-10">

          <div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-3">🌊 เครื่องดื่มสดชื่น</h3>
            <p className="text-gray-600">
              เมนูเครื่องดื่มที่ได้รับแรงบันดาลใจจากทะเลและผลไม้เมืองร้อน
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-3">🏝️ บรรยากาศชายหาด</h3>
            <p className="text-gray-600">
              ดีไซน์ของร้านให้ความรู้สึกเหมือนกำลังพักผ่อนอยู่ริมทะเล
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-700 mb-3">☀️ ช่วงเวลาแห่งความสุข</h3>
            <p className="text-gray-600">
              เพลิดเพลินกับเครื่องดื่มและบรรยากาศที่ผ่อนคลายเหมือนวันหยุด
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}