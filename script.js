// Nomor WhatsApp (ganti dengan nomor Anda)
const NOMOR_WA = "6285218292470";

// Fungsi untuk tombol pesan langsung dari card
function pesan(layanan) {
    let pesan = `Halo Pak/Bu,\n\nSaya tertarik dengan layanan:\n*${layanan}*\n\nBisakah Anda memberikan informasi lebih lanjut dan penawaran harganya?\n\nTerima kasih.`;

    let url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}

// Fungsi untuk form pemesanan
function kirimWA(event) {
    if (event) {
        event.preventDefault();
    }

    // Ambil nilai dari form
    const nama = document.getElementById('nama')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const layanan = document.getElementById('layanan')?.value || '';
    const panjang = document.getElementById('panjang')?.value || '';
    const lebar = document.getElementById('lebar')?.value || '';
    const luas = document.getElementById('luas')?.value || '';
    const lokasi = document.getElementById('lokasi')?.value || '';
    const tanggal = document.getElementById('tanggal')?.value || '';
    const anggaran = document.getElementById('anggaran')?.value || '';
    const alamat = document.getElementById('alamat')?.value || '';
    const catatan = document.getElementById('catatan')?.value || '';
    const setuju = document.getElementById('setuju')?.checked || false;
    const checkboxError = document.getElementById('checkboxError');

    // Validasi form
    if (!nama || !phone || !layanan || !lokasi || !alamat) {
        alert('Mohon lengkapi semua data yang diperlukan!');
        return;
    }

    if (!setuju) {
        if (checkboxError) {
            checkboxError.classList.add('show');
        }
        alert('Mohon setujui syarat dan ketentuan!');
        return;
    }

    if (checkboxError) {
        checkboxError.classList.remove('show');
    }

    // Buat pesan WhatsApp
    let pesanWA = `*FORM PEMESANAN JASA ATAP & PLAFON*\n\n`;
    pesanWA += `*Data Pemesan:*\n`;
    pesanWA += `• Nama: ${nama}\n`;
    pesanWA += `• No. Telp: ${phone}\n`;
    pesanWA += `• Email: ${email}\n\n`;
    pesanWA += `*Detail Proyek:*\n`;
    pesanWA += `• Layanan: ${layanan}\n`;

    if (panjang && lebar) {
        pesanWA += `• Ukuran: ${panjang} m x ${lebar} m\n`;
    }

    if (luas) {
        pesanWA += `• Luas Area: ${luas} m²\n`;
    }

    if (tanggal) {
        pesanWA += `• Tanggal Survey: ${tanggal}\n`;
    }

    if (anggaran) {
        pesanWA += `• Anggaran: ${anggaran}\n`;
    }
    
    pesanWA += `• Lokasi: ${lokasi}\n`;
    pesanWA += `• Alamat: ${alamat}\n`;
    
    if (catatan) {
        pesanWA += `• Catatan: ${catatan}\n`;
    }
    
    pesanWA += `\nMohon hubungi saya untuk diskusi lebih lanjut. Terima kasih.`;

    // Buka WhatsApp
    let url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesanWA)}`;
    window.open(url, "_blank");

    // Reset form
    if (document.getElementById('orderForm')) {
        document.getElementById('orderForm').reset();
    }
    if (document.getElementById('consultationForm')) {
        document.getElementById('consultationForm').reset();
    }
    alert('Pesan Anda akan dikirim ke WhatsApp. Silakan lanjutkan percakapan di WhatsApp.');
}

// Fungsi untuk smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe elemen yang akan dianimasikan
document.querySelectorAll('.card, .benefit, .gallery-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Navigation toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    const navMenuClose = document.querySelector('.nav-menu-close');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });

    if (navMenuClose) {
        navMenuClose.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.querySelector('i').classList.add('fa-bars');
            navToggle.querySelector('i').classList.remove('fa-times');
        });
    }

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                navToggle.querySelector('i').classList.add('fa-bars');
                navToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });
}

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

const checkboxInput = document.getElementById('setuju');
const checkboxError = document.getElementById('checkboxError');
if (checkboxInput) {
    checkboxInput.addEventListener('change', function() {
        if (checkboxError) {
            checkboxError.classList.toggle('show', this.checked);
        }
    });
}

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Tambah CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .faq-answer {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);
