import { useState } from "react";
import Panel from "./Panel";

export default function LiftingState() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <h2>哈萨克斯坦，阿拉木图</h2>
            <Panel
                title="关于"
                isActive={activeIndex === 0}
                clickBtn={() => setActiveIndex(0)}
            >
                阿拉木图人口约200万，是哈萨克斯坦最大的城市。
            </Panel>

            <Panel
                title="词源"
                isActive={activeIndex === 1}
                clickBtn={() => setActiveIndex(1)}
            >
                这个名字来自于 <span lang="kk-KZ">алма</span>
                ，哈萨克语中“苹果”的意思，经常被翻译成“苹果之乡”。
            </Panel>
        </>
    );
}
