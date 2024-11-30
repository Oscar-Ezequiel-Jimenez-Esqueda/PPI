<?php
$servername = "oscar";
$username = "oscar"; 
$password = ""; 
$dbname = "mi_base";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("La conexión ha fallado: " . $conn->connect_error);
}

$sql_check = "SELECT COUNT(*) FROM clientes";
$result_check = $conn->query($sql_check);
$row_check = $result_check->fetch_assoc();

if ($row_check['COUNT(*)'] == 0) {
    $clientes = [
        ["Juan Pérez", 28, "Madrid"],
        ["Ana García", 34, "Barcelona"],
        ["Carlos López", 25, "Valencia"],
        ["María González", 40, "Sevilla"],
        ["Luis Martínez", 31, "Zaragoza"],
        ["Elena Sánchez", 22, "Bilbao"],
        ["José Ramírez", 50, "Granada"],
        ["Laura Fernández", 29, "Alicante"],
        ["Pedro Gómez", 35, "Murcia"],
        ["Sofía Torres", 26, "Palma"]
    ];

    foreach ($clientes as $cliente) {
        $nombre = $cliente[0];
        $edad = $cliente[1];
        $ciudad = $cliente[2];

        $sql_insert = "INSERT INTO clientes (nombre, edad, ciudad) VALUES ('$nombre', '$edad', '$ciudad')";
        if ($conn->query($sql_insert) !== TRUE) {
            echo "Error: " . $sql_insert . "<br>" . $conn->error;
        }
    }
}

$sql = "SELECT id, nombre, edad, ciudad FROM clientes";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base de Datos de Clientes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Formulario de Clientes</h2>
        <form method="POST">
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" required><br>

            <label for="edad">Edad:</label>
            <input type="number" name="edad" id="edad" required><br>

            <label for="ciudad">Ciudad:</label>
            <input type="text" name="ciudad" id="ciudad" required><br>

            <input type="submit" value="Agregar Cliente">
        </form>

        <h2>Lista de Clientes</h2>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Ciudad</th>
            </tr>

            <?php
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>" . $row["nombre"] . "</td>
                            <td>" . $row["edad"] . "</td>
                            <td>" . $row["ciudad"] . "</td>
                          </tr>";
                }
            } else {
                echo "<tr><td colspan='3'>No hay datos disponibles</td></tr>";
            }
            ?>
        </table>
    </div>

    <?php
    $conn->close();
    ?>
</body>
</html>
