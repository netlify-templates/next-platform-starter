
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-white">
      
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl text-gray-900">
        Análise Inteligente de Pele com IA
      </h1>

      <p className="mb-6 max-w-xl text-lg text-gray-600">
        Nossa tecnologia combina análise de imagem com perguntas sobre
        tipo de pele e comportamento ao sol, criando uma trava de segurança
        que corrige erros causados pela iluminação da foto e aumenta
        significativamente a precisão do resultado.
      </p>

      <p className="mb-8 max-w-xl text-base text-gray-500">
        Diferente de outros apps, nossa IA entende quando a imagem engana o sensor,
        evitando diagnósticos errados causados por luz azulada, sombras ou filtros.
      </p>

      <Link
        href="#"
        className="rounded-xl bg-black px-8 py-4 text-white transition hover:bg-gray-800"
      >
        Em breve – Teste sua pele
      </Link>

      <span className="mt-6 text-sm text-gray-400">
        Tecnologia em desenvolvimento • Uso educacional
      </span>

    </div>
  );
}
