// js/menu-render.js
(function () {
    const JSON_URL = 'data/menu.json';
    let DATA = null;

    // Render de um item (ajuste o HTML conforme seu layout)
    function renderItem({ img, titulo, preco, desc }) {
        const priceHTML = preco ? `<div class="item-price mt-2">${preco}</div>` : '';

        return `
    <div class="col-lg-6">
      <div class="d-flex h-100">
        <div class="flex-shrink-0">
          <img class="product-thumb" src="${img}" alt="${titulo}">
        </div>
        <div class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
          <h5 class="text-uppercase">${titulo}</h5>
          <span>${desc || ''}</span>
          ${priceHTML}
        </div>
      </div>
    </div>
  `;
    }





    function renderPane(pane) {
        const key = pane.getAttribute('data-key');
        const items = (DATA && DATA[key]) ? DATA[key] : [];
        if (!items.length) {
            pane.innerHTML = `
        <div class="text-center py-4 text-secondary">
          <em>Sem itens nesta categoria no momento.</em>
        </div>`;
            return;
        }
        pane.innerHTML = `<div class="row g-3">${items.map(renderItem).join('')}</div>`;
    }

    async function ensureData() {
        if (DATA) return DATA;
        const resp = await fetch(JSON_URL, { cache: 'no-cache' });
        if (!resp.ok) throw new Error('Não foi possível carregar o menu.json');
        DATA = await resp.json();
        return DATA;
    }

    // Inicialização
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            await ensureData();
            // Render da aba ativa
            document.querySelectorAll('.tab-pane.active .menu-pane').forEach(renderPane);
        } catch (e) {
            console.error(e);
        }
    });

    // Carrega quando trocar de aba (Bootstrap 5)
    document.addEventListener('shown.bs.tab', async (e) => {
        try {
            await ensureData();
            const paneId = e.target.getAttribute('href'); // ex: #tab-2
            const pane = document.querySelector(`${paneId} .menu-pane`);
            if (pane && !pane.innerHTML.trim()) renderPane(pane);
        } catch (e2) {
            console.error(e2);
        }
    });
})();
