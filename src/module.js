console.log('import.meta', import.meta);
console.log('import.meta.url', import.meta.url);

const params = new URLSearchParams(import.meta.url);

console.log('import params', params.entries());
console.log('import message', params.get('message'));
