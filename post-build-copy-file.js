import fs from 'fs'

function callback() {
  console.log('** CSS file was copied into dist folder')
}

fs.copyFile(
  './assets/vue-collapse-2023.css',
  './dist/vue-collapse-2023.css',
  fs.constants.COPYFILE_EXCL,
  callback
)
