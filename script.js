document.addEventListener('DOMContentLoaded', () => {
    // =====================================================
    // 1. CINEMATIC LUXURY SMOOTH SCROLL ENGINE (LENIS)
    // =====================================================
    const lenis = new Lenis({
        duration: 1.1, // Silky, high-end momentum gliding
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1.2,
        wheelMultiplier: 1.0,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // =====================================================
    // 2. SEAMLESS ANCHOR LINK GLIDE NAVIGATION
    // =====================================================
    const portalIndexMap = {
        '#parent': 1,
        '#therapist': 2,
        '#school': 3,
        '#caregiver': 4
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            e.preventDefault();

            if (portalIndexMap.hasOwnProperty(targetId) && window.hsScrollTween) {
                const slideIdx = portalIndexMap[targetId];
                const scrollTrigger = window.hsScrollTween.scrollTrigger;
                
                if (scrollTrigger) {
                    const targetRatio = slideIdx / 4;
                    const targetScrollPos = scrollTrigger.start + (scrollTrigger.end - scrollTrigger.start) * targetRatio;
                    lenis.scrollTo(targetScrollPos, { duration: 1.0, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                    return;
                }
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const isHero = targetId === '#hero';
                lenis.scrollTo(targetElement, {
                    duration: 1.0,
                    offset: isHero ? 0 : -80
                });
            }
        });
    });

    // =====================================================
    // 3. HERO PARALLAX & AMBIENT GLOW SCROLL VIBE
    // =====================================================
    gsap.set('.hero-title, .hero-subtitle, .hero-cta-group, .hero-stats-strip', { opacity: 0, y: 30 });

    const heroTl = gsap.timeline({ delay: 0.1 });

    heroTl.to('.hero-title', { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' })
          .to('.hero-subtitle', { opacity: 0.9, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
          .to('.hero-cta-group', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
          .to('.hero-stats-strip', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

    // Hero parallax & smooth ambient fade out on scroll
    gsap.to('.hero-content', {
        y: -50,
        opacity: 0.2,
        scale: 0.95,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.3
        }
    });

    gsap.to('.hero-bg-glow', {
        scale: 1.4,
        opacity: 0.4,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5
        }
    });

    // =====================================================
    // 4. VISION, MISSION & CORE VALUES SCROLL REVEAL
    // =====================================================
    const vmcSection = document.getElementById('vision-mission');
    if (vmcSection) {
        gsap.set('.vmc-mission', { x: -35, opacity: 0 });
        gsap.set('.vmc-vision', { x: 35, opacity: 0 });
        gsap.set('.vmc-values .val-pill', { scale: 0.85, opacity: 0 });

        ScrollTrigger.create({
            trigger: '#vision-mission',
            start: 'top 78%',
            onEnter: () => {
                const vmcTl = gsap.timeline();
                vmcTl.to('.vmc-mission', { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' })
                     .to('.vmc-vision', { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6')
                     .to('.vmc-values .val-pill', { scale: 1, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'back.out(1.5)' }, '-=0.4');
            }
        });
    }

    // =====================================================
    // 5. HORIZONTAL ECOSYSTEM PORTALS PIN & SCRUB SCROLL
    // =====================================================
    const hsTrack = document.querySelector('.hs-track');
    const hsProgressFill = document.getElementById('hsProgressFill');
    const hsDots = document.querySelectorAll('.hs-dot');

    if (hsTrack) {
        const getHsScrollAmount = () => hsTrack.scrollWidth - window.innerWidth;
        let lastActiveDotIdx = -1;

        window.hsScrollTween = gsap.to(hsTrack, {
            x: () => -getHsScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: '.horizontal-services',
                start: 'top top',
                end: () => `+=${getHsScrollAmount()}`,
                pin: true,
                scrub: 0.3, // Silky scrub smoothing
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const prog = self.progress;

                    // GPU transform progress bar fill
                    if (hsProgressFill) {
                        hsProgressFill.style.transform = `scaleX(${prog})`;
                    }

                    // Active dot & nav tab update
                    const activeIdx = Math.min(4, Math.floor(prog * 4.99));
                    if (activeIdx !== lastActiveDotIdx) {
                        lastActiveDotIdx = activeIdx;
                        hsDots.forEach((dot, idx) => {
                            dot.classList.toggle('active', idx === activeIdx);
                        });
                        const pNavBtns = document.querySelectorAll('.p-nav-btn');
                        pNavBtns.forEach((btn, idx) => {
                            btn.classList.toggle('active', idx === activeIdx);
                        });
                    }
                }
            }
        });

        // Clickable Progress Dot & Nav Button Navigation
        const allNavControls = document.querySelectorAll('.hs-dot, .p-nav-btn');
        allNavControls.forEach(ctrl => {
            ctrl.addEventListener('click', () => {
                const slideIdx = parseInt(ctrl.getAttribute('data-slide'));
                const scrollTrigger = window.hsScrollTween.scrollTrigger;
                if (scrollTrigger && !isNaN(slideIdx)) {
                    const targetRatio = slideIdx / 4;
                    const targetScrollPos = scrollTrigger.start + (scrollTrigger.end - scrollTrigger.start) * targetRatio;
                    lenis.scrollTo(targetScrollPos, { duration: 0.9, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                }
            });
        });
    }

    // =====================================================
    // 6. DEVELOPMENTAL PATHWAY (RAINBOW INFINITY LOOP + DESTINATION OVERLAY)
    // =====================================================
    const loopSection = document.querySelector('.pathway-infinite');
    if (loopSection) {
        let loopTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.pathway-infinite',
                start: 'top top',
                end: '+=4000',
                scrub: 1,
                pin: true
            }
        });

        const infFills = document.querySelectorAll('.inf-band');
        let pathLength = infFills[0] ? infFills[0].getTotalLength() : 4000;
        if (!pathLength || pathLength === 0) pathLength = 4000;

        infFills.forEach(fill => gsap.set(fill, { strokeDasharray: pathLength, strokeDashoffset: pathLength }));

        loopTl.fromTo('.pw-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.1 }, 0);

        loopTl.to('.b-purple', { strokeDashoffset: 0, duration: 0.95, ease: 'power1.inOut' }, 0.0)
            .to('.b-blue', { strokeDashoffset: 0, duration: 0.85, ease: 'sine.inOut' }, 0.05)
            .to('.b-lblue', { strokeDashoffset: 0, duration: 0.75, ease: 'power2.out' }, 0.1)
            .to('.b-green', { strokeDashoffset: 0, duration: 0.88, ease: 'sine.out' }, 0.02)
            .to('.b-yellow', { strokeDashoffset: 0, duration: 0.70, ease: 'power1.out' }, 0.15)
            .to('.b-orange', { strokeDashoffset: 0, duration: 0.90, ease: 'power2.inOut' }, 0.08)
            .to('.b-red', { strokeDashoffset: 0, duration: 0.80, ease: 'power3.out' }, 0.12);

        const lNodes = document.querySelectorAll('.l-node.clickable-dest');
        const infSvgObj = document.querySelector('.infinity-svg');
        const loopVis = document.querySelector('.loop-visualizer');
        const destOverlay = document.getElementById('destOverlay');
        const destCloseBtn = document.getElementById('destCloseBtn');
        const destPanels = document.querySelectorAll('.dest-panel');
        const thresholds = [0.02, 0.125, 0.25, 0.375, 0.50, 0.625, 0.85];
        const subtitle = document.querySelector('.pw-subtitle');

        loopTl.eventCallback('onUpdate', () => {
            let p = loopTl.progress();
            if (p > 0.95) {
                if (infSvgObj) infSvgObj.classList.add('glow-complete');
                if (subtitle) subtitle.classList.add('show-instruction');
                lNodes.forEach(node => {
                    node.classList.add('active-node');
                    node.classList.remove('dimmed-node');
                });
            } else {
                if (infSvgObj) infSvgObj.classList.remove('glow-complete');
                if (subtitle) subtitle.classList.remove('show-instruction');
                lNodes.forEach((node, idx) => {
                    let th = thresholds[idx];
                    let nextTh = thresholds[idx + 1] || 0.95;
                    if (p >= th && p < nextTh) {
                        node.classList.add('active-node');
                        node.classList.remove('dimmed-node');
                    } else {
                        node.classList.remove('active-node');
                        node.classList.add('dimmed-node');
                    }
                });
            }
        });

        if (destOverlay && destCloseBtn) {
            lNodes.forEach(node => {
                node.addEventListener('click', () => {
                    const destId = node.getAttribute('data-dest');
                    if (!destId) return;

                    destOverlay.classList.add('show');
                    document.body.classList.add('zooming-active');
                    destPanels.forEach(panel => panel.classList.remove('active'));

                    const targetPanel = document.getElementById(destId);
                    if (targetPanel) {
                        targetPanel.classList.add('active');
                    }

                    gsap.to(loopVis, {
                        scale: 3, opacity: 0, rotate: 5, duration: 1.2, ease: 'expo.inOut'
                    });

                    if (targetPanel) {
                        gsap.fromTo(targetPanel.querySelector('.dp-content'), 
                            { scale: 0.9, opacity: 0 }, 
                            { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
                        );
                    }
                });
            });

            destCloseBtn.addEventListener('click', () => {
                destOverlay.classList.remove('show');
                document.body.classList.remove('zooming-active');
                setTimeout(() => {
                    destPanels.forEach(panel => panel.classList.remove('active'));
                }, 800);

                gsap.to(loopVis, {
                    scale: 1, opacity: 1, rotate: 0, duration: 1, ease: 'expo.inOut'
                });
            });
        }
    }

    // =====================================================
    // 7. COMMUNITY CARDS SCROLL REVEAL VIBE
    // =====================================================
    const communityCards = document.querySelectorAll('.community-grid .partner-card');
    if (communityCards.length > 0) {
        gsap.set(communityCards, { y: 30, opacity: 0 });
        ScrollTrigger.create({
            trigger: '.community-section',
            start: 'top 78%',
            onEnter: () => {
                gsap.to(communityCards, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            }
        });
    }

    // =====================================================
    // 8. COMMUNITY PARTNER MODAL SYSTEM
    // =====================================================
    const partnerData = {
        niepid: {
            name: "NIEPID",
            tagline: "National Apex Body for Intellectual Disabilities",
            logo: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=800&q=80",
            intro: "The National Institute for the Empowerment of Persons with Intellectual Disabilities (NIEPID) is an autonomous body under the Ministry of Social Justice & Empowerment, Govt. of India.",
            description: "NIEPID leads the nation in research, human resource development, and rehabilitation services. They develop standardized assessment tools used across India.",
            impact: "Standardized clinical testing for millions of families and trained thousands of specialized educators nationwide.",
            connection: "AutiCure integrates NIEPID’s ISAA clinical frameworks directly into our real-time telemetry protocols.",
            website: "https://niepid.nic.in/",
            gallery: ["https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80", "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80"]
        },
        sahara: {
            name: "Sahara Foundation",
            tagline: "Community-First Rehabilitation Hub",
            logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?w=800&q=80",
            intro: "The Sahara Society & Child Developmental Rehabilitation Center provides holistic therapies ranging from speech and sensory integration to community rehabilitation.",
            description: "Their Mother as Rehabilitation Activists (MARA) project empowers primary caregivers with clinical training.",
            impact: "Empowered 5,000+ mothers across 12 primary rehabilitation centers in South India.",
            connection: "AutiCure provides digital tracking tools for Sahara MARA project participants.",
            website: "http://saharasociety.com/",
            gallery: ["https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80", "https://images.unsplash.com/photo-1576765608596-58681d44a782?w=800&q=80"]
        },
        srividya: {
            name: "Sri Vidya School",
            tagline: "Dedicated Special Education & Residency",
            logo: "https://images.unsplash.com/photo-1503676260728-1c00da07bb5e?w=800&q=80",
            intro: "Sri Vidya Centre for Special Children is a non-profit school in Secunderabad dedicated to training children with cognitive disabilities.",
            description: "Offers intensive special education, speech therapy, and vocational employment readiness programs.",
            impact: "Integrated dozens of students into competitive workplace roles across mainstream industries.",
            connection: "AutiCure’s School Support platform is piloted at Sri Vidya for real-time teacher-parent sync.",
            website: "http://srividhyaschool.org/",
            gallery: ["https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80"]
        },
        nayidisha: {
            name: "Nayi Disha",
            tagline: "Empowering Families via Technology",
            logo: "https://images.unsplash.com/photo-1454165833767-027ffea70215?w=800&q=80",
            intro: "Nayi Disha Resource Centre uses technology to empower families through provider directories and knowledge hubs.",
            description: "Maintains a verified national directory of service providers and multilingual diagnostic resources.",
            impact: "Supports a community network of over 62,000 families across 1,350 towns and cities.",
            connection: "AutiCure is recommended as a preferred digital telemetry tool within Nayi Disha's hub.",
            website: "https://nayi-disha.org/",
            gallery: ["https://images.unsplash.com/photo-1460518451285-cd7ba7112c5b?w=800&q=80", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80"]
        }
    };

    const partnerModal = document.getElementById('partnerModal');
    const pmCloseBtn = document.getElementById('pmCloseBtn');
    const pmOverlay = document.getElementById('pmOverlay');
    const partnerCardsClick = document.querySelectorAll('.clickable-partner');

    if (partnerModal && partnerCardsClick.length > 0) {
        const openModal = (id) => {
            const data = partnerData[id];
            if (!data) return;

            document.getElementById('pmName').textContent = data.name;
            document.getElementById('pmTagline').textContent = data.tagline;
            document.getElementById('pmLogo').src = data.logo;
            document.getElementById('pmIntro').textContent = data.intro;
            document.getElementById('pmDescription').textContent = data.description;
            document.getElementById('pmImpact').textContent = data.impact;
            document.getElementById('pmConnection').textContent = data.connection;
            document.getElementById('pmWebsite').href = data.website;

            const galleryGrid = document.getElementById('pmGallery');
            if (galleryGrid) {
                galleryGrid.innerHTML = '';
                data.gallery.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.className = 'pm-gal-img';
                    galleryGrid.appendChild(img);
                });
            }

            partnerModal.classList.add('active');
            lenis.stop();
        };

        const closeModal = () => {
            partnerModal.classList.remove('active');
            lenis.start();
        };

        partnerCardsClick.forEach(card => {
            card.addEventListener('click', () => {
                const partnerId = card.getAttribute('data-partner');
                openModal(partnerId);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const partnerId = card.getAttribute('data-partner');
                    openModal(partnerId);
                }
            });
        });

        if (pmCloseBtn) pmCloseBtn.addEventListener('click', closeModal);
        if (pmOverlay) pmOverlay.addEventListener('click', closeModal);
    }

    // =====================================================
    // 9. JOIN ECOSYSTEM MODAL & DYNAMIC FORM
    // =====================================================
    const joinBtn = document.getElementById('joinEcosystemBtn');
    const joinWaitlistLink = document.getElementById('footerWaitlistLink');
    const joinModal = document.getElementById('joinModalOverlay');
    const joinCloseBtn = document.getElementById('joinCloseBtn');

    if (joinModal) {
        const openJoinModal = (e) => {
            if (e) e.preventDefault();
            joinModal.classList.add('active');
            lenis.stop();
        };

        const closeJoinModal = () => {
            joinModal.classList.remove('active');
            lenis.start();
        };

        if (joinBtn) joinBtn.addEventListener('click', openJoinModal);
        if (joinWaitlistLink) joinWaitlistLink.addEventListener('click', openJoinModal);
        if (joinCloseBtn) joinCloseBtn.addEventListener('click', closeJoinModal);

        joinModal.addEventListener('click', (e) => {
            if (e.target === joinModal) closeJoinModal();
        });

        const roleSelect = document.getElementById('joinRole');
        const dynamicContainer = document.getElementById('dynamicFieldsContainer');
        const allRoleFields = document.querySelectorAll('.role-fields');

        if (roleSelect && dynamicContainer) {
            roleSelect.addEventListener('change', (e) => {
                const selectedRole = e.target.value;
                dynamicContainer.classList.add('active');

                allRoleFields.forEach(field => {
                    field.classList.remove('active');
                    const inputs = field.querySelectorAll('input, select, textarea');
                    inputs.forEach(input => input.disabled = true);
                });

                if (selectedRole) {
                    const activeField = document.getElementById(`fields-${selectedRole}`);
                    if (activeField) {
                        activeField.classList.add('active');
                        const inputs = activeField.querySelectorAll('input, select, textarea');
                        inputs.forEach(input => input.disabled = false);
                    }
                }
            });
        }

        const joinForm = document.getElementById('joinForm');
        if (joinForm) {
            joinForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = joinForm.querySelector('.join-submit-btn span');
                const origText = submitBtn ? submitBtn.textContent : 'Join';
                if (submitBtn) submitBtn.textContent = 'Joining...';

                setTimeout(() => {
                    if (submitBtn) submitBtn.textContent = 'Welcome to AutiCure!';
                    setTimeout(() => {
                        closeJoinModal();
                        joinForm.reset();
                        if (submitBtn) submitBtn.textContent = origText;
                        if (dynamicContainer) dynamicContainer.classList.remove('active');
                        allRoleFields.forEach(field => field.classList.remove('active'));
                    }, 1200);
                }, 800);
            });
        }
    }
});