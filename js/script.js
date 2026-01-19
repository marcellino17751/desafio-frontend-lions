const veiculos = [
    { id: 1, modelo: "Toyota Corolla GLI", ano: "2022/2023", preco: "139.900", imagem: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=60&w=400" },
    { id: 2, modelo: "Jeep Compass Longitude", ano: "2021/2021", preco: "128.500", imagem: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=60&w=400" },
    { id: 3, modelo: "VW Polo TSI", ano: "2023/2024", preco: "92.900", imagem: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=60&w=400" },
    { id: 4, modelo: "Honda Civic G10", ano: "2020/2020", preco: "115.000", imagem: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=60&w=400" }
];

function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    
    const targetTab = document.getElementById(`tab-${tab}`);
    const targetBtn = document.getElementById(`btn-${tab}`);
    
    if (targetTab) targetTab.classList.add('active');
    if (targetBtn) targetBtn.classList.add('active');
    
    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function renderCatalogo() {
    const list = document.getElementById('lista-veiculos');
    if (!list) return;
    
    list.innerHTML = veiculos.map(car => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg border hover:scale-[1.02] transition-all group">
            <div class="relative overflow-hidden">
                <img src="${car.imagem}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" alt="${car.modelo}">
                <div class="absolute top-2 right-2 bg-yellow-500 text-blue-950 text-[10px] font-extrabold px-2 py-1 rounded">DESTAQUE</div>
            </div>
            <div class="p-6">
                <h3 class="font-black text-blue-950 uppercase italic text-lg">${car.modelo}</h3>
                <p class="text-xs text-slate-400 font-bold mt-1 tracking-widest">${car.ano}</p>
                <div class="mt-6 flex justify-between items-center">
                    <div>
                        <p class="text-[10px] text-slate-400 uppercase font-bold">Preço Lions</p>
                        <span class="text-2xl font-black text-blue-950 leading-none">R$ ${car.preco}</span>
                    </div>
                    <button onclick="showTab('agendar')" class="bg-yellow-500 text-blue-950 p-3 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg">
                        <i data-lucide="arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    if (window.lucide) {
        lucide.createIcons();
    }
}

const formAgendamento = document.getElementById('form-agendamento');
if (formAgendamento) {
    formAgendamento.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('form-nome').value;
        const unidade = document.getElementById('form-unidade').value;

        Swal.fire({
            title: 'SOLICITAÇÃO ENVIADA!',
            html: `Olá <b>${nome}</b>,<br><br>Recebemos o seu interesse para a unidade <b>${unidade}</b>. Um consultor Lions entrará em contacto via WhatsApp em breve!`,
            icon: 'success',
            iconColor: '#eab308',
            background: '#0a1931',
            color: '#ffffff',
            confirmButtonColor: '#eab308',
            confirmButtonText: 'EXCELENTE!',
            buttonsStyling: true,
            customClass: {
                popup: 'swal2-popup-custom',
                confirmButton: 'swal2-confirm-custom text-blue-950'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                formAgendamento.reset();
                showTab('home');
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
    renderCatalogo();
});