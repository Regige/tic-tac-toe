let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];


function render() {
    let gameContent = document.getElementById('game-content');
    gameContent.innerHTML = "";

    gameContent.innerHTML = /*html*/`
            <table border="1">
        <tr>
            <td>Zeile 1, Spalte 1</td>
            <td>Zeile 1, Spalte 2</td>
            <td>Zeile 1, Spalte 3</td>
        </tr>
        <tr>
            <td>Zeile 2, Spalte 1</td>
            <td>Zeile 2, Spalte 2</td>
            <td>Zeile 2, Spalte 3</td>
        </tr>
        <tr>
            <td>Zeile 3, Spalte 1</td>
            <td>Zeile 3, Spalte 2</td>
            <td>Zeile 3, Spalte 3</td>
        </tr>
    </table>
    `
}