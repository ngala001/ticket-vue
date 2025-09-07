import { h, render } from "vue";
import PromptCard from "../components/PromptCard.vue";

export function usePrompt() {
   return function showPrompt(message: string): Promise<boolean> {
     return new Promise((resolve) => {
        const container = document.createElement("div")
        document.body.appendChild(container);

        const close = () => {
            render(null, container)
            container.remove()
        }

        const vnode = h(PromptCard, {
            message,
            onOk: () => {
                resolve(true)
                close()
            }
        });
        render(vnode, container)
     })
   }
}