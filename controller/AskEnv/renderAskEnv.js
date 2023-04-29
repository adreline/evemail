const confirm = document.getElementById('confirm')
const idInput = document.getElementById('app_id')
const secretInput = document.getElementById('app_secret')

confirm.addEventListener('click', () => {
  window.askEnv.setEnv({
    id: idInput.value,
    secret: secretInput.value
  })
})