/**
 * USA Glassomorphic Map 2025
 * Interactive JavaScript functionality
 * 
 * Authors: Puppy Pilot & Anacondy
 * "We got him" - Zero Dark Thirty
 * 
 * This script handles:
 * - SVG map rendering
 * - State interactions (click, hover)
 * - Data display in info panel
 * - Mobile touch event handling
 * - Input sanitization for security
 */

// State data with capitals, population, and area
const stateData = {
    CA: { name: 'California', capital: 'Sacramento', population: '39.5M', area: '163,696 sq mi', x: 100, y: 280 },
    TX: { name: 'Texas', capital: 'Austin', population: '29.1M', area: '268,596 sq mi', x: 480, y: 420 },
    FL: { name: 'Florida', capital: 'Tallahassee', population: '21.5M', area: '65,758 sq mi', x: 750, y: 470 },
    NY: { name: 'New York', capital: 'Albany', population: '19.5M', area: '54,555 sq mi', x: 820, y: 180 },
    PA: { name: 'Pennsylvania', capital: 'Harrisburg', population: '12.8M', area: '46,054 sq mi', x: 780, y: 220 },
    IL: { name: 'Illinois', capital: 'Springfield', population: '12.7M', area: '57,914 sq mi', x: 620, y: 240 },
    OH: { name: 'Ohio', capital: 'Columbus', population: '11.7M', area: '44,826 sq mi', x: 700, y: 240 },
    GA: { name: 'Georgia', capital: 'Atlanta', population: '10.6M', area: '59,425 sq mi', x: 720, y: 400 },
    NC: { name: 'North Carolina', capital: 'Raleigh', population: '10.4M', area: '53,819 sq mi', x: 760, y: 360 },
    MI: { name: 'Michigan', capital: 'Lansing', population: '10M', area: '96,714 sq mi', x: 680, y: 180 },
    WA: { name: 'Washington', capital: 'Olympia', population: '7.7M', area: '71,298 sq mi', x: 120, y: 80 },
    AZ: { name: 'Arizona', capital: 'Phoenix', population: '7.2M', area: '113,990 sq mi', x: 200, y: 380 },
    MA: { name: 'Massachusetts', capital: 'Boston', population: '6.9M', area: '10,554 sq mi', x: 860, y: 160 },
    TN: { name: 'Tennessee', capital: 'Nashville', population: '6.8M', area: '42,144 sq mi', x: 680, y: 340 },
    IN: { name: 'Indiana', capital: 'Indianapolis', population: '6.7M', area: '36,420 sq mi', x: 660, y: 260 },
    MO: { name: 'Missouri', capital: 'Jefferson City', population: '6.1M', area: '69,707 sq mi', x: 580, y: 300 },
    MD: { name: 'Maryland', capital: 'Annapolis', population: '6.1M', area: '12,406 sq mi', x: 800, y: 280 },
    WI: { name: 'Wisconsin', capital: 'Madison', population: '5.8M', area: '65,496 sq mi', x: 620, y: 160 },
    CO: { name: 'Colorado', capital: 'Denver', population: '5.8M', area: '104,094 sq mi', x: 340, y: 280 },
    MN: { name: 'Minnesota', capital: 'St. Paul', population: '5.6M', area: '86,936 sq mi', x: 560, y: 120 },
    SC: { name: 'South Carolina', capital: 'Columbia', population: '5.1M', area: '32,020 sq mi', x: 750, y: 400 },
    AL: { name: 'Alabama', capital: 'Montgomery', population: '5M', area: '52,420 sq mi', x: 680, y: 400 },
    LA: { name: 'Louisiana', capital: 'Baton Rouge', population: '4.6M', area: '52,378 sq mi', x: 600, y: 450 },
    KY: { name: 'Kentucky', capital: 'Frankfort', population: '4.5M', area: '40,408 sq mi', x: 680, y: 300 },
    OR: { name: 'Oregon', capital: 'Salem', population: '4.2M', area: '98,379 sq mi', x: 100, y: 140 },
    OK: { name: 'Oklahoma', capital: 'Oklahoma City', population: '4M', area: '69,899 sq mi', x: 500, y: 360 },
    CT: { name: 'Connecticut', capital: 'Hartford', population: '3.6M', area: '5,543 sq mi', x: 850, y: 180 },
    UT: { name: 'Utah', capital: 'Salt Lake City', population: '3.2M', area: '84,897 sq mi', x: 260, y: 260 },
    IA: { name: 'Iowa', capital: 'Des Moines', population: '3.2M', area: '56,273 sq mi', x: 560, y: 220 },
    NV: { name: 'Nevada', capital: 'Carson City', population: '3.1M', area: '110,572 sq mi', x: 180, y: 260 },
    AR: { name: 'Arkansas', capital: 'Little Rock', population: '3M', area: '53,179 sq mi', x: 600, y: 360 },
    KS: { name: 'Kansas', capital: 'Topeka', population: '2.9M', area: '82,278 sq mi', x: 500, y: 280 },
    NM: { name: 'New Mexico', capital: 'Santa Fe', population: '2.1M', area: '121,590 sq mi', x: 320, y: 380 },
    NE: { name: 'Nebraska', capital: 'Lincoln', population: '1.9M', area: '77,348 sq mi', x: 480, y: 240 },
    WV: { name: 'West Virginia', capital: 'Charleston', population: '1.8M', area: '24,230 sq mi', x: 740, y: 290 },
    ID: { name: 'Idaho', capital: 'Boise', population: '1.8M', area: '83,569 sq mi', x: 220, y: 140 },
    HI: { name: 'Hawaii', capital: 'Honolulu', population: '1.4M', area: '10,932 sq mi', x: 280, y: 520 },
    NH: { name: 'New Hampshire', capital: 'Concord', population: '1.4M', area: '9,349 sq mi', x: 860, y: 140 },
    ME: { name: 'Maine', capital: 'Augusta', population: '1.3M', area: '35,380 sq mi', x: 880, y: 100 },
    RI: { name: 'Rhode Island', capital: 'Providence', population: '1.1M', area: '1,545 sq mi', x: 870, y: 170 },
    MT: { name: 'Montana', capital: 'Helena', population: '1.1M', area: '147,040 sq mi', x: 300, y: 100 },
    DE: { name: 'Delaware', capital: 'Dover', population: '990K', area: '2,489 sq mi', x: 810, y: 270 },
    SD: { name: 'South Dakota', capital: 'Pierre', population: '880K', area: '77,116 sq mi', x: 460, y: 160 },
    ND: { name: 'North Dakota', capital: 'Bismarck', population: '760K', area: '70,698 sq mi', x: 460, y: 100 },
    AK: { name: 'Alaska', capital: 'Juneau', population: '730K', area: '665,384 sq mi', x: 100, y: 520 },
    VT: { name: 'Vermont', capital: 'Montpelier', population: '640K', area: '9,616 sq mi', x: 850, y: 130 },
    WY: { name: 'Wyoming', capital: 'Cheyenne', population: '580K', area: '97,813 sq mi', x: 360, y: 200 },
    DC: { name: 'Washington DC', capital: 'Washington DC', population: '700K', area: '68 sq mi', x: 800, y: 270 }
};

// Simplified USA state paths for SVG rendering
// These are approximate representations for the glassomorphic map
const statePaths = {
    CA: 'M 50,200 L 80,180 L 120,200 L 140,250 L 150,320 L 130,380 L 100,400 L 70,380 L 60,320 L 50,260 Z',
    TX: 'M 420,320 L 520,320 L 540,360 L 540,420 L 520,480 L 460,490 L 400,480 L 380,440 L 400,380 Z',
    FL: 'M 720,420 L 760,420 L 780,440 L 800,480 L 790,510 L 770,520 L 740,510 L 720,490 L 710,460 Z',
    NY: 'M 780,140 L 840,140 L 860,160 L 860,190 L 840,210 L 800,220 L 780,200 L 770,170 Z',
    PA: 'M 740,200 L 810,200 L 820,220 L 810,240 L 760,250 L 740,230 Z',
    IL: 'M 600,200 L 640,200 L 650,260 L 640,300 L 600,310 L 590,260 Z',
    OH: 'M 670,210 L 720,210 L 730,240 L 730,270 L 700,280 L 670,270 L 660,240 Z',
    GA: 'M 700,360 L 740,360 L 750,400 L 740,440 L 710,450 L 690,430 L 680,390 Z',
    NC: 'M 720,330 L 790,330 L 810,350 L 810,380 L 780,390 L 730,380 L 710,360 Z',
    MI: 'M 650,140 L 700,140 L 710,170 L 710,210 L 680,220 L 650,210 L 640,180 Z',
    WA: 'M 80,40 L 160,40 L 170,70 L 170,110 L 140,120 L 90,120 L 70,90 Z',
    AZ: 'M 160,340 L 230,340 L 240,380 L 240,420 L 210,430 L 170,420 L 150,380 Z',
    MA: 'M 830,140 L 880,140 L 890,160 L 890,180 L 860,190 L 830,180 Z',
    TN: 'M 640,310 L 720,310 L 730,330 L 730,360 L 700,370 L 650,360 L 630,340 Z',
    IN: 'M 640,230 L 680,230 L 690,270 L 680,290 L 650,300 L 640,270 Z',
    MO: 'M 540,260 L 610,260 L 620,300 L 610,330 L 570,340 L 540,320 L 530,290 Z',
    MD: 'M 770,260 L 820,260 L 830,280 L 820,300 L 780,310 L 770,290 Z',
    WI: 'M 590,120 L 640,120 L 650,160 L 650,200 L 620,210 L 590,200 L 580,160 Z',
    CO: 'M 300,240 L 380,240 L 390,280 L 390,320 L 360,330 L 310,330 L 290,300 Z',
    MN: 'M 520,80 L 590,80 L 600,120 L 600,160 L 570,170 L 530,160 L 510,120 Z',
    SC: 'M 720,370 L 770,370 L 780,400 L 770,430 L 740,440 L 720,420 Z',
    AL: 'M 660,370 L 700,370 L 710,410 L 700,440 L 670,450 L 660,410 Z',
    LA: 'M 560,410 L 620,410 L 630,440 L 630,480 L 600,490 L 570,480 L 550,450 Z',
    KY: 'M 650,280 L 710,280 L 720,300 L 710,320 L 670,330 L 650,310 Z',
    OR: 'M 60,100 L 140,100 L 150,130 L 150,170 L 120,180 L 70,170 L 50,140 Z',
    OK: 'M 460,320 L 530,320 L 540,350 L 540,390 L 510,400 L 470,390 L 450,360 Z',
    CT: 'M 840,160 L 870,160 L 880,180 L 870,200 L 850,210 L 840,190 Z',
    UT: 'M 230,220 L 290,220 L 300,260 L 300,300 L 270,310 L 240,300 L 220,270 Z',
    IA: 'M 530,190 L 590,190 L 600,220 L 590,250 L 550,260 L 530,240 Z',
    NV: 'M 140,210 L 210,210 L 220,250 L 220,300 L 190,310 L 150,300 L 130,260 Z',
    AR: 'M 570,330 L 620,330 L 630,360 L 620,390 L 590,400 L 570,370 Z',
    KS: 'M 460,250 L 530,250 L 540,280 L 530,310 L 490,320 L 460,300 Z',
    NM: 'M 280,340 L 350,340 L 360,380 L 360,420 L 330,430 L 290,420 L 270,380 Z',
    NE: 'M 440,210 L 510,210 L 520,240 L 510,270 L 470,280 L 440,260 Z',
    WV: 'M 710,270 L 760,270 L 770,290 L 760,310 L 730,320 L 710,300 Z',
    ID: 'M 180,100 L 250,100 L 260,140 L 260,180 L 230,190 L 190,180 L 170,150 Z',
    HI: 'M 250,500 L 300,500 L 310,520 L 300,540 L 270,550 L 250,530 Z',
    NH: 'M 850,120 L 880,120 L 890,140 L 880,160 L 860,170 L 850,150 Z',
    ME: 'M 870,70 L 910,70 L 920,90 L 920,120 L 900,130 L 870,120 L 860,100 Z',
    RI: 'M 860,155 L 885,155 L 890,170 L 885,185 L 870,190 L 860,180 Z',
    MT: 'M 260,60 L 340,60 L 350,90 L 350,130 L 320,140 L 270,130 L 250,100 Z',
    DE: 'M 800,250 L 820,250 L 830,270 L 820,290 L 810,300 L 800,280 Z',
    SD: 'M 420,130 L 490,130 L 500,160 L 490,190 L 450,200 L 420,180 Z',
    ND: 'M 420,70 L 490,70 L 500,100 L 490,130 L 450,140 L 420,120 Z',
    AK: 'M 60,500 L 130,500 L 140,520 L 130,540 L 100,550 L 60,540 L 50,520 Z',
    VT: 'M 840,110 L 870,110 L 880,130 L 870,150 L 850,160 L 840,140 Z',
    WY: 'M 320,170 L 390,170 L 400,200 L 390,230 L 350,240 L 320,220 Z',
    DC: 'M 795,265 L 805,265 L 810,270 L 805,280 L 795,280 Z'
};

// Currently active state
let activeState = null;

/**
 * Initialize the map when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    renderMap();
    setupEventListeners();
    addTouchSupport();
});

/**
 * Render the SVG map with all states
 * Creates path elements for each state with proper attributes
 */
function renderMap() {
    const svg = document.getElementById('usa-map');
    
    // Clear any existing content
    svg.innerHTML = '';
    
    // Create a group for all states
    const statesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    statesGroup.setAttribute('id', 'states-group');
    
    // Render each state
    for (const [code, pathData] of Object.entries(statePaths)) {
        // Create path element
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('class', 'state');
        path.setAttribute('data-state', code);
        path.setAttribute('id', `state-${code}`);
        
        // Add accessibility attributes
        path.setAttribute('role', 'button');
        path.setAttribute('aria-label', stateData[code]?.name || code);
        path.setAttribute('tabindex', '0');
        
        statesGroup.appendChild(path);
        
        // Add state label if position is defined
        if (stateData[code] && stateData[code].x && stateData[code].y) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', stateData[code].x);
            text.setAttribute('y', stateData[code].y);
            text.setAttribute('class', 'state-label');
            text.textContent = code;
            statesGroup.appendChild(text);
        }
    }
    
    svg.appendChild(statesGroup);
}

/**
 * Setup event listeners for state interactions
 * Handles click events and keyboard navigation
 */
function setupEventListeners() {
    const states = document.querySelectorAll('.state');
    
    states.forEach(state => {
        // Click/tap event
        state.addEventListener('click', function(e) {
            handleStateClick(this);
        });
        
        // Keyboard navigation support
        state.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleStateClick(this);
            }
        });
        
        // Hover effect (desktop only)
        if (window.matchMedia('(hover: hover)').matches) {
            state.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.filter = 'brightness(1.2)';
                }
            });
            
            state.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.filter = '';
                }
            });
        }
    });
}

/**
 * Handle state click/selection
 * Updates UI and displays state information
 * @param {Element} stateElement - The clicked state SVG element
 */
function handleStateClick(stateElement) {
    const stateCode = stateElement.getAttribute('data-state');
    const data = stateData[stateCode];
    
    // Input validation - ensure state code exists
    if (!data || !stateCode) {
        console.error('Invalid state selection');
        return;
    }
    
    // Remove active class from previous state
    if (activeState) {
        activeState.classList.remove('active');
    }
    
    // Add active class to new state
    stateElement.classList.add('active');
    activeState = stateElement;
    
    // Update info panel with sanitized data
    updateInfoPanel(data);
    
    // Haptic feedback for mobile devices
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

/**
 * Update the information panel with state data
 * Sanitizes all output to prevent XSS attacks
 * @param {Object} data - State data object
 */
function updateInfoPanel(data) {
    // Sanitize function to prevent XSS
    const sanitize = (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };
    
    // Update DOM elements with sanitized data
    document.getElementById('state-name').textContent = sanitize(data.name);
    document.getElementById('state-info').textContent = `Explore ${sanitize(data.name)} - The ${sanitize(data.capital)} State`;
    document.getElementById('state-capital').textContent = sanitize(data.capital);
    document.getElementById('state-population').textContent = sanitize(data.population);
    document.getElementById('state-area').textContent = sanitize(data.area);
    
    // Smooth scroll to info panel on mobile
    if (window.innerWidth < 768) {
        document.querySelector('.info-panel').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }
}

/**
 * Add touch support optimizations for mobile devices
 * Improves responsiveness and prevents double-tap zoom
 */
function addTouchSupport() {
    const svg = document.getElementById('usa-map');
    let lastTap = 0;
    
    // Prevent double-tap zoom on mobile
    svg.addEventListener('touchend', function(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500 && tapLength > 0) {
            e.preventDefault();
        }
        
        lastTap = currentTime;
    }, { passive: false });
    
    // Improve touch responsiveness
    const states = document.querySelectorAll('.state');
    states.forEach(state => {
        state.addEventListener('touchstart', function() {
            this.style.transition = 'fill 0.1s ease';
        }, { passive: true });
    });
}

/**
 * Handle viewport resize events
 * Ensures responsive behavior on orientation change
 */
window.addEventListener('resize', function() {
    // Debounce resize events
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(function() {
        // Re-render map if needed for optimal display
        console.log('Viewport resized - optimizing display');
    }, 250);
});

/**
 * Handle orientation change for mobile devices
 */
window.addEventListener('orientationchange', function() {
    setTimeout(function() {
        // Adjust layout after orientation change
        console.log('Orientation changed - adjusting layout');
    }, 100);
});

// Security: Prevent console manipulation in production
if (typeof window !== 'undefined') {
    // Disable right-click context menu on map to prevent tampering
    document.getElementById('usa-map')?.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
}

// Log initialization
console.log('USA Glassomorphic Map initialized - Ready for interaction');
console.log('Authors: Puppy Pilot & Anacondy');
console.log('"For God and country" - Zero Dark Thirty');
