$("#frmAcceso").on('submit', function(e) {
    e.preventDefault();

    let logina = $("#logina").val();
    let clavea = $("#clavea").val();

    if (logina === "" || clavea === "") {
        bootbox.alert("Asegúrate de llenar todos los campos");
    } else {
        $.post("../ajax/usuario.php?op=verificar", {
            "logina": logina,
            "clavea": clavea
        }, function(response) {
            let data = JSON.parse(response);

            if (data.status === 'success') {
                $(location).attr("href", "escritorio.php");
            } else if (data.status === 'error') {
                bootbox.alert(data.message);
            }
        });
    }
});
