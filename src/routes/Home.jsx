import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="w-[50rem] mx-auto h-auto">
      <main className="w-4/6 h-screen flex flex-col justify-center">
        <Badge />
        <h1 className="text-5xl font-extrabold my-4">
          <span className="font-extrabold bg-gradient-to-r from-red-500/80 to-red-400/90 text-transparent bg-clip-text">
            API de descargas
          </span>
          <span className="block">para Youtube</span>
        </h1>
        <p className="text-lg text-gray-900/90 font-medium mb-5">
          YouDownAPI fue creada para que la optencion de datos sea facil, rapida y efectiva.
        </p>
        <div className="flex gap-2">
          <Button to="/doc" type={0} isNav={true} title="Documentacion" />
          <Button to="https://api.jdoxx.com/api/y2mate=" type={1} isNav={false} title="Probar Ya" />
        </div>
      </main>
      <section className="w-full h-[44rem] grid grid-cols-2">
        <div className="bg-stone-300/40 col-span-3 rounded-xl flex items-center flex-col justify-start p-8 m-3">
          <h2 className="text-3xl font-bold text-red-950 mb-3">API</h2>
          <p className="font-medium text-lg text-stone-700 text-center w-3/4">
            La API mas completa para optener informacion videos de Youtube de
            manera rapida y efectiva.
          </p>
        </div>
        <div className="bg-gradient-to-br from-red-600/70 to-red-500/80 rounded-xl flex items-center flex-col justify-start p-8 m-3 overflow-hidden relative">
          <h2 className="text-3xl font-bold text-white/90 mb-3">Completa</h2>
          <p className="font-medium text-base text-white/70 text-center w-3/4">
            Proporciona toda la informacion que puedas necesitar.
          </p>
          <img src="IMG-20240421-WA0099.png" alt="Imagen de datos de la API de YouDown" className="absolute top-1/2 left-1/2 -translate-x-1/2 w-60"/>
        </div>
        <div className="bg-stone-300/40 rounded-xl flex items-center flex-col justify-start p-8 m-3">
          <h2 className="text-3xl font-bold text-red-950 mb-3">Descarga</h2>
          <p className="font-medium text-base text-stone-700 text-center w-3/4">
            Desde videos - audios, todo con la mejor calidad que te pueden ofrecer.
          </p>
        </div>
      </section>
    </div>
  );
}
