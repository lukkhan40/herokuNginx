const mensaje = document.getElementById("mensaje");
const submit = document.getElementById("submit");

submit.addEventListener("submit", async (ev) => {
  let comment = mensaje.value;
  let size = comment.length;
  const ER = /^[A-Za-z 0-9]{1,30}$/;

  if (comment == "" || comment == null) {
    alert("Agrega un comentario");
    ev.preventDefault();
  } else if (size >= 30) {
    alert("Maximo 30 caracteres");
    ev.preventDefault();
  } else if (!ER.test(comment)) {
    alert("Solo se aceptan letras y numeros");
    ev.preventDefault();
  } else {
    alert(
      `El mensaje: ${comment}  ,sera agregado a Mongo Atlas. Posteriormente sera redireccionado a esta misma pagina`
    );
    ev.preventDefault();
    const respuesta = await fetch(ev.target.action, {
      method: ev.target.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mensaje: comment }),
    });

    const resultado = await respuesta.json();
    console.log(resultado);
  }
});
