import { writable } from 'svelte/store'

// export const exampleName = writable('defaultExampleStoreName')
// export const exampleValue = writable('defaultExampleStoreValue')

const ExampleStore = writable([
    {id: 'testid', name: 'testname', value: 'testvalue'}
]);

export default ExampleStore