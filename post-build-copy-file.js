import fs from 'fs'

function callback() {
  console.log('** CSS file was copied into dist folder')
}

fs.copyFile(
  './assets/vue-collapse.css',
  './dist/vue-collapse.css',
  fs.constants.COPYFILE_EXCL,
  callback
)
