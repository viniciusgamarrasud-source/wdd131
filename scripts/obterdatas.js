const anoAtual = new Date().getFullYear();

document.getElementById("ano").textContent = anoAtual;

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;