const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const description = formData.get('description');

  fetch('https://formspree.io/tecknowhow@outlook.com.br', {
    method: 'POST',
    body: formData,
  })
  .then(() => {
    // Show a success message to the user
    alert(`Obrigado, ${name}! Sua mensagem foi enviada!.`);

    // Reset the form fields
    form.reset();
  })
  .catch((error) => {
    // Show an error message to the user
    alert(`Oops! Algo não está certo. Tente novamente. (${error})`);
  });
});