const ta_normal = document.querySelector('#normal')
const ta_gc = document.querySelector('#gc')

function toGc(){
    ta_gc.value = encode(ta_normal.value)
}