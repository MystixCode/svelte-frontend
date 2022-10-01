import { writable} from 'svelte/store'
import type { Writable } from 'svelte/store'

export const alert = writable('')

export type Examples = Array<Example>

export type Example = {
    id: string
    examplename: string
    examplevalue: string
}

let defaultExamples:Examples = [] //[{id:"666",examplename:"-----------------",examplevalue:"_____________________"}]
export const examples: Writable<Examples> = writable(defaultExamples);

export default examples
