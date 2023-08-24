export default function Dashboard() {
  return (
    <div className="w-full pt-20">
      <div className="w-full h-full flex gap-10 flex-col pt-8 px-6">
        <div className="w-full flex flex-col items-center md:items-start gap-1 ">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Tournaments
          </h1>
          <span className="text-lg text-muted-foreground ">
            Browse available tournaments
          </span>
        </div>
        <div className="w-full flex">
          <h2 className="text-2xl md:text-2xl font-bold tracking-tighter">
            Featured
          </h2>
        </div>
      </div>
    </div>
  );
}
