function showContent(contentId) {
    document.querySelectorAll('.dynamic-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(contentId).classList.add('active');
    event.currentTarget.classList.add('active');
}

document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3), var(--glow)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});

// Passonis Donate Panel Fonksiyonları
function openDonatePanel() {
    document.getElementById('donatePanel').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDonatePanel() {
    document.getElementById('donatePanel').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Donate Kategori aç/kapa fonksiyonu
function toggleDonateCategory(header) {
    header.classList.toggle('active');
    const icon = header.querySelector('.donate-category-icon');
    const grid = header.nextElementSibling;
    
    if(header.classList.contains('active')) {
        grid.style.maxHeight = grid.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
        
        // Slot animasyonlarını tetikle
        const slots = grid.querySelectorAll('.donate-property-slot');
        slots.forEach((slot, index) => {
            slot.style.animationDelay = `${index * 0.1}s`;
            slot.style.animationName = 'slotAppear';
        });
    } else {
        grid.style.maxHeight = '0';
        grid.style.padding = '0 15px';
        icon.style.transform = 'rotate(0)';
    }
}

// Modal göster fonksiyonu
function showPropertyModal(name, price, status, type) {
    const modal = document.getElementById('propertyModal');
    const modalContent = document.getElementById('modalContent');
    
    // Modal tema ayarı
    modalContent.className = 'modal-content';
    if(type === 'mansions') {
        modalContent.classList.add('mansions-modal');
        document.getElementById('modalLocation').textContent = 'Lüks Bölge';
        document.getElementById('modalFeatures').textContent = '5 Yatak Odası, 3 Banyo, Havuz, Helipad';
    } else if(type === 'mechanics') {
        modalContent.classList.add('mechanics-modal');
        document.getElementById('modalLocation').textContent = 'Endüstriyel Bölge';
        document.getElementById('modalFeatures').textContent = '2 Lift, Araç Depolama, Özel Araç Modifikasyon';
    } else if(type === 'social') {
        modalContent.classList.add('social-modal');
        document.getElementById('modalLocation').textContent = 'Şehir Merkezi';
        document.getElementById('modalFeatures').textContent = 'Bar, Dans pisti, VIP lounge';
    } else if(type === 'estate') {
        modalContent.classList.add('estate-modal');
        document.getElementById('modalLocation').textContent = 'Residans Bölgesi';
        document.getElementById('modalFeatures').textContent = '3 Yatak Odası, 2 Banyo, Geniş Balkon';
    } else if(type === 'gunshop') {
        modalContent.classList.add('gunshop-modal');
        document.getElementById('modalLocation').textContent = 'Gizli Lokasyon';
        document.getElementById('modalFeatures').textContent = 'Özel silah erişimi, Gizli depo, Güvenli oda';
    } else if(type === 'illegal') {
        modalContent.classList.add('illegal-modal');
        document.getElementById('modalLocation').textContent = 'Gizli Üs';
        document.getElementById('modalFeatures').textContent = 'Yüksek güvenlik, Gizli tüneller, 24/7 gözetim';
    } else if(type === 'cars') {
        modalContent.classList.add('cars-modal');
        document.getElementById('modalLocation').textContent = 'Garaj';
        document.getElementById('modalFeatures').textContent = 'Özel plaka, Full modifiye'; 
    }
    
    // İçerik doldurma
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalStatus').textContent = status;
    document.getElementById('modalImage').src = event.currentTarget.querySelector('img').src;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Modal kapatma fonksiyonu
function closeModal() {
    document.getElementById('propertyModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Dışarı tıklayarak kapatma
window.onclick = function(event) {
    const modal = document.getElementById('propertyModal');
    const donatePanel = document.getElementById('donatePanel');
    
    if(event.target == modal) {
        closeModal();
    }
    
    if(event.target == donatePanel) {
        closeDonatePanel();
    }
}

// Sayfa yüklendiğinde ilk kategoriyi aç
window.onload = function() {
    // İlk kategoriyi aç
    const firstCategory = document.querySelector('.donate-category-header');
    if (firstCategory) {
        toggleDonateCategory(firstCategory);
    }
};