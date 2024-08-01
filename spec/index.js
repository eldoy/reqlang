var test = require('spekky')

async function run() {
  console.time('Test run')

  await test('reqlang')

  console.timeEnd('Test run')
}
run()
