import { writable } from 'svelte/store'

const ExampleStore = writable([
    {id: 'testid', examplename: 'testname', examplevalue: 'testvalue'}
]);

export default ExampleStore
