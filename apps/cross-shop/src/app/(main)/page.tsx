import { getProducts } from "@/service/products";
import { Button } from "@common/design";
import { getCommonText } from "@common/utils";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="z-10 w-full max-w-5xl items-center flex-col gap-4 font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span>{getCommonText()}</span>
        </p>
        <Button size={"md"}>테스트버튼</Button>
      </div>
      <ul className="flex flex-col gap-2">
        {products.map((product, idx) => (
          <li key={product.id}>{idx + product.name}</li>
        ))}
      </ul>
    </main>
  );
}
