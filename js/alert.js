//Mensaje de alerta eliminar
var eliminar = function(){swal({
  title: "¿Estas seguro?",
  text: "No podras recuperar la informacion una vez eliminada",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, Eliminar!",
  cancelButtonText: "No, Cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
    swal("¡Alumno eliminado!", "", "success");
  } else {
    swal("Cancelado", "", "error");
  }
});
}