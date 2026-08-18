function ControlPanel() {
  return (
    <section className="flex justify-end bg-gradient-bg w-full h-175 p-4 pr-6">
      {/* Outside Border */}
      <div className="flex items-center p-1 bg-gradient-gold rounded-xl h-fit">
        <main className="flex items-start justify-center bg-gradient-bg rounded-[10px] w-100 h-125 p-2">
          <div className="middle p-3.5 pb-4.5 m-2 font-[cairo] bg-gradient-gold text-white font-bold text-3xl rounded-xl shadow-md h-auto w-full">
            لوحة التحكم
          </div>
        </main>
      </div>
    </section>
  );
}

export default ControlPanel;
