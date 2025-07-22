import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div className="container py-8 space-y-8 max-w-3xl">
      <h1 className="text-4xl font-bold">關於我們</h1>
      
      <section className="prose prose-lg">
        <p>
          我們致力於為您提供最優質的時尚服飾。從街頭時尚到優雅正裝，
          我們的設計團隊不斷創新，為您帶來最新的時尚趨勢。
        </p>
        
        <h2>我們的使命</h2>
        <p>
          以可持續發展的方式，為每個人提供優質且平價的時尚選擇。
          我們相信，好的設計應該觸手可及。
        </p>
        
        <h2>品質承諾</h2>
        <p>
          每件商品都經過嚴格的品質控管，確保您收到的每一件商品都達到最高標準。
          我們選用優質面料，注重細節處理，為您提供最好的穿著體驗。
        </p>
      </section>
      
      <div className="flex gap-4">
        <Button size="lg">聯絡我們</Button>
        <Button variant="outline" size="lg">了解更多</Button>
      </div>
    </div>
  );
}