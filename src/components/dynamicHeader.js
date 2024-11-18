import * as React from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin)
const DynamicHeader = () => {
  const container = React.useRef()
  const texts = [
    "Решаем земельные вопросы",
    "Подготавливаем схемы КПТ",
    "Оцениваем землю перед покупкой",
    "Помогаем получить землю от государства",
    "Консультируем по земельным вопросам",
    "Решаем земельные вопросы",
  ]
  useGSAP(
    () => {
      gsap.delayedCall(1, () => {
        const tl = gsap.timeline({
          repeat: -1,
          delay: 0,
          defaults: {
            duration: 1,
            ease: "none",
          },
        })
        for (let i = 0; i < texts.length; i++) {
          tl.to(container.current, {
            delay: i === texts.length || i === 0 ? 0 : 4,
            text: texts[i],
          })
        }
      })
    },
    { scope: container }
  ) // <-- scope is for selector text (optional)const { ar } = useWindowSize()
  return (
    <h1
      ref={container}
      className={`p-4 font-normal text-4xl text-center lg:text-5xl uppercase`}
    >
      {texts[0]}
    </h1>
  )
}
export default DynamicHeader
