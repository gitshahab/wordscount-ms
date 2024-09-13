import { Counter } from "./components/Counter";
import { Title } from "./components/Title";

export const WordsCounter = () => {
  return (
    <main className="h-screen">
        <Title heading={"Word Counter"} para={"Free Word Count Tool with Quick Results."}/>
        <Counter />
    </main>
  )
}
